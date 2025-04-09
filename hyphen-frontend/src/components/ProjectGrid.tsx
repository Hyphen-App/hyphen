import React, { useEffect, useState } from 'react';

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
export const ProjectGrid = ({ projects, className = '' }: ProjectGridProps) => {
  const renderRows = () => {
    const rows = [];
    let i = 0;

    while (i < projects.length) {
      // Alternate between two layout patterns for each pair of rows
      const rowType = Math.floor(i / 2) % 2;

      if (rowType === 0) {
        // Large + small pattern
        rows.push(
          <div key={`row-${i}`} className="flex gap-8 w-full">
            {projects[i] && (
              <BrickItem project={projects[i]} className="w-2/3 aspect-[2/1]" />
            )}
            {projects[i + 1] && (
              <BrickItem project={projects[i + 1]} className="w-1/3 aspect-square" />
            )}
          </div>
        );
      } else {
        // Small + large pattern
        rows.push(
          <div key={`row-${i}`} className="flex gap-8 w-full">
            {projects[i] && (
              <BrickItem project={projects[i]} className="w-1/3 aspect-square" />
            )}
            {projects[i + 1] && (
              <BrickItem project={projects[i + 1]} className="w-2/3 aspect-[2/1]" />
            )}
          </div>
        );
      }
      i += 2;
    }

    return rows;
  };

  return (
    <div className={`flex flex-col gap-8 ${className}`}>
      {renderRows()}
    </div>
  );
};

const BrickItem = ({ project, className = '' }: { project: any; className?: string }) => {
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      setIsResizing(true);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => setIsResizing(false), 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div className={`group relative pb-10 ${className}`}>
      {/* Image Tile */}
      <div className={`relative h-full w-full overflow-hidden rounded-xl ${isResizing ? 'pointer-events-none' : ''}`}>
        <a href={`/project/${project.id}`} className="block h-full w-full">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover Overlay */}
          <div className={`
            absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
            opacity-0 transition-opacity duration-300
            ${isResizing ? '' : 'group-hover:opacity-100'}
          `}/>
          {/* Hover Title Content */}
          <div className={`
            absolute bottom-0 left-0 w-full p-6 text-white
            transform translate-y-full transition-all duration-300
            ${isResizing ? '' : 'group-hover:translate-y-0'}
          `}>
            <h3 className="text-xs font-normal uppercase tracking-wider">{project.title}</h3>
            {project.description && (
              <p className="mt-2 text-xs opacity-90 line-clamp-2">
                {project.description}
              </p>
            )}
          </div>
        </a>
      </div>

      {/* Static Title Below with Arrow */}
      <div className={`
        absolute bottom-0 left-0 w-full pt-2
        transition-all duration-300
        ${isResizing ? '' : 'group-hover:opacity-0 group-hover:-translate-y-2'}
      `}>
        <div className="flex items-center gap-2">
          <h3 className="text-xs font-normal uppercase tracking-wider text-black">
            {project.title}
          </h3>
          <svg 
            width="17" 
            height="9" 
            viewBox="0 0 17 9" 
            fill="none" 
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M12.7724 0.477089L15.858 3.9339C16.0473 4.14603 16.0473 4.48996 15.858 4.70208L12.7724 8.1589C12.5831 8.37102 12.2761 8.37102 12.0868 8.1589C11.8974 7.94677 11.8974 7.60284 12.0868 7.39072L14.3446 4.86118H0V3.77481H14.3446L12.0868 1.24527C11.8974 1.03314 11.8974 0.689216 12.0868 0.477089C12.2761 0.264961 12.5831 0.264961 12.7724 0.477089Z" 
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;