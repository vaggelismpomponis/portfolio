export interface SocialLinks {
  linkedin: string
  github: string
  email: string
}

export interface HeroContent {
  name: string
  role: string
  headline: string
  description: string
  social: SocialLinks
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
}

export interface EducationItem {
  degree: string
  university: string
  period: string
  thesis: string
}

export interface CertificateItem {
  title: string
  category: string
  issuer: string
  date: string
  description: string
  highlights: string[]
  credentialId?: string
}

export interface TechStackContent {
  frontend: string[]
  backend: string[]
  tools: string[]
}

export interface ProjectItem {
  title: string
  category: string
  domain: string
  description: string
  tech: string[]
  image: string
  link: string
  github?: string
}

export interface PortfolioContent {
  hero: HeroContent
  experience: ExperienceItem[]
  education: EducationItem
  certificates: CertificateItem[]
  techStack: TechStackContent
  projects: ProjectItem[]
}

export const content: PortfolioContent = {
  hero: {
    name: "Vaggelis Bomponis",
    role: "Associate Software Engineer",
    headline: "Building user-friendly digital experiences with creativity and logic.",
    description:
      "Associate Software Engineer at PwC Greece with a background in Digital Systems at the University of Thessaly. I build functional, maintainable web applications and software solutions using React, .NET, and TypeScript.",
    social: {
      linkedin: "https://www.linkedin.com/in/vaggelis-bomponis",
      github: "https://github.com/vaggelismpomponis",
      email: "mailto:ebomponis@gmail.com",
    },
  },
  experience: [
    {
      company: "PwC Greece",
      role: "Associate Software Engineer",
      period: "Aug 2026 – Present",
      description:
        "Full-time software engineer focusing on engineering and software infrastructure.",
    },
    {
      company: "PwC Greece",
      role: "Software Engineer Intern",
      period: "Feb 2026 – Jul 2026",
      description:
        "Remote internship building web solutions with React and .NET as part of the Technology Advisory team.",
    },
    {
      company: "Real Marketing",
      role: "Recruiter & Office Administrator",
      period: "Sep 2025 – Feb 2026",
      description:
        "Part-time, on-site role managing recruitment workflows (job advertisements, candidate communication, contracts) and the company's digital presence.",
    },
    {
      company: "Vodafone",
      role: "1st Level Tech Support Agent",
      period: "Jul 2023 – Sep 2025",
      description:
        "Full-time remote role providing specialized IT consulting, troubleshooting, and customer technical issue resolution.",
    },
    {
      company: "iCall Support & Growth I.K.E.",
      role: "Sales Consultant",
      period: "Jan 2022 – Jun 2022",
      description:
        "Full-time remote sales consulting focused on customer growth, CRM, and support services.",
    },
  ],
  education: {
    degree: "BSc in Digital Systems",
    university: "University of Thessaly",
    period: "Expected Feb 2026",
    thesis: "Creation of a comprehensive online alumni management application",
  },
  certificates: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      category: "Cloud Certification",
      issuer: "Microsoft",
      date: "Aug 2026",
      description:
        "Validated foundational knowledge of cloud concepts and core Microsoft Azure services.",
      highlights: ["AZ-900", "Cloud Concepts", "Azure Services"],
      credentialId: "CC41B6D9D03881",
    },
    {
      title: "PwC Software Academy",
      category: "Engineering Workshop",
      issuer: "PwC",
      date: "Dec 2025",
      description:
        "Intensive 25-hour workshop on full-stack development using .NET and Blazor.",
      highlights: [".NET", "Blazor", "25 Hours"],
    },
    {
      title: "Creating a Business Plan",
      category: "Professional Course",
      issuer: "LinkedIn",
      date: "Apr 2024",
      description: "Business planning and communication skills.",
      highlights: ["Business Planning", "Communication"],
    },
    {
      title: "Responsive Web Design",
      category: "Developer Certification",
      issuer: "freeCodeCamp",
      date: "Nov 2021",
      description:
        "Developer certification representing approximately 300 hours of coursework.",
      highlights: ["HTML5", "CSS3", "300 Hours"],
    },
  ],
  techStack: {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5/CSS3",
      "Tailwind CSS",
    ],
    backend: [
      ".NET",
      "PHP",
      "Supabase",
      "SQL (PostgreSQL, MySQL)",
      "Node.js",
    ],
    tools: ["Git", "GitHub", "VS Code", "Postman"],
  },
  projects: [
    {
      title: "Spendlore",
      category: "Web & Android App",
      domain: "spendlore.gr",
      description:
        "Cross-platform personal finance PWA and Android application (published on Google Play) featuring expense tracking, smart budgets, OCR receipt scanning, analytics, and real-time Supabase sync.",
      tech: ["React", "Vite", "Supabase", "Capacitor", "Tailwind CSS"],
      image: "/projects/spendlore.png",
      link: "https://spendlore.gr",
      github: "https://github.com/vaggelismpomponis/spendlore",
    },
    {
      title: "Zilolex",
      category: "Web Platform",
      domain: "zilolex.gr",
      description:
        "Bilingual (EL/EN) workforce mobility, relocation, and student accommodation platform with multi-step intake workflows and transactional email delivery.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
      image: "/projects/zilolex.png",
      link: "https://zilolex.gr",
      github: "https://github.com/vaggelismpomponis/zilolex",
    },
    {
      title: "Didactirion",
      category: "Web Platform",
      domain: "didactirion.gr",
      description:
        "Full-stack web platform for an educational organization built with Next.js, PostgreSQL, Prisma ORM, and NextAuth authentication.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth"],
      image: "/projects/didactirion.png",
      link: "https://didactirion.gr",
      github: "https://github.com/vaggelismpomponis/didactirion",
    },
    {
      title: "Ephtopia Cleans",
      category: "Web Application",
      domain: "ephtopia-cleans.gr",
      description:
        "Operations and booking web application for Airbnb turnover cleaning and linen management, backed by Supabase and Zod-validated forms.",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Zod"],
      image: "/projects/ephtopia-cleans.png",
      link: "https://ephtopia-cleans.gr",
      github: "https://github.com/vaggelismpomponis/ephtopia-cleans",
    },
    {
      title: "DN Group – Dimeras",
      category: "Client Website",
      domain: "dimeras.gr",
      description:
        "Corporate website for a construction and renovation firm in Larissa showcasing residential renovations, building reconstructions, and private works.",
      tech: ["Next.js", "TypeScript", "Resend"],
      image: "/projects/dimeras.png",
      link: "https://dimeras.gr",
      github: "https://github.com/vaggelismpomponis/dimeras",
    },
    {
      title: "DSUth Exam Bank",
      category: "Web Application",
      domain: "dsuth-exam-bank.vercel.app",
      description:
        "Full-stack web application providing a searchable database of university exam topics with real-time Supabase retrieval and dynamic filtering.",
      tech: ["React", "Supabase", "PostgreSQL", "Vercel"],
      image: "/projects/dsuth-exam-bank.png",
      link: "https://dsuth-exam-bank.vercel.app",
      github: "https://github.com/vaggelismpomponis/dsuth-exam-bank",
    },
    {
      title: "Online Alumni Management",
      category: "Academic Thesis",
      domain: "alumni.ds.uth.gr",
      description:
        "Graduate management platform built for my undergraduate thesis featuring custom PHP plugins, advanced user management, and alumni networking.",
      tech: ["WordPress", "PHP", "MySQL", "JavaScript"],
      image: "/projects/alumni.png",
      link: "https://alumni.ds.uth.gr",
    },
  ],
}
