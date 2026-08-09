export type ProjectCategory = 'Full Stack' | 'Web Applications' | 'AI' | 'Client Work' | 'Business Websites' | 'All';

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory[];
    shortDescription: string;
    overview?: string;
    problem?: string;
    solution?: string;
    technology: string[];
    features?: string[];
    myRole?: string;
    result?: string;
    liveUrl?: string;
    githubUrl?: string;
    isFeatured: boolean;
    image?: string;
}

export const projects: Project[] = [
    {
        id: "ai-mock-interview",
        title: "AI Mock Interview Coach",
        category: ["AI", "Web Applications", "Full Stack"],
        shortDescription: "An AI-powered interview preparation platform designed to simulate interview experiences and provide structured feedback.",
        overview: "This platform helps users practice interviews by acting as an AI interviewer, evaluating responses, and providing actionable feedback.",
        problem: "Candidates often lack access to realistic interview practice and structured feedback before actual job interviews.",
        solution: "Built a web application that leverages OpenAI's GPT models to conduct dynamic interviews and score candidate responses.",
        technology: ["React", "REST APIs", "OpenAI GPT", "Prompt Engineering"],
        features: ["AI-powered interview experience", "GPT API integration", "Structured feedback", "Evaluation/scoring", "Responsive user experience"],
        myRole: "Full Stack Developer - Built the frontend UI and integrated the GPT API via REST services.",
        result: "Delivered a fully functional, responsive mock-interview application.",
        liveUrl: "https://ai-mock-interview-coach.vercel.app/",
        githubUrl: "https://github.com/arul4902", // Fallback to github profile since repo not provided
        isFeatured: true,
        image: "/ai_mock_interview_cover_1786256412573.png",
    },
    {
        id: "farm2factory",
        title: "Farm2Factory",
        category: ["Full Stack", "Web Applications"],
        shortDescription: "An agricultural waste-to-product conversion platform.",
        overview: "A comprehensive platform designed to facilitate the conversion of agricultural waste into usable products by connecting stakeholders.",
        problem: "Inefficient supply chains for managing and repurposing agricultural waste.",
        solution: "Developed a full-stack platform with a modular architecture linking front-end interfaces to robust backend services.",
        technology: ["React", "Spring Boot", "MySQL", "REST APIs"],
        features: ["Waste-to-product conversion pipelines", "Modular backend services", "Responsive UI components", "Efficient data handling"],
        myRole: "Full Stack Developer - Architected the Spring Boot backend and integrated it with the React frontend.",
        result: "Created a scalable platform MVP demonstrating the end-to-end flow from waste listing to conversion.",
        isFeatured: true,
        image: "/farm2factory_cover_1786256429490.png",
    },
    {
        id: "hvac-website",
        title: "HVAC Services",
        category: ["Client Work", "Business Websites"],
        shortDescription: "Professional website for an HVAC business.",
        technology: ["Next.js", "Tailwind CSS"],
        liveUrl: "https://hvac-website-rho.vercel.app/",
        isFeatured: false,
        image: "/hvac_website_cover_1786256444162.png",
    },
    {
        id: "plumbing-website",
        title: "Plumbing Services",
        category: ["Client Work", "Business Websites"],
        shortDescription: "Conversion-optimized website for a plumbing company.",
        technology: ["Next.js", "Tailwind CSS", "JavaScript"],
        liveUrl: "https://plumbing-website-mauve.vercel.app/",
        isFeatured: false,
        image: "/plumbing_website_cover_1786256461135.png",
    },
    {
        id: "roofing-website",
        title: "Summit Roofing Solutions",
        category: ["Client Work", "Business Websites"],
        shortDescription: "High-end, dynamic website for a roofing solutions provider.",
        technology: ["Next.js", "Tailwind CSS"],
        liveUrl: "https://roofing-website-delta.vercel.app/",
        isFeatured: false,
        image: "/roofing_website_cover_1786256476336.png",
    },
    {
        id: "black-trendz",
        title: "The Black Trendz",
        category: ["Client Work", "Business Websites", "Web Applications"],
        shortDescription: "Premium e-commerce platform for a fashion store.",
        technology: ["React", "JavaScript", "Tailwind CSS"],
        liveUrl: "https://black-trendz.vercel.app/",
        isFeatured: false,
        image: "/black_trendz_cover_1786256492189.png",
    },
    {
        id: "basil-town",
        title: "Basil Town",
        category: ["Client Work", "Business Websites"],
        shortDescription: "Elegant, multi-cuisine restaurant website.",
        technology: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://basil-town.vercel.app/",
        isFeatured: false,
        image: "/basil_town_cover_1786256505421.png",
    }
];
