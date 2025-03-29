import React from 'react';

export interface ButtonProps {
    /**
     * Button contents
     */
    children: React.ReactNode;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Button variant
     */
    variant?: 'primary' | 'secondary' | 'outline';
    /**
     * Button size
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Optional additional className
     */
    className?: string;
    /**
     * Optional disabled state
     */
    disabled?: boolean;
    /**
     * Optional type attribute
     */
    type?: 'button' | 'submit' | 'reset';
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    className = '',
    disabled = false,
    type = 'button',
    ...props
}: ButtonProps) => {
    const baseStyles = 'font-sans inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variantStyles = {
        primary: 'bg-black text-white hover:bg-gray-800',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        outline: 'border border-gray-300 bg-transparent hover:bg-gray-100'
    };

    const sizeStyles = {
        small: 'h-8 px-3 text-xs',
        medium: 'h-10 px-4',
        large: 'h-12 px-6 text-lg'
    };

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
