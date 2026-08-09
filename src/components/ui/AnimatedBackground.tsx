"use client";

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[#050505]">
            {/* Subtle Top Left Bloom */}
            <motion.div
                animate={{
                    x: [0, 50, -20, 0],
                    y: [0, -50, 20, 0],
                    scale: [1, 1.1, 0.95, 1],
                    opacity: [0.03, 0.05, 0.03]
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                }}
                className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[120px] bg-white"
            />
            {/* Subtle Bottom Right Bloom */}
            <motion.div
                animate={{
                    x: [0, -60, 30, 0],
                    y: [0, 60, -20, 0],
                    scale: [1, 1.15, 0.9, 1],
                    opacity: [0.02, 0.04, 0.02]
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                }}
                className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen filter blur-[150px] bg-zinc-400"
            />
        </div>
    );
}
