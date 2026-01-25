import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedProducts() {
    return (
        <section className="container-custom pb-24 lg:pb-32 flex flex-col gap-8 lg:gap-12">
            <div className="bg-primary rounded-lg overflow-hidden relative flex flex-col lg:flex-row lg:h-140">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
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

                <div className="relative z-10 w-full h-75 lg:w-1/2 lg:h-full">
                    <Image
                        src="/assets/home/desktop/zx9-speaker-02.png"
                        alt="ZX9 Speaker"
                        fill
                        quality={100}
                        className="object-cover"
                    />
                </div>

                <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left text-white py-12 px-6 lg:p-16">
                    <h2 className="text-4xl md:text-[56px] font-bold uppercase leading-none tracking-[2px] mb-6">
                        ZX9 <br /> Speaker
                    </h2>
                    <p className="text-white/75 text-[15px] leading-relaxed mb-10 max-w-87.5">
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

            <div className="relative rounded-lg overflow-hidden h-80 md:h-100 lg:h-120 flex items-center px-6 md:px-16 lg:px-24">
                <div className="absolute inset-0 w-full h-full z-0">
                    <Image
                        src="/assets/home/desktop/yx1-earphones-final-03.png"
                        alt="ZX7 Speaker Background"
                        fill
                        quality={100}
                        className="object-cover"
                    />
                </div>

                <div className="relative z-10">
                    <h2 className="text-[32px] font-bold uppercase tracking-[2px] mb-8">
                        ZX7 Speaker
                    </h2>
                    <Link
                        href="/product/zx7-speaker"
                        className="inline-block bg-transparent border border-white hover:bg-black hover:text-white font-bold text-[14px] uppercase px-8 py-4 tracking-[1px] transition-colors"
                    >
                        See Product
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7.5 lg:gap-7.5">
                <div className="relative h-62.5 md:h-100 lg:h-120 rounded-lg overflow-hidden">
                    <Image
                        src="/assets/home/desktop/yx1-earphones-final-02.png"
                        alt="YX1 Earphones"
                        fill
                        quality={100}
                        className="object-cover"
                    />
                </div>

                <div className="bg-[#F1F1F1] rounded-lg flex flex-col justify-center px-6 md:px-10 lg:px-24 h-62.5 md:h-100 lg:h-120">
                    <h2 className="text-[28px] font-bold uppercase tracking-[2px] mb-8 text-black">
                        YX1 Earphones
                    </h2>
                    <Link
                        href="/product/yx1-earphones"
                        className="self-start inline-block bg-transparent border border-black hover:bg-black hover:text-white text-black font-bold text-[13px] uppercase px-8 py-4 tracking-[1px] transition-colors"
                    >
                        See Product
                    </Link>
                </div>
            </div>
        </section>
    );
}
