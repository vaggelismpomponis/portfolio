"use client"

import { content } from "@/data/content"
import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Certificates() {
    return (
        <section id="certificates" className="py-10 space-y-12 scroll-mt-20 px-4 max-w-5xl mx-auto">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tighter text-center font-mono"
            >
                Certifications
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/20 hover:bg-card/60 transition-all duration-300">
                            <CardHeader className="space-y-1">
                                <div className="flex items-center justify-between">
                                    <Award className="h-5 w-5 text-primary mb-2" />
                                    <span className="text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded">
                                        {cert.date}
                                    </span>
                                </div>
                                <CardTitle className="text-lg font-bold leading-tight tracking-tight">
                                    {cert.title}
                                </CardTitle>
                                <CardDescription className="text-sm font-medium text-foreground/80">
                                    {cert.issuer}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {cert.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
