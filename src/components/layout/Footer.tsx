import Link from 'next/link';
import { user } from '@/data/user';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-transparent relative z-10 pt-40 lg:pt-48 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
                    <div>
                        <Link href="#home" className="inline-block text-3xl font-display font-medium tracking-tighter text-white mb-4 hover:opacity-70 transition-opacity">
                            Arul S.
                        </Link>
                        <p className="text-white/40 text-[13px] font-light max-w-xs leading-relaxed tracking-wide">
                            Full Stack Developer building scalable web applications and premium digital experiences.
                        </p>
                    </div>

                    <nav className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
                        <div className="flex flex-col space-y-3">
                            <h4 className="text-[10px] font-medium text-white/30 uppercase tracking-[0.2em] mb-2">Portfolio</h4>
                            <Link href="#work" className="text-[13px] font-light text-white/60 hover:text-white transition-colors">Selected Work</Link>
                            <Link href="#about" className="text-[13px] font-light text-white/60 hover:text-white transition-colors">About</Link>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <h4 className="text-[10px] font-medium text-white/30 uppercase tracking-[0.2em] mb-2">Details</h4>
                            <Link href="#experience" className="text-[13px] font-light text-white/60 hover:text-white transition-colors">Experience</Link>
                            <Link href="#skills" className="text-[13px] font-light text-white/60 hover:text-white transition-colors">Skills</Link>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <h4 className="text-[10px] font-medium text-white/30 uppercase tracking-[0.2em] mb-2">Connect</h4>
                            <Link href="/resume.pdf" target="_blank" className="text-[13px] font-light text-white/60 hover:text-white transition-colors">Resume</Link>
                            <Link href="#contact" className="text-[13px] font-light text-white/60 hover:text-white transition-colors">Contact</Link>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <h4 className="text-[10px] font-medium text-white/30 uppercase tracking-[0.2em] mb-2">Social</h4>
                            <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-[13px] font-light text-white/60 hover:text-white transition-colors">LinkedIn</a>
                            <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-[13px] font-light text-white/60 hover:text-white transition-colors">GitHub</a>
                        </div>
                    </nav>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/5 text-[11px] text-white/30 font-light tracking-wide uppercase">
                    <p>© {currentYear} {user.name}. All rights reserved.</p>
                    <p className="mt-3 sm:mt-0 text-center sm:text-right">Engineered & Designed with precision.</p>
                </div>
            </div>
        </footer>
    );
}
