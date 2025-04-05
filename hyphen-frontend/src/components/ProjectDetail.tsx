import React from "react";

export interface ProjectDetailProps {
  /**
   * Project name
   */
  projectName: string;
  /**
   * Project description title
   */
  title: string;
  /**
   * Project description
   */
  description: string;
  /**
   * Project images
   */
  images: Array<{
    url: string;
    caption?: string;
  }>;
  /**
   * Optional additional className
   */
  className?: string;
}

export const ProjectDetail = ({
  projectName,
  title,
  description,
  images,
  className = "",
}: ProjectDetailProps) => {
  return (
    <div className={`space-y-12 ${className}`}>
      <h1 className="text-[40px] font-medium mb-8 leading-tight">
        {projectName}
      </h1>

      <div className="flex items-start">
        <div className="flex-shrink-0 mr-12">
          <h2 className="text-2xl text-[#00000080] uppercase tracking-wider whitespace-nowrap">
            DESC
          </h2>
        </div>
        <div className="flex-grow">
          <h1
            className="text-2xl font-normal mb-6 leading-tight"
            style={{ fontWeight: 400 }}
          >
            {title}
          </h1>
          <p className="text-base whitespace-pre-line mt-1">{description}</p>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl text-[#00000080] uppercase tracking-wider whitespace-nowrap">
          PROJECT
        </h2>
        <div className="space-y-8">
          {images.map((image, index) => (
            <div key={index} className="w-full">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={image.url}
                  alt={`${projectName} - Image ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
              {image.caption && (
                <p className="text-sm text-black mt-2 px-4"> {image.caption}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
