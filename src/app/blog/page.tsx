// app/blog/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  
  const allPosts = getAllPosts()
  const featuredPosts = allPosts.filter(post => post.featured)
  
  // Extract unique categories safely
  const categories = ['all', ...new Set(
    allPosts.flatMap(post => post.categories || [])
  )]

  // Filter posts based on search and category
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = 
      activeCategory === 'all' || 
      (post.categories && post.categories.includes(activeCategory))
    return matchesSearch && matchesCategory
  })

  const featuredFiltered = featuredPosts.filter(post => 
    filteredPosts.some(p => p.slug === post.slug)
  )
  const regularFiltered = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Header */}
      <header className="bg-primary-600 dark:bg-primary-700 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The Blog</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Insights, tutorials and thoughts on modern web development
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16">
        {/* Search and Filter */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search posts..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-auto">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredFiltered.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured Posts
              </h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredFiltered.map(post => (
                <article key={post.slug} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    {post.image ? (
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        width={750}
                        height={750}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-primary-500 dark:text-primary-400 text-lg font-medium">
                        {post.title.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center space-x-2 mb-3">
                      {post.categories?.slice(0, 2).map(category => (
                        <span key={category} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">
                          {category}
                        </span>
                      ))}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-primary-500 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                      {post.excerpt.substring(0, 120)}...
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{post.readingTime} min read</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {activeCategory === 'all' ? 'Latest Posts' : `${activeCategory} Posts`}
          </h2>
          
          {regularFiltered.length > 0 ? (
            <div className="space-y-8">
              {regularFiltered.map(post => (
                <article 
                  key={post.slug} 
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                        {post.image ? (
                          <Image
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-primary-500 dark:text-primary-400 text-2xl font-medium">
                            {post.title.charAt(0)}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories?.map(category => (
                          <span 
                            key={category} 
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 hover:text-primary-500 transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{post.readingTime} min read</span>
                          </div>
                        </div>
                        <Link 
                          href={`/blog/${post.slug}`} 
                          className="text-primary-500 hover:underline font-medium flex items-center"
                        >
                          Read more
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-12 text-center">
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                No posts found matching your criteria
              </h3>
              <button 
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                }}
                className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
              >
                Reset filters
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}