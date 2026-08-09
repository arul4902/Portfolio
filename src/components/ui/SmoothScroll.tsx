"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    // Ensuring smooth scroll works flawlessly with framer motion
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}
