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

  const ArrowIcon = () => (
    <svg width="12" height="12" viewBox="0 0 13 13" fill="none" className="mr-2">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.88001 0.19285L11.6512 0.732606C11.944 0.765728 12.2081 1.02993 12.2413 1.32271L12.781 6.09387C12.8141 6.38665 12.6037 6.59715 12.3109 6.56402C12.0181 6.5309 11.7539 6.2667 11.7208 5.97392L11.3258 2.48261L1.48999 12.3184L0.655458 11.4839L10.4913 1.64808L6.99995 1.25311C6.70717 1.21999 6.44297 0.955788 6.40985 0.663006C6.37673 0.370224 6.58723 0.159728 6.88001 0.19285Z"
        fill="black"
      />
    </svg>
  );

  return (
    <div className={`flex flex-col ${className}`}>
      <h1 className="text-[40px] font-medium mb-8 leading-tight">{name}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-12">
            <h2 className="text-2xl text-[#00000080] uppercase tracking-wider whitespace-nowrap">
              BIO
            </h2>
          </div>
          <p className="text-base whitespace-pre-line flex-grow mt-1">
            {bio}
          </p>
        </div>

        <div className="flex md:ml-12">
          <div className="flex-shrink-0">
            <h2 className="text-2xl text-[#00000080] uppercase tracking-wider whitespace-nowrap">
              CONTACT ME
            </h2>
            <ul className="space-y-2 mt-4">
              {instagram && (
                <li>
                  <a
                    href={`https://instagram.com/${instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm hover:underline"
                  >
                    <ArrowIcon /> INSTAGRAM
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center text-sm hover:underline"
                  >
                    <ArrowIcon /> EMAIL
                  </a>
                </li>
              )}
              {website && (
                <li>
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm hover:underline"
                  >
                    <ArrowIcon /> WEBSITE
                  </a>
                </li>
              )}
              {linkedin && (
                <li>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm hover:underline"
                  >
                    <ArrowIcon /> LINKEDIN
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;