import Link from 'next/link';
import Image from 'next/image';

const categories = [
    {
        id: 1,
        title: 'Headphones',
        href: '/category/headphones',
        image: '/assets/home/desktop/category-shop-01.png',
    },
    {
        id: 2,
        title: 'Speakers',
        href: '/category/speakers',
        image: '/assets/home/desktop/category-shop-02.png',
    },
    {
        id: 3,
        title: 'Earphones',
        href: '/category/earphones',
        image: '/assets/home/desktop/category-shop-03.png',
    },
];

export default function CategoryShop() {
    return (
        <section className="container-custom py-20 lg:py-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md-gap-4 lg:gap-8">
                {categories.map((cat) => (
                    <div key={cat.id} className="relative group">
                        <div className="bg-light-gray rounded-lg pt-20 pb-8 flex flex-col items-center justify-center relative mt-12 h-41.25 lg:h-51 hover:bg-primary/10 transition-colors duration-300">
                            <div className="absolute -top-12 lg:-top-16 w-32 h-32 lg:w-40 lg:h-30 group-hover:-translate-y-2 transition-transform duration-300">
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    width={160}
                                    height={160}
                                    className="object-contain drop-shadow-xl"
                                />
                            </div>

                            <h2 className="uppercase font-bold text-[15px] tracking-[1px] mb-4 text-black">
                                {cat.title}
                            </h2>

                            <Link
                                href={cat.href}
                                className="flex items-center gap-2 text-[13px] font-bold text-black/50 group-hover:text-primary uppercase tracking-[1px] transition-colors"
                            >
                                Shop
                                <span className="text-primary text-lg font-bold">
                                    ›
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
