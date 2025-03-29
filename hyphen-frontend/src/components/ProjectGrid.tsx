import React from 'react';

export interface ProjectGridProps {
  /**
   * Array of projects to display
   */
  projects: Array<{
    id: string;
    title: string;
    imageUrl: string;
    description?: string;
  }>;
  /**
   * Optional additional className
   */
  className?: string;
}

/**
 * Project grid component for displaying multiple projects in a masonry-style layout
 */
export const ProjectGrid = ({
  projects,
  className = '',
}: ProjectGridProps) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative group overflow-hidden rounded-md"
        >
          <a href={`/project/${project.id}`} className="block">
            <div className="relative aspect-square">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute bottom-0 left-0 w-full p-4 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-sm font-medium uppercase tracking-wider">{project.title}</h3>
                {project.description && (
                  <p className="mt-1 text-xs opacity-90 line-clamp-2">{project.description}</p>
                )}
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
