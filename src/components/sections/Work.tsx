"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, ProjectCategory, Project } from '@/data/projects';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const categories: ProjectCategory[] = ['All', 'Full Stack', 'Web Applications', 'AI', 'Client Work', 'Business Websites'];

export default function Work() {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse position for floating image
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const filteredProjects = projects.filter((p: Project) =>
        activeFilter === 'All' ? true : p.category.includes(activeFilter)
    );

    return (
        <section id="work" className="py-32 lg:py-48 bg-black relative z-10 border-b border-white/[0.02] overflow-hidden" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-4 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-xl"
                    >
                        <div className="overflow-hidden mb-6">
                            <motion.h2
                                initial={{ y: "100%" }}
                                whileInView={{ y: "0%" }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-4xl md:text-6xl font-display font-medium text-white tracking-tighter"
                            >
                                Selected Works
                            </motion.h2>
                        </div>
                        <p className="text-white/40 text-base md:text-lg font-light leading-relaxed tracking-wide">
                            Case studies demonstrating technical problem solving and product execution at the highest level.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap gap-2 justify-start md:justify-end"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${activeFilter === cat
                                    ? 'bg-white text-black'
                                    : 'bg-transparent text-white/40 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <div className="w-full relative">
                    <div className="w-full h-[1px] bg-white/10 mb-4"></div>
                    {/* Project Rows */}
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project: Project, index: number) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                key={project.id}
                                className="group block relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <a
                                    href={project.liveUrl || project.githubUrl || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-16 border-b border-white-5 md:border-white/10 hover:border-white/30 transition-colors duration-500 cursor-pointer"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-3xl md:text-5xl font-display font-medium text-white mb-4 tracking-tighter group-hover:pl-4 transition-all duration-500">
                                            {project.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-3 group-hover:pl-4 transition-all duration-500 delay-75">
                                            {project.technology.slice(0, 3).map((tech: string) => (
                                                <span key={tech} className="text-[9px] uppercase font-medium tracking-widest text-white/40">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technology.length > 3 && (
                                                <span className="text-[9px] uppercase font-medium tracking-widest text-white/20">+{project.technology.length - 3}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 mt-6 md:mt-0 text-white/20 group-hover:text-white transition-colors duration-500">
                                        <span className="text-sm font-light hidden md:block">View Project</span>
                                        <ArrowUpRight strokeWidth={1} size={28} className="group-hover:rotate-45 group-hover:scale-110 transition-all duration-500" />
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Floating Image Follower - visible only on desktop */}
                    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-lighten" style={{ opacity: hoveredIndex !== null ? 1 : 0, transition: 'opacity 0.4s ease' }}>
                        {filteredProjects.map((project: Project, idx: number) => {
                            if (!project.image) return null;
                            const isActive = hoveredIndex === idx;
                            return (
                                <motion.div
                                    key={`img-${project.id}`}
                                    animate={{
                                        x: mousePosition.x - 200, // offset to center image on cursor roughly
                                        y: mousePosition.y - 120, // assuming image is 400x240
                                        scale: isActive ? 1 : 0.8,
                                        opacity: isActive ? 1 : 0,
                                        rotate: isActive ? (mousePosition.x > 800 ? 2 : -2) : 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 70,
                                        damping: 20,
                                        mass: 0.5
                                    }}
                                    className="absolute top-0 left-0 w-[400px] aspect-[16/10] overflow-hidden rounded-sm"
                                    style={{ zIndex: isActive ? 10 : 0 }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-center"
                                        sizes="400px"
                                    />
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
