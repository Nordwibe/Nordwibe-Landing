'use client';

import Button from "./button";
import { Logo } from "./logo"
import Image from "next/image";

export function Hero() {
    const scrollToNext = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <section className="min-h-screen w-full flex flex-col justify-between items-center relative z-1 py-8 md:py-16 px-4">
            <Logo />
            <h2 className="max-w-[1024px] text-center text-2xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight">
            Найди соседа, с которым будет комфортно
            </h2>
            <div className="flex flex-col items-center space-y-8">
                <Button>Найти Соседа</Button>
            </div>
            
            {/* Scroll down arrow */}
            <button 
                onClick={scrollToNext}
                className="flex flex-col items-center text-white hover:text-blue-200 transition-colors duration-300 group mt-8"
                aria-label="Прокрутить вниз"
            >
                <svg 
                    className="w-10 h-10 animate-bounce group-hover:[animation-play-state:paused]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                    />
                </svg>
            </button>
            
            <Image 
                src="/hero.png" 
                alt="Hero" 
                width={1920} 
                height={1080} 
                className="absolute top-0 left-0 w-full h-full object-cover -z-1" 
            />
        </section>
    );
}