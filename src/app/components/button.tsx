import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-white
        text-blue-800
        font-bold
        text-lg
        px-8
        py-4
        rounded-full
        shadow-lg
        hover:shadow-xl
        transition-shadow
        duration-200
        border-none
        cursor-pointer
        ${className}
      `.trim()}
    >
      {children}
    </button>
  );
}
