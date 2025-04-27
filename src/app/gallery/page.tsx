'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Video from 'yet-another-react-lightbox/plugins/video'
// import YouTube from 'yet-another-react-lightbox/plugins/youtube'

type GalleryItem = {
  id: string
  type: 'image' | 'video' | 'youtube'
  src: string
  alt: string
  title: string
  description?: string
  date: string
  thumbnail?: string
}

const galleryItems = [
  {
    id: '1',
    type: 'image',
    src: '/images/gallery/abc.png',
    thumbnail: '/images/gallery/abc.png',
    alt: 'UI Design Project',
    title: 'E-commerce Dashboard',
    description: 'Modern dashboard interface with analytics visualization',
    date: 'May 2023'
  },
  {
    id: '2',
    type: 'video',
    src: '/gallery/video1.mp4',
    thumbnail: '/gallery/video1-thumb.jpg',
    alt: 'Mobile App Demo',
    title: 'Fitness Tracker App',
    description: 'User journey through workout tracking features',
    date: 'March 2023'
  },
  {
    id: '3',
    type: 'youtube',
    src: 'https://www.youtube.com/watch?v=3cDCtSAoWWw',
    thumbnail: '/gallery/youtube-thumb.jpg',
    alt: 'Product Demo',
    title: 'Product Launch',
    description: 'Official product demonstration with feature walkthrough',
    date: 'June 2023'
  },
  {
    id: '4',
    type: 'image',
    src: '/gallery/abc.png',
    thumbnail: '/gallery/abc-thumb.jpg',
    alt: 'Mobile UI Design',
    title: 'Food Delivery App',
    description: 'Restaurant browsing and ordering interface',
    date: 'April 2023'
  },
  {
    id: '5',
    type: 'video',
    src: '/gallery/video2.mp4',
    thumbnail: '/gallery/video2-thumb.jpg',
    alt: 'Web App Demo',
    title: 'Project Management Tool',
    description: 'Team collaboration features demonstration',
    date: 'July 2023'
  },
  {
    id: '6',
    type: 'youtube',
    src: 'https://www.youtube.com/watch?v=example2',
    thumbnail: '/gallery/youtube2-thumb.jpg',
    alt: 'Tutorial Video',
    title: 'UI Design Tutorial',
    description: 'Step-by-step design process in Figma',
    date: 'August 2023'
  }
] satisfies GalleryItem[]

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const slides = galleryItems.map(item => {
    if (item.type === 'video') {
      return {
        type: 'video',
        sources: [{
          src: item.src,
          type: 'video/mp4'
        }],
        title: item.title,
        description: item.description
      }
    } else if (item.type === 'youtube') {
      return {
        type: 'youtube',
        src: item.src,
        title: item.title,
        description: item.description
      }
    } else {
      return {
        src: item.src,
        alt: item.alt,
        title: item.title,
        description: item.description
      }
    }
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Gallery</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            A visual showcase of my design and development work
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16">
        {/* Filters */}
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
                placeholder="Search gallery..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="w-full md:w-auto">
              <select
                className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="all">All Media Types</option>
                <option value="image">Images</option>
                <option value="video">Videos</option>
                <option value="youtube">YouTube</option>
              </select>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gray-100 dark:bg-gray-700">
                {item.thumbnail ? (
                  <Image
                    src={item.thumbnail}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    {item.type === 'image' && (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                    {item.type === 'video' && (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {item.type === 'youtube' && (
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    )}
                  </div>
                )}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {item.type.toUpperCase()}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">{item.description}</p>
                )}
                <p className="text-gray-500 dark:text-gray-400 text-xs">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          // slides={slides}
          index={currentIndex}
          plugins={[Zoom, Video]}
          // plugins={[Zoom, Video, YouTube]}

          controller={{ closeOnBackdropClick: true }}
          carousel={{ finite: true }}
          render={{
            buttonPrev: slides.length <= 1 ? () => null : undefined,
            buttonNext: slides.length <= 1 ? () => null : undefined,
          }}
        />
      </main>
    </div>
  )
}