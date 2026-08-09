export default function TrustStrip() {
    const tech = [
        "CREATIVE DEVELOPMENT",
        "SYSTEMS ENGINEERING",
        "PREMIUM UI/UX",
        "PERFORMANCE",
        "AI INTEGRATION",
    ];

    const duplicatedTech = [...tech, ...tech, ...tech, ...tech];

    return (
        <section className="py-20 lg:py-32 bg-black overflow-hidden relative border-t border-white/[0.02]">
            {/* Massive scrolling text */}
            <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap w-max cursor-default overflow-hidden opacity-30 select-none">
                {duplicatedTech.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <span className="mx-8 lg:mx-16 text-5xl md:text-8xl lg:text-[8rem] font-display font-medium text-outline uppercase tracking-tight">
                            {item}
                        </span>
                        <span className="w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-white/20 inline-block mx-4"></span>
                    </div>
                ))}
            </div>

            {/* Fades on the edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </section>
    );
}
