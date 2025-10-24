"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Envelope } from "./icons/envelope";
import { People } from "./icons/people";
import { House } from "./icons/house";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CardData {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cardsData: CardData[] = [
  {
    id: 1,
    icon: <Envelope />,
    title: "ВЫГОДА",
    description: "Снимайте квартиру вдвоём — делите расходы пополам",
  },
  {
    id: 2,
    icon: <People />,
    title: "СВОБОДА",
    description: "Жить по своим правилам комфортнее всего",
  },
  {
    id: 3,
    icon: <House />,
    title: "ВАЙБ",
    description: "Твой сосед — человек, с которым станет уютно",
  },
  {
    id: 4,
    icon: <Envelope />,
    title: "ПОДДЕРЖКА",
    description: "В любой непонятной ситуации ты не останешься один",
  },
  {
    id: 5,
    icon: <People />,
    title: "НАДЕЖНОСТЬ",
    description: "Вы во многом похожи, не будет непредсказуемости",
  },
  {
    id: 6,
    icon: <House />,
    title: "ЛЕГКОСТЬ",
    description: "Несколько кликов, и лучший сосед нашелся",
  },
];

export function Slider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  return (
    <div className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={3}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
            className="relative"
            style={{ height: "500px" }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            {cardsData.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="px-2 h-full">
                  <div className="bg-purple-100 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 text-center flex flex-col h-full min-h-[450px] justify-around">
                    {/* Icon and Title container */}
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg flex-shrink-0">
                        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 flex items-center justify-center">
                          {card.icon}
                        </div>
                      </div>

                      <h3
                        className={`font-bold text-purple-600 flex-shrink-0 ${
                          card.title === "НЕЗАВИСИМОСТЬ"
                            ? "text-lg md:text-xl lg:text-3xl"
                            : "text-xl md:text-2xl lg:text-4xl"
                        }`}
                      >
                        {card.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-800 text-sm md:text-base lg:text-lg leading-relaxed flex items-center justify-center">
                      {card.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            className={`swiper-button-prev-custom ${
              isBeginning ? "swiper-button-disabled" : ""
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className={`swiper-button-next-custom ${
              isEnd ? "swiper-button-disabled" : ""
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>
      </div>
    </div>
  );
}
