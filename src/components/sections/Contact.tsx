"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { user } from '@/data/user';
import { Mail, Check, ArrowRight } from 'lucide-react';

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const waNumber = user.phone.replace(/[^0-9]/g, '');
        const textMessage = `Hello Arul,\n\nI am ${formData.name}. ${formData.company ? `I'm from ${formData.company}. ` : ''}\n\n${formData.message}\n\nYou can reach me at: ${formData.email}`;
        const encodedText = encodeURIComponent(textMessage);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;
            window.open(waUrl, '_blank');
            setFormData({ name: '', email: '', company: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 800);
    };

    return (
        <section id="contact" className="py-24 lg:py-48 bg-black relative z-10">
            <div className="max-w-7xl mx-auto px-4 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-20">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: easing }}
                        className="lg:w-5/12"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-white mb-6 tracking-tighter leading-[1.05]">
                            Let’s <br className="hidden lg:block" /> Collaborate.
                        </h2>
                        <p className="text-white/40 text-lg font-light leading-relaxed tracking-wide mb-12 max-w-sm">
                            Available for select functional projects and technical leadership roles.
                        </p>

                        <div className="space-y-6 text-sm">
                            <a href={`mailto:${user.email}`} className="flex items-center group">
                                <Mail className="text-white/20 group-hover:text-white transition-colors duration-500 mr-4" size={20} strokeWidth={1} />
                                <span className="text-white/50 font-medium tracking-widest uppercase group-hover:text-white transition-colors duration-500">{user.email}</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: easing }}
                        className="lg:w-7/12"
                    >
                        <div className="relative overflow-hidden lg:pl-16 lg:border-l lg:border-white/[0.05]">
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex flex-col items-start justify-center py-20 text-left"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-6">
                                            <Check size={28} strokeWidth={2} />
                                        </div>
                                        <h3 className="text-3xl font-display font-medium text-white mb-3 tracking-tighter">Transmission Sent</h3>
                                        <p className="text-white/40 text-sm font-light max-w-sm tracking-wide leading-relaxed">Redirecting to WhatsApp for immediate communication. I will be in touch shortly.</p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-10"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div>
                                                <label htmlFor="name" className="block text-[10px] font-medium uppercase tracking-[0.3em] text-white/30 mb-3">Name</label>
                                                <input type="text" id="name" required
                                                    className="w-full bg-transparent border-0 border-b border-white/10 text-white focus:outline-none focus:border-white transition-colors duration-500 py-3 px-0 text-base font-light placeholder:text-white/10 rounded-none"
                                                    placeholder="John Doe"
                                                    value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-[10px] font-medium uppercase tracking-[0.3em] text-white/30 mb-3">Email</label>
                                                <input type="email" id="email" required
                                                    className="w-full bg-transparent border-0 border-b border-white/10 text-white focus:outline-none focus:border-white transition-colors duration-500 py-3 px-0 text-base font-light placeholder:text-white/10 rounded-none"
                                                    placeholder="john@example.com"
                                                    value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="block text-[10px] font-medium uppercase tracking-[0.3em] text-white/30 mb-3">Company (Optional)</label>
                                            <input type="text" id="company"
                                                className="w-full bg-transparent border-0 border-b border-white/10 text-white focus:outline-none focus:border-white transition-colors duration-500 py-3 px-0 text-base font-light placeholder:text-white/10 rounded-none"
                                                placeholder="Acme Corp"
                                                value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-[10px] font-medium uppercase tracking-[0.3em] text-white/30 mb-3">Message</label>
                                            <textarea id="message" rows={4} required
                                                className="w-full bg-transparent border-0 border-b border-white/10 text-white focus:outline-none focus:border-white transition-colors duration-500 py-3 px-0 text-base font-light placeholder:text-white/10 resize-none rounded-none"
                                                placeholder="Outline your requirements..."
                                                value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}>
                                            </textarea>
                                        </div>

                                        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                            <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] hidden md:block">Replies within 24h</p>

                                            <button type="submit" disabled={isSubmitting}
                                                className="px-10 py-5 rounded-none bg-white text-black font-medium text-[10px] uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center disabled:opacity-50 hover:bg-white/80 w-full md:w-auto overflow-hidden relative group"
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center">
                                                        <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin mr-3"></span> Processing
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center">
                                                        <span className="relative z-10 flex items-center tracking-widest text-[10px] transition-transform duration-500 group-hover:translate-x-[-10px]">
                                                            Send Inquiry <ArrowRight size={14} className="ml-3 opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-[0px] absolute right-[-24px] transition-all duration-500" />
                                                        </span>
                                                    </span>
                                                )}
                                            </button>
                                        </div>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
