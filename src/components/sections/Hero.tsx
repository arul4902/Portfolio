"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const blur = useTransform(scrollYProgress, [0, 1], [0, 20]);
    const filter = useMotionTemplate`blur(${blur}px)`;

    return (
        <section ref={containerRef} id="home" className="relative min-h-[100svh] flex flex-col justify-center bg-black z-10 w-full overflow-hidden pt-20">
            <motion.div style={{ y, opacity, scale, filter }} className="w-full relative z-20 flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4 mb-8 md:mb-12"
                >
                    <span className="w-8 md:w-16 h-[1px] bg-white/20 block"></span>
                    <span className="text-[9px] md:text-xs uppercase font-medium tracking-[0.3em] text-white/50">Arul S • Portfolio</span>
                    <span className="w-8 md:w-16 h-[1px] bg-white/20 block"></span>
                </motion.div>

                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[13.5vw] md:text-[15vw] leading-[0.8] font-display font-medium tracking-tighter text-white uppercase m-0"
                    >
                        Full<span className="text-white/20">-</span>Stack
                    </motion.h1>
                </div>

                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[13.5vw] md:text-[15vw] leading-[0.8] font-display font-medium tracking-tighter text-outline uppercase m-0 hover:text-white/10 transition-colors duration-500"
                    >
                        Engineering
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-16 md:mt-24 flex flex-col md:flex-row items-center gap-8 md:gap-16"
                >
                    <p className="text-sm md:text-lg text-white/40 max-w-sm font-light leading-relaxed tracking-wider text-center md:text-left">
                        Building sophisticated architectures and premium digital experiences for forward-thinking brands.
                    </p>
                    <Link
                        href="#work"
                        className="group relative inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/20 overflow-hidden bg-transparent text-white hover:border-white/50 transition-colors duration-500 shrink-0"
                    >
                        <span className="absolute inset-0 bg-white translate-y-[100%] rounded-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]"></span>
                        <span className="relative z-10 text-[10px] md:text-xs uppercase font-medium tracking-[0.2em] group-hover:text-black transition-colors duration-500 delay-100">Explore</span>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
