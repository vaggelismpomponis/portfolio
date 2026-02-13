"use client"

import { content } from "@/data/content"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Projects() {
    return (
        <section id="projects" className="py-20 space-y-12 scroll-mt-20 px-4">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tighter text-center font-mono"
            >
                Featured Projects
            </motion.h3>

            <div className="max-w-2xl mx-auto text-center text-muted-foreground mb-12 font-mono text-sm sm:text-base">
                A collection of projects where I've had the opportunity to solve interesting problems.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                    >
                        <Card className="h-full flex flex-col bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/20 hover:bg-card/60 transition-all duration-300 overflow-hidden group-hover:shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl tracking-tight flex items-center justify-between">
                                    {project.title}
                                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                </CardTitle>
                                <CardDescription className="line-clamp-3 mt-2 text-muted-foreground/80">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col justify-end">
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.map((t) => (
                                        <Badge key={t} variant="secondary" className="font-mono text-[10px] uppercase tracking-wider bg-secondary/50 text-secondary-foreground/80">
                                            {t}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <Link href={project.link} target="_blank" className="absolute inset-0 z-10">
                                <span className="sr-only">View Project</span>
                            </Link>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
