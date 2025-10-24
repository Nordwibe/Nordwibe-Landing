import Image from "next/image";

export function HowWeKnowSection() {
    return (
        <section className="py-8 md:py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/app.png"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="max-w-6xl mx-auto relative z-10">
                {/* First Block - How We Know */}
                <div className="mb-8 md:mb-20">
                    <h2 className="text-xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-12 text-center md:text-right leading-tight">
                        ОТКУДА МЫ ЗНАЕМ, КТО ТЕБЕ ПОДХОДИТ
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                        {/* Phone Mockup with Arrow */}
                        <div className="flex justify-center order-1 md:order-1 relative">
                            <div className="relative w-48 h-60 md:w-64 md:h-80">
                                <Image
                                    src="/phone1.png"
                                    alt="Lifestyle Test Phone"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            {/* Arrow to text block */}
                            <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8">
                                <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                                    <path
                                        d="M0,20 L60,20 M60,20 L45,10 M60,20 L45,30"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Description */}
                        <div
                            className="rounded-2xl md:rounded-3xl p-4 md:p-8 order-2 md:order-2 relative"
                            style={{
                                background: 'linear-gradient(4.5deg, rgba(87, 85, 196, 0.2) 3.5%, rgba(87, 85, 196, 0.2) 103.15%), linear-gradient(231.49deg, rgba(201, 201, 199, 0.3) 19.03%, rgba(209, 209, 208, 0.09) 48.69%, rgba(217, 217, 217, 0.3) 83.61%)',
                                backdropFilter: 'blur(7.5px)'
                            }}
                        >
                            <p className="text-white leading-relaxed text-base md:text-xl lg:text-2xl">
                                Мы разработали специальный тест на бытовую совместимость! Он покажет, насколько комфортно жить вместе. Опытные психологи подготовили вопросы и изучили ответы тех, кто уже живет вместе. Кроме него, ты можешь указать свои привычки, интересы и увлечения. Это уточнит прогноз
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Block - How We Protect */}
                <div>
                    <h2 className="text-xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-12 text-center md:text-left leading-tight">
                        КАК МЫ ЗАЩИЩАЕМ ТЕБЯ
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                        {/* Description */}
                        <div
                            className="rounded-2xl md:rounded-3xl p-4 md:p-8 order-2 md:order-1 relative"
                            style={{
                                background: 'linear-gradient(4.5deg, rgba(87, 85, 196, 0.2) 3.5%, rgba(87, 85, 196, 0.2) 103.15%), linear-gradient(231.49deg, rgba(201, 201, 199, 0.3) 19.03%, rgba(209, 209, 208, 0.09) 48.69%, rgba(217, 217, 217, 0.3) 83.61%)',
                                backdropFilter: 'blur(7.5px)'
                            }}
                        >
                            <p className="text-white leading-relaxed text-base md:text-xl lg:text-2xl">
                                Нам не нужно читать переписку — алгоритмы поймут, кого надо заблокировать по поведению. Написать могут те, от кого ты принял приглашение. Установи фильтры и принимай обращения только тех, кто тебе интересен. Если кто-то покажется странным — пожалуйся. Проверим вручную и, если надо, заблокируем.
                            </p>
                        </div>

                        {/* Phone Mockup with Arrow */}
                        <div className="flex justify-center order-1 md:order-2 relative">
                            <div className="relative w-48 h-60 md:w-64 md:h-80">
                                <Image
                                    src="/phone2.png"
                                    alt="Filter Phone"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            {/* Arrow to text block */}
                            <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8">
                                <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                                    <path
                                        d="M80,20 L20,20 M20,20 L35,10 M20,20 L35,30"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
