import Link from 'next/link'
import { formatDate } from '@/lib/utils'

export default function BlogCard({ post }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {post.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <span>{formatDate(post.date)}</span>
            <span className="mx-2">•</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </Link>
    </div>
  )
}