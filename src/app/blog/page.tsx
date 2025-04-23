import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import FeaturedPostCard from '@/components/FeaturedPostCard'
import { formatDate } from '@/lib/utils'
import PostPreview from '@/components/PostPreview'

export default function BlogPage() {
  const posts = getAllPosts()
  const featuredPosts = posts.filter(post => post.featured)
  const regularPosts = posts.filter(post => !post.featured)
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      
      {featuredPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Featured Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map(post => (
              <FeaturedPostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
<section>
        <h2 className="text-xl font-semibold mb-4">All Posts</h2>
        <div className="space-y-8">
          {regularPosts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
            </Link>
            
            <div className="flex items-center mt-2 text-gray-500 space-x-4">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>•</span>
              <span>{post.readingTime} min read</span>
              {post.featured && (
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  Featured
                </span>
              )}
            </div>
            
            <p className="mt-3 text-gray-600">{post.excerpt}</p>
            
            <Link 
              href={`/blog/${post.slug}`} 
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}