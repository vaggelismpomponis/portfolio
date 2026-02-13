"use client"

import { content } from "@/data/content"
import { motion } from "framer-motion"
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section id="about" className="flex flex-col justify-center items-center text-center space-y-10 pt-32 pb-8 sm:py-32 px-4 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 w-full"
            >
                <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-medium w-fit mx-auto border border-emerald-500/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Available for new opportunities
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-foreground font-mono leading-tight">
                    Building <span className="text-primary">Applications</span> <br className="hidden sm:block" />
                    From <span className="text-primary">Idea</span> to <span className="text-primary">Production</span>
                </h1>

                <p className="max-w-2xl mx-auto text-base sm:text-xl text-muted-foreground leading-relaxed font-mono px-2">
                    Looking for a Fullstack Engineer who actually loves to ship? Stick around, you might have just found one.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
            >
                <Button asChild size="lg" className="rounded-full h-12 px-8 text-base w-full sm:w-auto font-mono">
                    <Link href="#projects">
                        Check My Work
                    </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="rounded-full h-12 px-8 text-base w-full sm:w-auto font-mono">
                    <Link href={content.hero.social.email}>
                        Contact Me
                    </Link>
                </Button>
            </motion.div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block text-muted-foreground">
                <ArrowDown className="w-5 h-5" />
            </div>
        </section>
    )
}
