import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPublishedPosts } from '@/lib/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | Francis Alcos',
    };
  }

  return {
    title: `${post.title} | Francis Alcos`,
    description: post.excerpt,
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 pb-16 pt-28 md:px-8 md:pt-32">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-[11px] font-mono uppercase tracking-[0.24em] text-neutral-500 transition-colors hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="mr-2 h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Back to blog
        </Link>

        <header className="mt-8 border-b border-white/10 pb-10">
          <div className="text-[11px] font-mono uppercase tracking-[0.24em] text-neutral-500">
            {formatDate(post.date)}
          </div>
          <h1 className="mt-5 text-4xl font-light tracking-tight text-white md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/10 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.24em] text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div
          className="blog-prose mt-10"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </main>
  );
}
