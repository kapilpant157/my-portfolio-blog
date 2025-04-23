// components/FeaturedPostCard.tsx
import Link from 'next/link'
import { posts } from '@/lib/posts'

export default function FeaturedPostCard({ post }: { post: typeof posts[0] }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <span className="text-blue-600 hover:underline">Read more</span>
        </div>
      </Link>
    </div>
  )
}