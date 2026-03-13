import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import SectionKicker from '@/components/SectionKicker';
import { getPublishedPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Francis Alcos',
  description: 'Writing on software systems, engineering tradeoffs, and ideas in progress.',
};

const fallbackCoverImage = '/blog-placeholder.svg';

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <main className="min-h-screen px-6 pb-16 pt-28 md:px-8 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <header className="mb-20 border-b border-white/10 pb-10">
          <SectionKicker text="WRITING // NOTES_ON_BUILDING" />
          <div className="mt-5">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase text-white">
              BLOG: <span className="font-light text-white/30">THOUGHTS</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-slate-400">
              A running log of things I am learning, building, and trying to understand more clearly.
            </p>
          </div>
        </header>

        <section className="mb-12 relative z-10">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-white/80">
              BLOGS
            </h2>
            <div className="flex-grow h-px bg-border-light-gray/50"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className="group border border-border-light-gray bg-matte-black/50 hover:border-white transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="aspect-[16/8] overflow-hidden border-b border-border-light-gray">
                    <Image
                      src={post.coverImage || fallbackCoverImage}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover grayscale-img group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                    />
                  </div>
                  <div className="p-5 flex min-h-[220px] flex-col">
                    <div className="flex items-center justify-between mb-3 gap-3">
                      <span className="text-[9px] font-mono text-white/40 tracking-widest uppercase">
                        {String(index + 1).padStart(2, '0')} / {formatDate(post.date)}
                      </span>
                      <span className="text-[9px] font-mono text-white bg-white/10 px-2 py-0.5 tracking-widest uppercase">
                        {post.tags[0] ?? 'NOTE'}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold text-white mb-2 group-hover:translate-x-1 transition-transform overflow-hidden"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="text-slate-400 text-sm font-light leading-relaxed mb-5 overflow-hidden"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {post.excerpt}
                    </p>
                    {post.tags.length > 1 && (
                      <div className="mb-5 mt-auto flex flex-wrap gap-2">
                        {post.tags.slice(1, 3).map((tag) => (
                          <span
                            key={tag}
                            className="border border-white/10 px-2 py-1 text-[9px] font-mono text-white/50 tracking-widest uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <span className="inline-flex items-center gap-2 text-[9px] font-mono text-white tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                      Open_Entry
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
            <div className="border border-border-light-gray/20 border-dashed flex items-center justify-center min-h-[250px]">
              <span className="text-[10px] font-mono text-white/10 tracking-[0.4em] uppercase">
                More_Blogs_Soon
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
