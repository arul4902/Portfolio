"use client";

import { motion } from 'framer-motion';
import { experience } from '@/data/experience';

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Experience() {
    return (
        <section id="experience" className="py-24 lg:py-48 bg-black relative z-10 border-b border-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 lg:px-12">
                <div className="flex flex-col md:flex-row gap-16 lg:gap-32">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: easing }}
                        className="md:w-1/3"
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
                                    Experience
                                </motion.h2>
                            </div>
                            <p className="text-white/40 text-base md:text-lg font-light leading-relaxed tracking-wide">Professional engineering roles and career timeline.</p>
                        </div>
                    </motion.div>

                    <div className="md:w-2/3">
                        <div className="w-full h-[1px] bg-white/10 mb-8 mt-2 md:mt-0"></div>
                        <div className="flex flex-col w-full">
                            {experience.map((exp, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: idx * 0.1, ease: easing }}
                                    key={idx}
                                    className="group relative flex flex-col sm:flex-row gap-8 sm:gap-16 py-12 border-b border-white/[0.05] hover:border-white/20 transition-colors duration-500"
                                >
                                    <div className="sm:w-1/4 pt-1">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
                                            {exp.start} — {exp.end}
                                        </span>
                                    </div>

                                    <div className="sm:w-3/4">
                                        <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-2 tracking-tight group-hover:text-white/80 transition-colors duration-300">
                                            {exp.title}
                                        </h3>
                                        <h4 className="text-sm uppercase tracking-widest text-white/30 mb-8 font-medium">
                                            {exp.company} {exp.location && `• ${exp.location}`}
                                        </h4>

                                        <ul className="space-y-4">
                                            {exp.responsibilities.map((resp, rIdx) => (
                                                <li key={rIdx} className="text-white/50 leading-relaxed font-light relative pl-6 text-sm">
                                                    <span className="absolute left-0 top-[10px] w-3 h-[1px] bg-white/20"></span>
                                                    {resp}
                                                </li>
                                            ))}
                                        </ul>
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
