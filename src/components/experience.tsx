"use client"

import { content } from "@/data/content"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
    return (
        <section id="experience" className="py-20 space-y-12 scroll-mt-20 max-w-3xl mx-auto">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tighter text-center font-mono"
            >
                Experience
            </motion.h3>

            <div className="relative border-l-2 border-muted-foreground/30 ml-3 space-y-12">
                {content.experience.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="ml-8 relative"
                    >
                        <span className={`absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-muted-foreground/30 ring-4 ring-background ${index === 0 ? "bg-foreground" : "bg-background"}`} />
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                            <h4 className="text-xl font-semibold tracking-tight">{item.role}</h4>
                            <span className="text-sm text-muted-foreground font-mono bg-secondary/50 px-2 py-0.5 rounded">{item.period}</span>
                        </div>
                        <div className="text-base font-medium text-primary mb-2">{item.company}</div>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base max-w-2xl">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
