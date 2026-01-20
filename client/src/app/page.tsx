export default function Home() {
    return (
        <main className="min-h-screen bg-dark text-white flex flex-col items-center justify-center gap-4">
            <h1 className="text-5xl font-bold uppercase tracking-widest">
                Audiophile
            </h1>
            <p className="text-primary text-xl tracking-[10px] uppercase">
                Experience
            </p>

            <div className="flex gap-4 mt-8">
                <button className="bg-primary hover:bg-primary-light px-8 py-4 uppercase font-bold text-white transition-colors">
                    See Product
                </button>
                <button className="bg-transparent border border-white hover:bg-white hover:text-black px-8 py-4 uppercase font-bold text-white transition-colors">
                    Go Back
                </button>
            </div>
        </main>
    );
}
