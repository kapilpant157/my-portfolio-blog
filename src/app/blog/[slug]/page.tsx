import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import BlogLayout from '@/components/BlogLayout';

export async function generateStaticParams() {
  const posts = await getAllPosts(); // Await the asynchronous function
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params; // Await the params Promise
  const post = await getPostBySlug(resolvedParams.slug); // Await the asynchronous function

  if (!post) {
    return notFound();
  }

  return (
    <BlogLayout frontMatter={post}>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </BlogLayout>
  );
}