// components/PostPreview.tsx
import Link from 'next/link'
import { posts } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default function PostPreview({ post }: { post: typeof posts[0] }) {
  return (
    <article className="border-b border-gray-200 pb-8">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-2xl font-semibold hover:text-blue-600 transition-colors">
          {post.title}
        </h2>
      </Link>
      <div className="mt-2 text-gray-500">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="mx-2">•</span>
        <span>{post.readingTime} min read</span>
      </div>
      <p className="mt-3 text-gray-600">{post.excerpt}</p>
      <Link 
        href={`/blog/${post.slug}`}
        className="inline-block mt-4 text-blue-600 hover:underline"
      >
        Read more →
      </Link>
    </article>
  )
}