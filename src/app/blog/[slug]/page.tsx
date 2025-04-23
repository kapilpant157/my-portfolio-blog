// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import BlogLayout from '@/components/BlogLayout'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({
    slug: post.slug
  }))
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return notFound()
  }

  return (
    <BlogLayout frontMatter={post}>
      <MDXRemote source={post.content} />
    </BlogLayout>
  )
}