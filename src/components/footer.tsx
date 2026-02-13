import { content } from "@/data/content"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="py-8 border-t border-border/40 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} {content.hero.name}. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <Link href={content.hero.social.linkedin} target="_blank" className="hover:text-foreground transition-colors">
                        LinkedIn
                    </Link>
                    <Link href={content.hero.social.email} className="hover:text-foreground transition-colors">
                        Email
                    </Link>
                </div>
            </div>
        </footer>
    )
}
