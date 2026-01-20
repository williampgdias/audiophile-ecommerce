// import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import HeroScrollVideo from '@/components/home/HeroScrollVideo';
import CategoryShop from '@/components/shared/CategoryShop';

export default function Home() {
    return (
        <main>
            <HeroScrollVideo />
            <CategoryShop />
            <FeaturedProducts />
        </main>
    );
}
