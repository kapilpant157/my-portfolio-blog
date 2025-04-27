import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import BlogLayout from '@/components/BlogLayout';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = await getAllPosts(); // Await the asynchronous function
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug); // Await the asynchronous function

  if (!post) {
    return notFound();
  }

  return (
    <BlogLayout frontMatter={post}>
      <MDXRemote source={post.content} />
    </BlogLayout>
  );
}