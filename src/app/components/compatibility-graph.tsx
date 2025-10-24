"use client";

import React, { useState, useEffect, useRef } from "react";

// Массивы изображений для разных устройств
const desktopImages = [
  "/graph/desktop1.svg",
  "/graph/desktop2.svg",
  "/graph/desktop3.svg",
  "/graph/desktop4.svg",
];

const mobileImages = [
  "/graph/mobile1.svg",
  "/graph/mobile2.svg",
  "/graph/mobile3.svg",
  "/graph/mobile4.svg",
];

// Функция для перемешивания массива
const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Компонент графа совместимости
const CompatibilityGraph: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Определяем тип устройства
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Инициализация и перемешивание изображений
  useEffect(() => {
    const images = isMobile ? mobileImages : desktopImages;
    setShuffledImages(shuffleArray(images));
  }, [isMobile]);

  // Основной цикл слайд-шоу
  useEffect(() => {
    if (shuffledImages.length === 0) return;

    const startTransition = () => {
      setIsTransitioning(true);

      // После завершения затухания меняем изображение
      timeoutRef.current = setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % shuffledImages.length);
        setIsTransitioning(false);

        // Случайная задержка перед следующим переходом (от 1400ms до 3000ms)
        const nextDelay = Math.random() * 1600 + 1400; // 1400-3000ms
        timeoutRef.current = setTimeout(startTransition, nextDelay);
      }, 500); // Время затухания остается 500ms
    };

    // Начальная задержка перед первым переходом (тоже 1400-3000ms)
    const initialDelay = Math.random() * 1600 + 1400;
    timeoutRef.current = setTimeout(startTransition, initialDelay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [shuffledImages]);

  if (shuffledImages.length === 0) {
    return (
      <div className="compatibility-graph loading">
        Loading...
        <style jsx>{`
          .compatibility-graph {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
          }
          .compatibility-graph.loading {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f5f5f5;
            color: #666;
            font-family: Arial, sans-serif;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="compatibility-graph">
      <div
        className={`graph-background ${
          isTransitioning ? "fade-out" : "fade-in"
        }`}
        style={{
          backgroundImage: `url(${shuffledImages[currentImageIndex]})`,
        }}
      />

      <style jsx>{`
        .compatibility-graph {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .graph-background {
          width: 90%;
          height: 90%;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          transition: opacity 0.5s ease-in-out;
          /* Минимальные размеры чтобы не было слишком маленьким */
          min-width: 300px;
          min-height: 200px;
          max-width: 95%;
          max-height: 95%;
        }

        .graph-background.fade-in {
          opacity: 1;
        }

        .graph-background.fade-out {
          opacity: 0;
        }

        /* Для очень маленьких экранов */
        @media (max-width: 480px) {
          .graph-background {
            width: 95%;
            height: 95%;
            min-width: 250px;
            min-height: 150px;
          }
        }

        /* Для больших экранов - ограничиваем максимальный размер */
        @media (min-width: 1200px) {
          .graph-background {
            max-width: 1200px;
            max-height: 800px;
          }
        }
      `}</style>
    </div>
  );
};

export default CompatibilityGraph;
