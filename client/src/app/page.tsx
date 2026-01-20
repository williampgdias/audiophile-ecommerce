import Hero from '@/components/home/Hero';

export default function Home() {
    return (
        <main>
            <Hero />

            <div className="h-screen flex items-center justify-center bg-white text-black">
                <p>Rest of the content goes here...</p>
            </div>
        </main>
    );
}
