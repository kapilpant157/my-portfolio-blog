interface Post {
  image: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  readingTime: number;
  featured?: boolean;
  categories?: string[]; 
}

export const posts: Post[] = [
  {
    slug: "getting-started-wit-nextjs",
    categories: [],
    image: "/images/simulation.png",
    title: "Simulation and Modeling",
    excerpt:
      "Learn how to set up a new Next.js project with all the latest features.",
    date: "2023-05-15",
    content: "# Content here...",
    readingTime: 5,
    featured: true,
  },
  {
    slug: "system-and-is-concept",
    categories: [],
    image: "/images/simulation.png",
    title: "System and its Concept",
    excerpt: "Introduction to Simulation and Modeling",
    date: "2023-05-15",
    content: `

      ## What is a System?
      
      A system is a collection of interacting components...
      
      ### Key Features
      - Components
      - Interactions
      - Boundaries
    `,
    readingTime: 4,
    featured: true,
  },
  {
    slug: "system-and-its-concept",
    categories: [],
    title: "System and its Concept - Introduction to Simulation and Modeling",
    excerpt:
      "Learn about systems, their components, interactions, and why we study them in simulation and modeling.",
    date: "2023-05-15",
    content: `
      ## What is a System?
      
      A system is a collection of interacting components that work together to achieve a common goal. Systems can be found in various fields, including biology, engineering, and social sciences.
      
      ### Key Features
      - **Components**: The individual parts that make up the system.
      - **Interactions**: How the components interact with each other.
      - **Boundaries**: The limits that define the system and separate it from its environment.
    `,
    readingTime: 4,
    featured: true,
    image: "/images/simulation.png",
  },
  // Missing comma added here
  // Add more posts as needed
];
export function getAllPosts(): Post[] {
  return posts;
}

export function getRecentPosts(count: number = 4): Post[] {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

// If fetching from an API or CMS
// export async function getPostBySlug(slug: string): Promise<Post | undefined> {
//   const response = await fetch(`https://api.example.com/posts/${slug}`)
//   return response.json()
// }

// If using local data (no async needed)
// export function getPostBySlug(slug) {
//   return posts.find((post) => post.slug === slug)
// }
