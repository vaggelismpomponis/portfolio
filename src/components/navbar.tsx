"use client"

import * as React from "react"
import Link from "next/link"
import { Github, Linkedin, Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { MobileMenu, type NavItem } from "@/components/mobile-menu"
import { content } from "@/data/content"
import { scrollHomeToTop } from "@/lib/utils"

const navItems: NavItem[] = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certificates" },
  { name: "Tech Stack", href: "#tech-stack" },
]

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  function handleToggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const handleCloseMenu = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            onClick={scrollHomeToTop}
            aria-label="Vaggelis Bomponis — Home"
            className="inline-flex min-h-10 items-center rounded-md px-1 outline-none transition-opacity hover:opacity-80"
          >
            <Logo />
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hidden min-h-10 min-w-10 rounded-md md:inline-flex"
            >
              <Link
                href={content.hero.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hidden min-h-10 min-w-10 rounded-md md:inline-flex"
            >
              <Link
                href={content.hero.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="hidden min-h-10 min-w-10 rounded-md md:inline-flex"
              onClick={handleToggleTheme}
              aria-label="Toggle color theme"
            >
              <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
              <Moon className="block h-4 w-4 dark:hidden" aria-hidden="true" />
            </Button>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="min-h-10 min-w-10 rounded-md md:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-menu"
            >
              <Menu className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isOpen}
        onClose={handleCloseMenu}
        navItems={navItems}
        onToggleTheme={handleToggleTheme}
      />
    </>
  )
}
