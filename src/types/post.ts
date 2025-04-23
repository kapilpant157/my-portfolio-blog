export interface Post {
    slug: string
    title: string
    excerpt: string
    date: string
    content: string
    readingTime: number
    featured?: boolean
  }