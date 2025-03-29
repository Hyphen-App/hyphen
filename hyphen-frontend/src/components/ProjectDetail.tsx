import React from 'react';

export interface ProjectDetailProps {
  /**
   * Project title
   */
  title: string;
  /**
   * Project description
   */
  description: string;
  /**
   * Project images
   */
  images: string[];
  /**
   * Optional additional className
   */
  className?: string;
}

/**
 * Project detail component for displaying a single project
 */
export const ProjectDetail = ({
  title,
  description,
  images,
  className = '',
}: ProjectDetailProps) => {
  return (
    <div className={`space-y-8 ${className}`}>
      <div>
        <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-2">DESC</h2>
        <h1 className="text-2xl font-medium mb-4">{title}</h1>
        <p className="whitespace-pre-line">{description}</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-sm text-gray-500 uppercase tracking-wider">PROJECT</h2>
        <div className="grid grid-cols-1 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative w-full aspect-[4/3]">
              <img
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
