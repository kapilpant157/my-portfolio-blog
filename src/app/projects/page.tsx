"use client";
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects, getFeaturedProjects } from '@/lib/projects';
import { useState } from 'react';

export default function ProjectsPage() {
  const allProjects = getAllProjects();
  const featuredProjects = getFeaturedProjects();
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get all unique tags from projects
  const allTags = Array.from(
    new Set(allProjects.flatMap(project => project.tags))
  );

  // Filter projects based on active filter and search query
  const filteredProjects = (activeFilter === 'featured' ? featuredProjects : allProjects)
    .filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSearch;
    });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">
            My Projects
          </h1>
          <p className="text-xl text-[var(--foreground)] max-w-3xl mx-auto">
            A collection of my recent work and case studies
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-md ${activeFilter === 'all' 
                ? 'bg-primary-500 text-[var(--foreground)]' 
                : 'bg-gray-200 dark:bg-gray-700 text-[var(--foreground)]'}`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('featured')}
              className={`px-4 py-2 rounded-md ${activeFilter === 'featured' 
                ? 'bg-primary-500 text-[var(--foreground)]' 
                : 'bg-gray-200 dark:bg-gray-700 text-[var(--foreground)]'}`}
            >
              Featured
            </button>
          </div>
          
          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-2 rounded-md border border-[var(--border)] bg-[var(--accent)] text-[var(--foreground)]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Tags Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSearchQuery(tag)}
              className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-[var(--foreground)] hover:bg-primary-500 hover:text-[var(--foreground)] transition-colors"
            >
              {tag}
            </button>
          ))}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="px-3 py-1 text-sm rounded-full bg-red-500 text-[var(--foreground)]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-[var(--foreground)]">
              No projects found matching your criteria
            </h3>
            <button 
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-primary-500 text-[var(--foreground)] rounded-md hover:bg-primary-600"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}