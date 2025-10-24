'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

interface GalleryItemProps {
    src: string;
    alt: string;
    text: string;
    isQR?: boolean;
}

export function GalleryItem({ src, alt, text, isQR = false }: GalleryItemProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleClick = () => {
        if (!isQR) {
            setIsFlipped(!isFlipped);
        }
    };

    const handleImageError = () => {
        console.error(`Failed to load image: ${src}`);
        setImageError(true);
    };

    useEffect(() => {
        if (isQR) return;

        const initialDelay = Math.random() * 10000;

        const flipCard = () => {
            setIsFlipped(true);

            const showDuration = Math.random() * 4000 + 4000;

            setTimeout(() => {
                setIsFlipped(false);

                const nextFlipDelay = Math.random() * 20000 + 20000;
                setTimeout(flipCard, nextFlipDelay);
            }, showDuration);
        };

        const timeoutId = setTimeout(flipCard, initialDelay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isQR]);

    const getShortenedText = (fullText: string) => {
        const parts = fullText.split(' - это ');
        if (parts.length < 2) return fullText;

        const mainText = parts[1];

        if (mainText.length > 15) {
            const shortenedTexts: {[key: string]: string} = {
                'доступен в RuStore': 'в RuStore',
                'как хочешь ты': 'твой выбор',
                'твой ритм жизни': 'твой ритм',
                'новые знакомства': 'знакомства'
            };

            return shortenedTexts[mainText] || mainText.substring(0, 12) + '...';
        }

        return mainText;
    };

    return (
        <div
            className="aspect-square relative rounded-lg md:rounded-2xl overflow-hidden cursor-pointer"
            style={{
                boxShadow: '4px 6px 12px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transformStyle: 'preserve-3d',
            }}
            onClick={handleClick}
        >
            {/* Front side - Image */}
            <div
                className={`absolute inset-0 transition-transform duration-700 transform-gpu ${
                    isFlipped ? 'rotate-y-180' : 'rotate-y-0'
                }`}
                style={{ backfaceVisibility: 'hidden' }}
            >
                {!imageError ? (
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover rounded-lg md:rounded-2xl"
                        sizes="(max-width: 768px) 33vw, 25vw"
                        onError={handleImageError}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300 rounded-lg md:rounded-2xl">
                        <span className="text-gray-500 text-sm">Ошибка загрузки</span>
                    </div>
                )}
            </div>

            {/* Back side - Text */}
            <div
                className={`absolute inset-0 transition-transform duration-700 transform-gpu ${
                    isFlipped ? 'rotate-y-0' : '-rotate-y-180'
                }`}
                style={{ backfaceVisibility: 'hidden' }}
            >
                <div className="w-full h-full flex items-center justify-center p-2 md:p-4 rounded-lg md:rounded-2xl"
                     style={{ backgroundColor: 'rgba(255, 255, 255, 0.13)' }}>
                    <div className="text-white text-center">
                        <div className="text-sm md:text-3xl font-bold mb-1 md:mb-2">
                            NORDWIBE
                        </div>
                        <div className="text-xs md:text-xl italic leading-tight">
                            - это {getShortenedText(text)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
