import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Noise from "@/components/ui/Noise";
import SmoothScroll from "@/components/ui/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: "Arul S | Full Stack Developer",
  description: "Full Stack Developer specializing in modern web applications, React, Angular, Spring Boot, REST APIs, AI integrations and premium digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`} style={{ scrollBehavior: 'smooth' }}>
      <body className={`font-sans antialiased bg-background text-foreground selection:bg-accent selection:text-charcoal-950 flex flex-col min-h-screen relative overflow-x-hidden`}>
        <Noise />
        <AnimatedBackground />
        <CustomCursor />
        <Navbar />
        <main className="flex-grow z-10">
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </main>
        <Footer />
      </body>
    </html>
  );
}
