import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1759579478942-a6992a87fb8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Underground Service Locating"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Precision Underground <span className="text-orange-500">Service Locating</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto">
                    Protect your project and reduce risk <br />
                    Locate underground utilities before you dig.
                </p>
                <p className="text-lg text-slate-300 mb-8 font-medium">
                    South Coast, NSW
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a
                        href="#quote"
                        className="inline-flex h-12 items-center justify-center rounded-md bg-orange-500 px-8 text-lg font-medium text-white shadow hover:bg-orange-600 transition-colors"
                    >
                        Get a Free Quote
                    </a>
                    <a
                        href="#services"
                        className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 bg-white/10 px-8 text-lg font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                        Our Services
                    </a>
                </div>
            </div>
        </section>
    );
}
