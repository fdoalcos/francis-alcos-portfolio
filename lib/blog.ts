import fs from 'node:fs';
import path from 'node:path';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  published: boolean;
  coverImage?: string;
}

export interface BlogPostSummary extends BlogPostFrontmatter {
  slug: string;
}

export interface BlogPost extends BlogPostSummary {
  content: string;
  html: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function slugFromFilename(filename: string) {
  return filename.replace(/\.md$/, '');
}

function parseFrontmatter(raw: string): { frontmatter: BlogPostFrontmatter; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    throw new Error('Invalid post format: missing frontmatter block.');
  }

  const [, rawFrontmatter, content] = match;
  const values = new Map<string, string>();

  for (const line of rawFrontmatter.split('\n')) {
    if (!line.trim()) {
      continue;
    }

    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    values.set(key, value);
  }

  const title = values.get('title');
  const date = values.get('date');
  const excerpt = values.get('excerpt');

  if (!title || !date || !excerpt) {
    throw new Error('Invalid post format: title, date, and excerpt are required.');
  }

  const tags = (values.get('tags') || '')
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);

  return {
    frontmatter: {
      title,
      date,
      excerpt,
      tags,
      published: values.get('published') !== 'false',
      coverImage: values.get('coverImage') || undefined,
    },
    content: content.trim(),
  };
}

function renderInlineMarkdown(value: string) {
  const escaped = escapeHtml(value);

  return escaped
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
}

function renderMarkdown(markdown: string) {
  const lines = markdown.split('\n');
  const html: string[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed === '---') {
      html.push('<hr />');
      index += 1;
      continue;
    }

    if (trimmed.startsWith('```')) {
      const codeLines: string[] = [];
      index += 1;

      while (index < lines.length && !lines[index].trim().startsWith('```')) {
        codeLines.push(lines[index]);
        index += 1;
      }

      html.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
      index += 1;
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      html.push(`<h${level}>${renderInlineMarkdown(headingMatch[2])}</h${level}>`);
      index += 1;
      continue;
    }

    if (trimmed.startsWith('> ')) {
      const quoteLines: string[] = [];

      while (index < lines.length && lines[index].trim().startsWith('> ')) {
        quoteLines.push(lines[index].trim().slice(2));
        index += 1;
      }

      html.push(`<blockquote>${quoteLines.map(renderInlineMarkdown).join('<br />')}</blockquote>`);
      continue;
    }

    const unorderedMatch = trimmed.match(/^[-*]\s+(.+)$/);
    if (unorderedMatch) {
      const items: string[] = [];

      while (index < lines.length) {
        const itemMatch = lines[index].trim().match(/^[-*]\s+(.+)$/);
        if (!itemMatch) {
          break;
        }
        items.push(`<li>${renderInlineMarkdown(itemMatch[1])}</li>`);
        index += 1;
      }

      html.push(`<ul>${items.join('')}</ul>`);
      continue;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (orderedMatch) {
      const items: string[] = [];

      while (index < lines.length) {
        const itemMatch = lines[index].trim().match(/^\d+\.\s+(.+)$/);
        if (!itemMatch) {
          break;
        }
        items.push(`<li>${renderInlineMarkdown(itemMatch[1])}</li>`);
        index += 1;
      }

      html.push(`<ol>${items.join('')}</ol>`);
      continue;
    }

    const paragraphLines = [trimmed];
    index += 1;

    while (index < lines.length) {
      const next = lines[index].trim();
      if (!next || next === '---' || next.startsWith('```') || next.startsWith('> ') || /^#{1,4}\s+/.test(next) || /^[-*]\s+/.test(next) || /^\d+\.\s+/.test(next)) {
        break;
      }
      paragraphLines.push(next);
      index += 1;
    }

    html.push(`<p>${renderInlineMarkdown(paragraphLines.join(' '))}</p>`);
  }

  return html.join('\n');
}

function readPostFile(filename: string): BlogPost {
  const fullPath = path.join(postsDirectory, filename);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { frontmatter, content } = parseFrontmatter(raw);
  const slug = slugFromFilename(filename);

  return {
    ...frontmatter,
    slug,
    content,
    html: renderMarkdown(content),
  };
}

function compareByDateDescending(a: BlogPostSummary, b: BlogPostSummary) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function getAllPosts() {
  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith('.md'))
    .map(readPostFile)
    .sort(compareByDateDescending);
}

export function getPublishedPosts(): BlogPostSummary[] {
  return getAllPosts()
    .filter((post) => post.published)
    .map(({ content, html, ...summary }) => summary);
}

export function getPostBySlug(slug: string) {
  const post = getAllPosts().find((entry) => entry.slug === slug);
  if (!post || !post.published) {
    return null;
  }

  return post;
}
