# Vaggelis Bomponis | Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-black?style=for-the-badge&logo=framer&logoColor=white)

A modern, minimalist portfolio website designed for software engineers and developers. Built with a focus on clean aesthetics, smooth animations, and a seamless mobile experience.

## ✨ Features

- **🎨 Modern Aesthetics**: Glassmorphism effects, radial gradients, and a refined dark mode.
- **📱 Fully Responsive**: optimized for all devices, featuring a custom mobile hamburger menu.
- **🎭 Animations**: Smooth entrance animations and interactions using Framer Motion.
- **🌗 Dark/Light Mode**: Integrated theme toggle with persistent state.
- **📝 Dynamic Content**: All text data (experience, projects, bio) is centralized in `src/data/content.ts` for easy updates.
- **🧩 Component Library**: Utilizes Shadcn/UI for accessible and customizable components.
- **🔡 Typography**: Uses `JetBrains Mono` for a developer-centric look.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Directory)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn/UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com) / GitHub Pages

## 🚀 Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js 18+ 
- npm / yarn / pnpm

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/vaggelismpomponis/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open your browser**:
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📂 Project Structure

```bash
├── public/          # Static assets (images, favicon)
├── src/
│   ├── app/         # Next.js App Router pages
│   ├── components/  # React components (ui, layouts, sections)
│   ├── data/        # Content source (content.ts)
│   └── lib/         # Utilities (cn, theme provider)
├── tailwind.config  # Tailwind configuration
└── tsconfig.json    # TypeScript configuration
```

## ✏️ Customization

Updating the portfolio content is straightforward. You don't need to dig into HTML/JSX.

1.  Open `src/data/content.ts`.
2.  Modify the objects for `hero`, `experience`, `education`, `techStack`, and `projects`.
3.  The UI will automatically reflect your changes.

## 🚢 Deployment

This project is optimized for deployment on Vercel.

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Vercel will automatically detect the Next.js settings.
4.  Click **Deploy**.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Designed & Built by **[Vaggelis Bomponis](https://github.com/vaggelismpomponis)**
