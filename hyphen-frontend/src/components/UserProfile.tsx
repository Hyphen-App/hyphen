import React from 'react';

export interface UserProfileProps {
  /**
   * User name
   */
  name: string;
  /**
   * User bio
   */
  bio: string;
  /**
   * User contact information
   */
  contact?: {
    instagram?: string;
    email?: string;
    website?: string;
    linkedin?: string;
  };
  /**
   * Optional additional className
   */
  className?: string;
}

/**
 * User profile component for displaying user information
 */
export const UserProfile = ({
  name,
  bio,
  contact = {},
  className = '',
}: UserProfileProps) => {
  const { instagram, email, website, linkedin } = contact;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      <div>
        <h1 className="text-3xl font-medium mb-4">{name}</h1>
        <div className="mb-6">
          <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-2">BIO</h2>
          <p className="text-base whitespace-pre-line">{bio}</p>
        </div>
      </div>

      <div>
        <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-4">CONTACT ME</h2>
        <ul className="space-y-2">
          {instagram && (
            <li>
              <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm hover:underline">
                <span className="mr-2">▸</span> INSTAGRAM
              </a>
            </li>
          )}
          {email && (
            <li>
              <a href={`mailto:${email}`} className="flex items-center text-sm hover:underline">
                <span className="mr-2">▸</span> EMAIL
              </a>
            </li>
          )}
          {website && (
            <li>
              <a href={website} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm hover:underline">
                <span className="mr-2">▸</span> WEBSITE
              </a>
            </li>
          )}
          {linkedin && (
            <li>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm hover:underline">
                <span className="mr-2">▸</span> LINKEDIN
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
