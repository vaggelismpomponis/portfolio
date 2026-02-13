"use client"

import { content } from "@/data/content"
import { motion } from "framer-motion"

export function TechStack() {
    return (
        <section className="py-20 space-y-8">
            <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold tracking-tight"
            >
                Tech Stack
            </motion.h3>

            <div className="flex flex-wrap gap-4">
                {content.techStack.map((tech, index) => (
                    <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="px-4 py-2 rounded-full border border-border bg-card/50 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                        {tech}
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
