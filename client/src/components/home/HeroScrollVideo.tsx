'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function HeroScrollVideo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoDuration, setVideoDuration] = useState(0);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateDuration = () => {
            if (video.duration && !isNaN(video.duration)) {
                setVideoDuration(video.duration);
                // video.currentTime = 0.01;
            }
        };

        if (video.readyState >= 1) {
            updateDuration();
        }

        video.addEventListener('loadedmetadata', updateDuration);

        return () =>
            video.removeEventListener('loadedmetadata', updateDuration);
    }, []);

    useGSAP(
        () => {
            const video = videoRef.current;
            if (!video || !containerRef.current || videoDuration === 0) {
                console.log('Aguardando vídeo carregar para iniciar GSAP...');
                return;
            }

            console.log('Iniciando animação GSAP!');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=200%',
                    pin: true,
                    scrub: 1,
                },
            });

            tl.fromTo(
                video,
                { currentTime: 0 },
                { currentTime: 20, ease: 'none' },
            );
        },
        { scope: containerRef, dependencies: [videoDuration] },
    );

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen bg-[#191919] overflow-hidden"
        >
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/assets/home/desktop/hero-video-final.mp4"
                muted
                playsInline
                preload="auto"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Content */}
            <div className="relative z-20 container-custom flex flex-col justify-center h-full pointer-events-none">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white max-w-125 pointer-events-auto">
                    <span className="text-white/50 text-sm tracking-[10px] uppercase mb-6 animate-fade-in-up">
                        New Innovation
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-[56px] font-bold uppercase leading-tight tracking-[2px] mb-6">
                        XX99 Mark II
                        <br />
                        Experience
                    </h1>

                    <p className="text-white/75 text-[15px] leading-relaxed mb-10 max-w-87.5">
                        Control time with your scroll. Experience natural,
                        lifelike audio made for the passionate music enthusiast.
                    </p>

                    <Link
                        href="/product/xx99-mark-two-headphones"
                        className="bg-primary hover:bg-primary-light text-white font-bold text-sm uppercase px-8 py-4 tracking-[1px] transition-colors duration-300 pointer-events-auto"
                    >
                        See Product
                    </Link>
                </div>
            </div>
        </section>
    );
}
