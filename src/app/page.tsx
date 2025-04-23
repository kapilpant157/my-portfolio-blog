import BlogCard from '@/components/BlogCard'
import  ProjectCard from '@/components/ProjectCard'
import { getRecentPosts } from '@/lib/posts'
import { getFeaturedProjects } from '@/lib/projects'
import HeroSection from '@/components/HeroSection'
import Gallery from '@/components/Gallery'


export default function Home() {
  const recentPosts = getRecentPosts(3)
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="space-y-12">
      <HeroSection />
      <Gallery />


      {/* <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I'm a developer and writer sharing my projects and thoughts.
        </p>
      </section> */}

      {featuredProjects.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {recentPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Recent Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="/blog"
              className="inline-block px-6 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              View All Posts
            </a>
          </div>
        </section>
      )}
    </div>
  )
}