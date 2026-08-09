"use client";

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);

    // Exact position for the inner dot
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Spring physics for the outer ring using framer-motion hooks
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a') || target.closest('button') || target.closest('input') || target.closest('textarea')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Inner responsive dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-accent-cyan rounded-full pointer-events-none z-[100] hidden md:block"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1,
                    opacity: 1
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />

            {/* Outer trailing trailing ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99] hidden md:block box-border"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    border: isHovering ? '1px solid rgba(6, 182, 212, 0.8)' : '1px solid rgba(255, 255, 255, 0.4)',
                    backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.1)' : 'transparent'
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    scale: { type: "spring", stiffness: 300, damping: 20 }
                }}
            />
        </>
    );
}
