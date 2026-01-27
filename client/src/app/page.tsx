// import Hero from '@/components/home/Hero';
import BestAudioGear from '@/components/home/BestAudioGear';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import HeroScrollVideo from '@/components/home/HeroScrollVideo';
import CategoryShop from '@/components/shared/CategoryShop';

export default function Home() {
    return (
        <main>
            <HeroScrollVideo />
            <CategoryShop />
            <FeaturedProducts />
            <BestAudioGear />
        </main>
    );
}
