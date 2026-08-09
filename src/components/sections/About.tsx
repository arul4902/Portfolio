"use client";

import { motion } from 'framer-motion';
import { user } from '@/data/user';

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function About() {
    return (
        <section id="about" className="py-24 lg:py-48 bg-black relative z-10 border-b border-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

                    {/* Left Typography */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: easing }}
                        >
                            <div className="overflow-hidden mb-8">
                                <motion.h2
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: "0%" }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                    className="text-4xl md:text-6xl font-display font-medium text-white tracking-tighter"
                                >
                                    Engineer.<br />Architect.<br /><span className="text-white/30 italic font-light">Creator.</span>
                                </motion.h2>
                            </div>
                            <div className="space-y-6">
                                <p className="text-white/50 text-xl font-light leading-relaxed tracking-wide">
                                    {user.positioning}
                                </p>
                                <div className="pt-4">
                                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 px-8 py-5 rounded-none border border-white/20 bg-transparent text-white text-[10px] font-medium uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 group">
                                        <span>Download Resume</span>
                                        <svg className="w-3 h-3 group-hover:rotate-45 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Data */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: easing, delay: 0.1 }}
                        >
                            <div className="pt-2 lg:pt-4">
                                <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-white/50 mb-12 border-b border-white/10 pb-4">Education</h3>

                                <div className="space-y-12">
                                    {user.education.map((edu, idx) => (
                                        <div key={idx} className="relative group flex flex-col sm:flex-row sm:justify-between sm:items-start border-white/[0.05] pb-8 border-b last:border-0 last:pb-0">
                                            <div className="mb-4 sm:mb-0 max-w-sm">
                                                <h4 className="text-2xl font-display font-medium text-white tracking-tight group-hover:text-white/60 transition-colors duration-200 mb-2">{edu.degree}</h4>
                                                <h5 className="text-sm uppercase tracking-widest text-white/40 mb-3">{edu.institution}</h5>
                                                <p className="text-white/30 font-light text-sm leading-relaxed">{edu.score}</p>
                                            </div>
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium shrink-0">{edu.duration}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
