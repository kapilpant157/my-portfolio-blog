'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { PlayIcon, PauseIcon, ArrowDownTrayIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'

type GalleryItem = {
  id: string
  type: 'image' | 'video' | 'youtube'
  src: string
  alt: string
  title?: string
  description?: string
  date?: string
  thumbnail?: string
}

export function GalleryCard({ item, items }: { item: GalleryItem; items: GalleryItem[] }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(items.findIndex(i => i.id === item.id))
  const cardVideoRef = useRef<HTMLVideoElement>(null)
  const zoomVideoRef = useRef<HTMLVideoElement>(null)

  // Handle video playback in card view
  const toggleCardPlay = () => {
    if (items[currentIndex].type === 'video') {
      if (isPlaying) {
        cardVideoRef.current?.pause()
      } else {
        cardVideoRef.current?.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle video playback in zoom view
  const toggleZoomPlay = () => {
    if (items[currentIndex].type === 'video') {
      if (isPlaying) {
        zoomVideoRef.current?.pause()
      } else {
        zoomVideoRef.current?.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Reset play state when changing items
  useEffect(() => {
    setIsPlaying(false)
  }, [currentIndex])

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  const navigateGallery = (direction: 'prev' | 'next') => {
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1
    if (newIndex >= items.length) newIndex = 0
    if (newIndex < 0) newIndex = items.length - 1
    setCurrentIndex(newIndex)
  }

  const currentItem = items[currentIndex]
  const youtubeId = currentItem.type === 'youtube' ? getYouTubeId(currentItem.src) : null

  return (
    <>
      {/* Card View */}
      <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
        {/* Media Container */}
        <div 
          className="relative aspect-video w-full cursor-pointer" 
          onClick={() => {
            setIsZoomed(true)
            if (currentItem.type === 'video') {
              setIsPlaying(true)
            }
          }}
        >
          {currentItem.type === 'image' ? (
            <Image
              src={currentItem.src}
              alt={currentItem.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : currentItem.type === 'video' ? (
            <>
              <video
                ref={cardVideoRef}
                src={currentItem.src}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                poster={currentItem.thumbnail || currentItem.src.replace('.mp4', '.jpg')}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleCardPlay()
                }}
                className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {!isPlaying && (
                  <PlayIcon className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            </>
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={currentItem.thumbnail || `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                alt={currentItem.alt}
                fill
                className="object-cover"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsPlaying(true)
                }}
                className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all"
                aria-label="Play YouTube video"
              >
                <PlayIcon className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {currentItem.title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
              {currentItem.title}
            </h3>
          )}
          {currentItem.description && (
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2">
              {currentItem.description}
            </p>
          )}
          {currentItem.date && (
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
              {currentItem.date}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {currentItem.type !== 'youtube' && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                const link = document.createElement('a')
                link.href = currentItem.src
                link.download = currentItem.alt || 'download'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Download"
            >
              <ArrowDownTrayIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>
          )}

          {(currentItem.type === 'video' || currentItem.type === 'youtube') && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                if (currentItem.type === 'youtube') {
                  setIsPlaying(!isPlaying)
                } else {
                  toggleCardPlay()
                }
              }}
              className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <PauseIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              ) : (
                <PlayIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Zoomed Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => {
              setIsZoomed(false)
              setIsPlaying(false)
            }}
          >
            <button 
              className="absolute top-4 right-4 text-white p-2"
              onClick={() => {
                setIsZoomed(false)
                setIsPlaying(false)
              }}
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            <div className="relative w-full max-w-6xl max-h-[90vh]">
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateGallery('prev')
                }}
              >
                <ChevronLeftIcon className="w-8 h-8" />
              </button>

              <div className="h-full w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                {currentItem.type === 'image' ? (
                  <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <div className="relative max-h-[80vh] w-full max-w-5xl">
                    <Image
                      src={currentItem.src}
                      alt={currentItem.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 80vw"
                    />
                  </div>
                </motion.div>
                
                  // <motion.div
                  //   initial={{ scale: 0.9 }}
                  //   animate={{ scale: 1 }}
                  //   transition={{ duration: 0.2 }}
                  //   className="relative w-full h-full"
                  // >
                  //   <Image
                  //     src={currentItem.src}
                  //     alt={currentItem.alt}
                  //     width={1920}
                  //     height={1080}
                  //     className="object-contain max-h-[80vh] mx-auto"
                  //   />
                  // </motion.div>
                ) : currentItem.type === 'video' ? (
                  <div className="w-full max-w-4xl">
                    <video
                      ref={zoomVideoRef}
                      src={currentItem.src}
                      className="w-full"
                      controls
                      autoPlay={isPlaying}
                      loop
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleZoomPlay()
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-full max-w-4xl aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${isPlaying ? 1 : 0}`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateGallery('next')
                }}
              >
                <ChevronRightIcon className="w-8 h-8" />
              </button>
            </div>

            {/* Caption */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white px-4">
              <h3 className="text-xl font-semibold">{currentItem.title}</h3>
              {currentItem.description && (
                <p className="text-gray-300">{currentItem.description}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}