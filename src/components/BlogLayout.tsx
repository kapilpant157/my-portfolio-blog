// "use client"
// import Head from 'next/head'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import { formatDate } from '@/lib/utils'

// export default function BlogLayout({ frontMatter, children }) {
//   const router = useRouter()

//   return (
//     <>
//       <Head>
//         <title>{frontMatter.title} | My Blog</title>
//         <meta name="description" content={frontMatter.excerpt} />
//         <meta property="og:title" content={frontMatter.title} />
//         <meta property="og:description" content={frontMatter.excerpt} />
//         {frontMatter.image && (
//           <meta property="og:image" content={frontMatter.image} />
//         )}
//       </Head>

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Back button */}
//         <button
//           onClick={() => router.back()}
//           className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
//         >
//           ← Back to blog
//         </button>

//         {/* Article header */}
//         <article className="prose prose-lg dark:prose-invert max-w-none">
//           <header className="mb-10">
//             <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
//               {frontMatter.title}
//             </h1>
            
//             <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 mt-4">
//               {frontMatter.date && (
//                 <time dateTime={frontMatter.date}>
//                   {formatDate(frontMatter.date)}
//                 </time>
//               )}
//               {frontMatter.author && (
//                 <span>By {frontMatter.author}</span>
//               )}
//             </div>

//             {frontMatter.tags && (
//               <div className="flex flex-wrap gap-2 mt-4">
//                 {frontMatter.tags.map(tag => (
//                   <Link 
//                     key={tag}
//                     href={`/tags/${tag}`}
//                     className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//                   >
//                     {tag}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </header>

//           {/* Content container */}
//           <div className="[&>*]:mb-6 [&>*:last-child]:mb-0">
//             {children}
//           </div>

//           {/* Footer */}
//           <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
//             <div className="flex justify-between items-center">
//               <Link 
//                 href="/blog" 
//                 className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
//               >
//                 ← View all posts
//               </Link>
              
//               {/* Optional: Add share buttons or author bio here */}
//             </div>
//           </footer>
//         </article>
//       </div>
//     </>
//   )
// }




// import Link from 'next/link'
// import { formatDate } from '@/lib/utils'

// interface BlogLayoutProps {
//   frontMatter: {
//     title: string
//     date: string
//     excerpt: string
//     readingTime: number
//   }
//   children: React.ReactNode
// }

// export default function BlogLayout({ frontMatter, children }: BlogLayoutProps) {
//   return (
//     <article className="max-w-3xl mx-auto px-4 py-8">
//       <header className="mb-8">
//         <h1 className="text-3xl font-bold mb-2">{frontMatter.title}</h1>
//         <div className="flex items-center text-gray-500 space-x-4">
//           <time dateTime={frontMatter.date}>
//             {formatDate(frontMatter.date)}
//           </time>
//           <span>•</span>
//           <span>{frontMatter.readingTime} min read</span>
//         </div>
//         <p className="mt-2 text-lg text-gray-600">{frontMatter.excerpt}</p>
//       </header>

//       <div className="prose prose-lg max-w-none">
//         {children}
//       </div>

//       <footer className="mt-12 pt-6 border-t border-gray-200">
//         <Link href="/blog" className="text-blue-600 hover:underline">
//           ← Back to all posts
//         </Link>
//       </footer>
//     </article>
//   )
// }



// 'use client'

// import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'
// import dynamic from 'next/dynamic'

// // Dynamically load components to reduce bundle size
// const components = {
//   h1: (props: any) => <h1 className="text-3xl font-bold my-4" {...props} />,
//   h2: (props: any) => <h2 className="text-2xl font-semibold my-3" {...props} />,
//   p: (props: any) => <p className="my-4 leading-relaxed" {...props} />,
//   // Add more component overrides as needed
// }

// export default function MdxProvider({ source }: { source: MDXRemoteProps }) {
//   return <MDXRemote {...source} components={components} />
// }
// filepath: d:\Projects\new website\my-portfolio-blog\src\components\BlogLayout.tsx
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

interface BlogLayoutProps {
  frontMatter: {
    title: string
    date: string
    excerpt: string
    readingTime: number
  }
  children: React.ReactNode
}

export default function BlogLayout({ frontMatter, children }: BlogLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{frontMatter.title}</h1>
        <div className="flex items-center text-gray-500 space-x-4">
          <time dateTime={frontMatter.date}>{formatDate(frontMatter.date)}</time>
          <span>•</span>
          <span>{frontMatter.readingTime} min read</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        {children}
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-200">
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to all posts
        </Link>
      </footer>
    </article>
  )
}