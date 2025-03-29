// components/Footer.tsx
import Link from 'next/link';
import React from 'react';

export interface FooterProps {
    companyName?: string;
    year?: number;
}

export const Footer: React.FC<FooterProps> = ({
    companyName = 'Hyphen, Inc.',
    year = new Date().getFullYear(),
}) => {
    return (
        <footer className="bg-black text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-2 md:mb-0">
                    &copy; {year} {companyName}
                </div>
                <div className="flex space-x-4">
                    <Link href="/about" className="hover:underline">
                        About
                    </Link>
                    <Link href="/privacy" className="hover:underline">
                        Privacy
                    </Link>
                    <Link href="/terms" className="hover:underline">
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;