import { GalleryCard } from '@/components/GalleryCard'

type GalleryItem = {
  id: string;
  type: 'image' | 'video' | 'youtube';
  src: string;
  alt: string;
  title: string;
  description?: string;
  date: string;
};

const galleryItems = [
  {
    id: '1',
    type: 'image',
    src: '/gallery/abc.png',
    alt: 'UI Design Project',
    title: 'E-commerce Dashboard',
    description: 'Modern dashboard interface',
    date: 'May 2023'
  },
  {
    id: '4',
    type: 'image',
    src: '/gallery/abc.png',
    alt: 'UI Design Project',
    title: 'E-commerce Dashboard',
    description: 'Modern dashboard interface',
    date: 'May 2023'
  },
  {
    id: '2',
    type: 'video',
    src: '/gallery/video1.mp4',
    alt: 'Mobile App Demo',
    title: 'Fitness Tracker App',
    date: 'March 2023'
  },
  {
    id: '3',
    type: 'youtube',
    src: 'https://www.youtube.com/watch?v=3cDCtSAoWWw&ab_channel=KapilDevPant',
    alt: 'Product Demo',
    title: 'Product Launch',
    description: 'Official product demonstration',
    date: 'June 2023'
  }
] satisfies GalleryItem[]

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">My Gallery</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <GalleryCard key={item.id} item={item} items={galleryItems} />
        ))}
      </div>
    </div>
  )
}