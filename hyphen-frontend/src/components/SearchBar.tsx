// components/SearchBar.tsx
import React, { useState } from 'react';

export interface SearchBarProps {
    buttonText?: string;
    placeholder?: string;
    onSearch?: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
    buttonText = 'GET INSPIRED',
    placeholder = 'Search film, photography, mechanical keyboards, pottery, etc.',
    onSearch,
}) => {
    const [query, setQuery] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 150); // Slightly faster reset
        onSearch?.(query);
    };

    return (
        <div className="w-full max-w-4xl mx-auto relative">
            {/* Black "shadow" (offset layer) */}
            <div className="absolute -bottom-0.5 -right-0.5 w-full h-12 bg-black rounded-full" />

            <form onSubmit={handleSubmit} className="relative">
                <div className={`flex items-center border-2 border-black rounded-full bg-white transition-transform duration-100 ${isClicked ? 'translate-y-0.5 translate-x-0.5' : ''}`}>
                    <button
                        type="submit"
                        className={`h-12 px-6 bg-black text-white font-medium rounded-l-full focus:outline-none transition-colors ${isClicked ? 'bg-gray-800' : 'hover:bg-gray-900'}`}
                    >
                        {buttonText}
                    </button>

                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={placeholder}
                        className="flex-grow h-12 px-4 rounded-r-full focus:outline-none text-gray-800 placeholder-gray-400"
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;