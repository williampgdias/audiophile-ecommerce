// client/src/components/home/BestAudioGear.tsx
'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function BestAudioGear() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useLayoutEffect(() => {
        if (!isImageLoaded || !sectionRef.current) return;

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();

            const ctx = gsap.context(() => {
                // CREATE TIMELINE
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        end: 'bottom top',
                        toggleActions: 'play none none reverse',
                    },
                });

                // IMAGE ANIMATION
                tl.fromTo(
                    imageRef.current,
                    {
                        opacity: 0,
                        scale: 0.95,
                        y: 40,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 1.2,
                        ease: 'power3.out',
                        immediateRender: false,
                    },
                )
                    // TEXT ANIMATION
                    .fromTo(
                        textContainerRef.current,
                        {
                            opacity: 0,
                            y: 40,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            ease: 'power3.out',
                            immediateRender: false,
                        },
                        '-=0.8',
                    );
            }, sectionRef);

            return () => ctx.revert();
        }, 200);

        return () => clearTimeout(timer);
    }, [isImageLoaded]);

    return (
        <section
            ref={sectionRef}
            className="container-custom py-10 lg:py-16 mb-24 overflow-hidden"
        >
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 h-full">
                {/* TEXT */}
                <div
                    ref={textContainerRef}
                    className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center opacity-0"
                >
                    <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold uppercase leading-none tracking-[1px] mb-8 text-black">
                        Bringing you the <br className="hidden lg:block" />
                        <span className="text-primary">best</span> audio gear
                    </h2>
                    <p className="text-black/50 text-[15px] lg:text-[17px] leading-relaxed max-w-137.5 mx-auto lg:mx-0">
                        Located at the heart of New York City, Audiophile is the
                        premier store for high end headphones, earphones,
                        speakers, and audio accessories. We have a large
                        showroom and luxury demonstration rooms available for
                        you to browse and experience a wide range of our
                        products. Stop by our store to meet some of the
                        fantastic people who make Audiophile the best place to
                        buy your portable audio equipment.
                    </p>
                </div>

                {/* IMAGE */}
                <div
                    ref={imageRef}
                    className="w-full lg:w-1/2 h-75 md:h-125 lg:h-150 relative rounded-lg overflow-hidden order-1 lg:order-2 opacity-0"
                >
                    <Image
                        src="/assets/shared/desktop/image-best-gear.jpg"
                        alt="Best Audio Gear"
                        fill
                        className="object-cover"
                        onLoadingComplete={() => setIsImageLoaded(true)}
                    />
                </div>
            </div>
        </section>
    );
}
