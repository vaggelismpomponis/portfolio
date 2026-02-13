import { content } from "@/data/content"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="py-8 border-t border-border/40 mt-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-muted-foreground relative">
                <p className="w-full text-center order-2 md:order-1">© {new Date().getFullYear()} {content.hero.name}. All rights reserved.</p>

                <div className="flex items-center gap-6 md:absolute md:right-0 order-1 md:order-2">
                    <Link href={content.hero.social.linkedin} target="_blank" className="hover:text-foreground transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href={content.hero.social.email} className="hover:text-foreground transition-colors">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
