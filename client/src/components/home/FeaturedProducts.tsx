import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedProducts() {
    return (
        <section className="container-custom pb-24 lg:pb-32">
            <div className="bg-primary rounded-lg overflow-hidden relative flex flex-col lg:flex-row items-center lg:justify-between px-6 py-14 lg:px-14 lg:py-0 lg:h-140">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <svg
                        width="944"
                        height="944"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:-translate-y-[20%] opacity-20 lg:opacity-100 scale-[0.8] lg:scale-100"
                    >
                        <g
                            stroke="#FFF"
                            fill="none"
                            fillRule="evenodd"
                            opacity=".202"
                        >
                            <circle cx="472" cy="472" r="235" />
                            <circle cx="472" cy="472" r="270" />
                            <circle cx="472" cy="472" r="471" />
                        </g>
                    </svg>
                </div>

                <div className="relative z-10 w-43 h-51.75 lg:w-112.5 lg:h-143.25 mb-8 lg:mb-2.5 lg:self-end lg:translate-y-4">
                    <Image
                        src="/assets/home/desktop/speaker-final.png"
                        alt="ZX9 Speaker"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="relative z-10 text-center lg:text-left text-white max-w-87.5">
                    <h2 className="text-4xl md:text-[56px] font-bold uppercase leading-none tracking-[2px] mb-6">
                        ZX9 <br /> Speaker
                    </h2>

                    <p className="text-white/75 text-[15px] leading-relaxed mb-10">
                        Upgrade to premium speakers that are phenomenally built
                        to deliver truly remarkable sound.
                    </p>
                    <Link
                        href="/product/zx9-speaker"
                        className="inline-block bg-black hover:bg-[#4c4c4c] text-white font-bold text-[13px] uppercase px-8 py-4 tracking-[1px] transition-colors"
                    >
                        See Product
                    </Link>
                </div>
            </div>
        </section>
    );
}
