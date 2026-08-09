"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'py-4 mt-2' : 'py-8'}`}>
            <div className={`max-w-7xl mx-auto px-4 lg:px-12 transition-all duration-300 ${scrolled ? 'lg:px-8' : ''}`}>
                <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'px-8 py-3 bg-black/60 backdrop-blur-2xl border border-white-[0.03] rounded-full' : 'bg-transparent'}`}>

                    <Link href="#home" className="text-xl font-display font-medium tracking-tight text-white hover:opacity-70 transition-opacity duration-300">
                        Arul S.
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-xs font-medium uppercase tracking-[0.15em] text-white/50 hover:text-white transition-colors duration-200">
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-none border border-white/20 bg-transparent text-white text-[10px] font-medium uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
                            Resume
                        </a>
                        <Link href="#contact" className="px-6 py-3 rounded-none border border-transparent bg-white text-black text-[10px] font-medium uppercase tracking-[0.2em] hover:bg-transparent hover:text-white hover:border-white transition-all duration-300">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-white/70 hover:text-white p-2 transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-0 left-0 w-full h-[100svh] bg-transparent relative z-10 z-40 flex flex-col justify-center items-center"
                    >
                        <button className="absolute top-10 right-8 text-white/50 hover:text-white p-2 transition-colors" onClick={() => setIsOpen(false)}>
                            <X size={28} strokeWidth={1} />
                        </button>

                        <nav className="flex flex-col items-center space-y-8 w-full max-w-sm px-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * i, duration: 0.2 }}
                                    key={link.name}
                                    className="w-full text-center"
                                >
                                    <Link href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-display text-white/60 hover:text-white transition-colors block pb-4 border-b border-white/5 uppercase tracking-[0.1em]">
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.2 }}
                                className="w-full pt-8 flex flex-col space-y-4"
                            >
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-5 rounded-none border border-white/20 bg-transparent text-white text-[10px] font-medium uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                                    Download Resume
                                </a>
                                <Link href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center px-6 py-5 rounded-none border border-white text-[#050505] bg-white text-[10px] font-medium uppercase tracking-[0.2em] hover:bg-white/90 hover:text-black transition-all">
                                    Contact
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
