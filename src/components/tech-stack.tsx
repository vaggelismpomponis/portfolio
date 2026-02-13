"use client"

import { content } from "@/data/content"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TechStack() {
    return (
        <section id="tech-stack" className="py-10 space-y-12 scroll-mt-20">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tighter text-center font-mono"
            >
                Tech Stack
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                {Object.entries(content.techStack).map(([category, items], categoryIndex) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        className="h-full"
                    >
                        <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-center capitalize font-mono text-muted-foreground/80">
                                    {category}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap justify-center gap-3">
                                {items.map((tech, index) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 rounded-full border border-border bg-background/50 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
