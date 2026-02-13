"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Github, Linkedin, Mail, Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { content } from "@/data/content"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Tech Stack", href: "#tech-stack" },
]

export function Navbar() {
    const { setTheme, theme } = useTheme()
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="fixed top-6 inset-x-0 mx-auto z-50 flex justify-center pointer-events-none">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="pointer-events-auto flex items-center gap-2 p-1.5 rounded-full border border-primary/20 bg-background/90 backdrop-blur-md shadow-2xl dark:shadow-primary/5 dark:bg-muted/40"
            >
                <Link
                    href="/"
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm hover:bg-primary/20 transition-colors"
                >
                    V.
                </Link>

                <div className="hidden sm:flex items-center gap-1 mx-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-2 pl-2 border-l border-border/50">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full w-9 h-9"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>

                    <Button asChild variant="ghost" size="icon" className="rounded-full w-9 h-9 flex">
                        <Link href={content.hero.social.linkedin} target="_blank">
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </Button>

                    <Button asChild variant="ghost" size="icon" className="rounded-full w-9 h-9 flex">
                        <Link href={content.hero.social.github} target="_blank">
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden rounded-full w-9 h-9"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Menu className="h-4 w-4" />
                    </Button>
                </div>
            </motion.nav>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute top-16 right-4 w-56 p-2 rounded-xl border border-border/40 bg-background/80 backdrop-blur-3xl shadow-2xl flex flex-col gap-1 md:hidden pointer-events-auto"
                >
                    <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider flex justify-between items-center">
                        <span>Navigation</span>
                        <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded border border-primary/20">Menu</span>
                    </div>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="h-px bg-border my-1" />
                    <Link
                        href={content.hero.social.email}
                        className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors flex items-center gap-2"
                        onClick={() => setIsOpen(false)}
                    >
                        <Mail className="h-4 w-4" />
                        Contact
                    </Link>
                </motion.div>
            )}
        </div>
    )
}
