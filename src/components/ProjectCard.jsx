import Link from 'next/link'
import Image from 'next/image'

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
      {/* Project Image */}
      <div className="relative h-48 w-full">
        <Image
          src={project.image || '/images/project-placeholder.jpg'}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex space-x-3">
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-md hover:opacity-90 transition-opacity text-sm font-medium"
            >
              Live Demo
            </Link>
          )}
          
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              View Code
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard