"use client";

import { motion } from 'framer-motion';
import { Lightbulb, Code2, Cpu, Zap, Search, LayoutTemplate } from 'lucide-react';

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const mindsetPoints = [
    {
        title: "Engineering Mindset",
        description: "I think beyond the interface and consider APIs, databases, performance and maintainability.",
        icon: <Cpu className="text-white/20 mb-8 group-hover:text-white transition-colors duration-500" size={28} strokeWidth={1} />
    },
    {
        title: "Product Thinking",
        description: "I focus on why a feature exists, not just how to build it. Every line of code serves the user.",
        icon: <Lightbulb className="text-white/20 mb-8 group-hover:text-white transition-colors duration-500" size={28} strokeWidth={1} />
    },
    {
        title: "Design Awareness",
        description: "I care deeply about how the final product looks, feels, and communicates to the user.",
        icon: <LayoutTemplate className="text-white/20 mb-8 group-hover:text-white transition-colors duration-500" size={28} strokeWidth={1} />
    },
    {
        title: "Performance",
        description: "Optimizing backend requests, latency, and ensuring the frontend remains highly responsive.",
        icon: <Zap className="text-white/20 mb-8 group-hover:text-white transition-colors duration-500" size={28} strokeWidth={1} />
    },
    {
        title: "API Design & Data",
        description: "Structuring clear scalable REST APIs with optimized queries and robust error handling.",
        icon: <Code2 className="text-white/20 mb-8 group-hover:text-white transition-colors duration-500" size={28} strokeWidth={1} />
    },
    {
        title: "Problem Solving",
        description: "Logical approach backed by solving 150+ Data Structures and Algorithms problems.",
        icon: <Search className="text-white/20 mb-8 group-hover:text-white transition-colors duration-500" size={28} strokeWidth={1} />
    }
];

export default function Engineering() {
    return (
        <section className="py-24 lg:py-48 bg-black relative z-10 border-b border-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: easing }}
                    className="mb-24"
                >
                    <div className="overflow-hidden mb-6">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: "0%" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl md:text-5xl font-display font-medium text-white tracking-tighter"
                        >
                            Core Philosophy
                        </motion.h2>
                    </div>
                    <p className="text-white/40 text-base md:text-lg font-light tracking-wide max-w-xl">Bridging the gap between robust software engineering and premium digital design.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/[0.05]">
                    {mindsetPoints.map((point, idx) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: easing }}
                            key={idx}
                            className="p-10 lg:p-14 border-r border-b border-white/[0.05] group hover:bg-white/[0.02] transition-colors duration-500 flex flex-col justify-start"
                        >
                            {point.icon}
                            <h3 className="text-xl font-display font-medium text-white mb-4 tracking-tight group-hover:text-white/80 transition-colors duration-500">{point.title}</h3>
                            <p className="text-white/30 font-light leading-relaxed text-sm tracking-wide">
                                {point.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
