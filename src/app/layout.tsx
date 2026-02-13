import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaggelis Bomponis | Portfolio",
  description: "Senior Frontend Engineer & UI/UX Designer. Focusing on modern, minimalist web experiences.",
};

import { Navbar } from "@/components/navbar";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground relative font-sans`}
      >
        <div className="fixed inset-0 bg-dot-pattern opacity-[0.4] -z-10 pointer-events-none" />
        <div className="fixed inset-0 -z-20 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--primary)_100%)] opacity-20 dark:opacity-10" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
