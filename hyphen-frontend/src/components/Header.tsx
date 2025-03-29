import React from 'react';
import Link from 'next/link';
import Button from './Button';

export interface HeaderProps {
    /**
     * Is the user logged in
     */
    isLoggedIn?: boolean;
    /**
     * Current page
     */
    currentPage?: 'home' | 'profile' | 'project';
    /**
     * Optional additional className
     */
    className?: string;
}

/**
 * Header component for navigation
 */
export const Header = ({
    isLoggedIn = false,
    currentPage = 'home',
    className = '',
}: HeaderProps) => {
    return (
        <header className={`w-full py-6 px-8 flex justify-between items-center ${className}`}>
            <div className="flex items-center">
                <Link href="/" className="text-xl font-medium uppercase tracking-wider">
                    HYPHEN
                </Link>
            </div>

            <nav className="flex items-center space-x-4">
                {isLoggedIn ? (
                    <>
                        <Link href="/portfolio" passHref>
                            <Button
                                variant={currentPage === 'profile' ? 'primary' : 'outline'}
                                size="small"
                            >
                                MY PORTFOLIO
                            </Button>
                        </Link>
                        {currentPage === 'profile' && (
                            <Link href="/edit" passHref>
                                <Button variant="outline" size="small">
                                    EDIT
                                </Button>
                            </Link>
                        )}
                    </>
                ) : (
                    <>
                        <Link href="/signin" passHref>
                            <Button variant="outline" size="small">
                                SIGN IN
                            </Button>
                        </Link>
                        <Link href="/signup" passHref>
                            <Button variant="primary" size="small">
                                SIGN UP
                            </Button>
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
