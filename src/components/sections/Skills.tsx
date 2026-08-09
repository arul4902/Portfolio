"use client";

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Skills() {
    return (
        <section id="skills" className="py-24 lg:py-48 bg-black relative z-10 border-b border-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: easing }}
                        className="lg:w-1/3"
                    >
                        <div className="sticky top-40 text-left">
                            <div className="overflow-hidden mb-6">
                                <motion.h2
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: "0%" }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-3xl md:text-5xl font-display font-medium text-white tracking-tighter"
                                >
                                    Technical Arsenal
                                </motion.h2>
                            </div>
                            <p className="text-white/40 text-base md:text-lg font-light leading-relaxed tracking-wide">The modern technologies I use to architect scalable products.</p>
                        </div>
                    </motion.div>

                    <div className="lg:w-2/3">
                        <div className="w-full h-[1px] bg-white/10 mb-12 mt-2 lg:mt-0"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                            {Object.entries(skills).map(([category, items], idx) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.05, ease: easing }}
                                    key={category}
                                    className="flex flex-col"
                                >
                                    <h3 className="text-[10px] font-medium text-white/50 tracking-[0.2em] border-b border-white/[0.05] pb-4 mb-6 uppercase flex justify-between items-center">
                                        {category}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-white/60 text-sm md:text-base font-light tracking-wide rounded hover:text-white transition-colors duration-200 cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
