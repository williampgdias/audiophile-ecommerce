import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative w-full bg-[#191919]">
            {/* Background Image setup */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div
                    className="w-full h-full bg-no-repeat bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('/assets/home/desktop/hero-image.jpg')",
                        backgroundColor: '#191919',
                    }}
                />
                <div className="absolute inset-0 bg-black/40 lg:bg-transparent"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 container-custom flex flex-col justify-center h-[calc(100vh-6rem)]">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white max-w-100 lg:max-w-125 mx-auto lg:mx-0">
                    <span className="text-white/50 text-sm tracking-[10px] uppercase mb-6 animate-fade-in-up">
                        New Product
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-[56px] font-bold uppercase leading-[1.1] tracking=[2px] mb-6">
                        XX99 Mark II
                        <br />
                        Headphones
                    </h1>

                    <p className="text-white/75 text-[15px] leading-relaxed mb-10 max-w-87.5">
                        Experience natural, lifelike audio and exceptional build
                        quality made for the passionate music enthusiast.
                    </p>

                    <Link
                        href="/product/xx99-mark-two-headphones"
                        className="bg-primary hover:bg-primary-light text-white font-bold text-sm uppercase px-8 py-4 tracking-[1px] transition-colors duration-300"
                    >
                        See Product
                    </Link>
                </div>
            </div>
        </section>
    );
}
