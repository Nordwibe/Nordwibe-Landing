'use client';

import React from 'react';

interface AvatarProps {
  name: string;
  size?: number;
  className?: string;
}

export function Avatar({ name, size = 50, className = '' }: AvatarProps) {
  const initials = name.charAt(0).toUpperCase();
  const colors = [
    'bg-red-500',
    'bg-blue-500', 
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
    'bg-orange-500',
    'bg-cyan-500',
    'bg-lime-500',
    'bg-rose-500'
  ];
  
  const colorIndex = name.charCodeAt(0) % colors.length;
  const bgColor = colors[colorIndex];

  return (
    <div 
      className={`${bgColor} rounded-full flex items-center justify-center text-white font-bold ${className}`}
      style={{ width: size, height: size }}
    >
      {initials}
    </div>
  );
}
