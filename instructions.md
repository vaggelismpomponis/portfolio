# Project: Personal Portfolio Website for Vaggelis Bomponis

## 1. Role & Objective
You are an expert Senior Frontend Engineer and UI/UX Designer specializing in modern, minimalist portfolios (Vercel-style aesthetics). 
Your task is to build a high-performance personal portfolio website for **Vaggelis Bomponis**, inspired by the design philosophy of `https://ealexandros.vercel.app/`.

## 2. Tech Stack Requirements
- **Framework:** Next.js 14+ (App Router, React Server Components).
- **Styling:** Tailwind CSS (Mobile-first, dark mode default).
- **UI Components:** Shadcn/UI (specifically Cards, Buttons, Separators).
- **Icons:** Lucide React.
- **Animations:** Framer Motion (for smooth page transitions and hover effects).
- **Font:** Geist Sans or Inter (clean, sans-serif typography).
- **Deployment:** Optimized for Vercel.

## 3. Design Aesthetics (The "ealexandros" Style)
- **Theme:** Dark mode only (or dark default with a toggle). Background should be `bg-zinc-950` or similar deep gray/black.
- **Layout:** - **Hero Section:** Minimalist introduction. Large heading with name, subtle gradient text for the role.
  - **Bento Grid or Clean List:** Display projects and experience in a grid layout (Bento box style) or a very clean vertical timeline.
  - **Navigation:** Floating dock or simple sticky header with blur effect (`backdrop-blur-md`).
- **Interactions:** Subtle hover effects (cards lifting slightly, glow borders), smooth scrolling.
- **Typography:** High contrast. Headings in white (`text-zinc-50`), body text in gray (`text-zinc-400`).

## 4. Content & Data
Since you cannot browse LinkedIn directly, use the following structure and fill it with the provided context below.

**Profile Target:**
- **Name:** Vaggelis Bomponis
- **LinkedIn:** https://www.linkedin.com/in/vaggelis-bomponis
- **Vibe:** Professional, Engineering-focused, Clean code.

### Architecture Structure (File Plan)
1. `app/page.tsx`: Main landing page combining Hero, About, Experience, Projects.
2. `components/hero.tsx`: Introduction with a "Connect" button linking to LinkedIn.
3. `components/experience.tsx`: Vertical timeline or card list of work history.
4. `components/projects.tsx`: Grid view of top projects.
5. `components/tech-stack.tsx`: Marquee or grid of icons (React, Next.js, TypeScript, etc.).
6. `components/footer.tsx`: Simple footer with social links.

## 5. Context for Content Generation
*Please use the following information to populate the site content. If specific details are missing, use realistic placeholders for a Software Engineer/Developer.*

**(User: Please paste your LinkedIn "About" summary and "Experience" titles here before running the prompt)**
> [PASTE YOUR LINKEDIN SUMMARY HERE]
🎓 ICT Student | Web Developer | Tech Enthusiast
​Hi there! 👋 I am a Junior Web Developer with a knack for solving problems and a passion for code. Currently in my final year of Digital Systems at the University of Thessaly, I enjoy combining creativity with technical logic to build user-friendly digital experiences.​
My journey started in Technical Support, where for over 2 years I helped customers solve technical challenges efficiently. Now, I have pivoted fully into development, utilizing technologies like React and .NET to build functional web solutions.​
💻 What I work with: React, .NET, WordPress.🚀 
My Goal: To continuously learn, innovate, and contribute to impactful tech projects.​
Let’s connect!

## 6. Implementation Steps
1. Initialize the Next.js app with Tailwind and Shadcn.
2. Create the layout wrapper with a dark theme provider.
3. Build the `Hero` component with a typing effect or fade-in animation.
4. Build the `Experience` section using a vertical step design.
5. Build the `Contact` section with a direct mailto link and the LinkedIn URL provided.
6. Ensure the site is fully responsive (mobile-friendly).

**Action:** Start by generating the project structure and the main landing page code.