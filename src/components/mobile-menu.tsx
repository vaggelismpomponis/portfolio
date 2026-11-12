"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { content } from "@/data/content"
import { scrollHomeToTop } from "@/lib/utils"

export interface NavItem {
  name: string
  href: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
  onToggleTheme: () => void
}

export function MobileMenu({
  isOpen,
  onClose,
  navItems,
  onToggleTheme,
}: MobileMenuProps) {
  React.useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  function handleLogoClick(event: React.MouseEvent<HTMLAnchorElement>) {
    onClose()
    scrollHomeToTop(event)
  }

  if (!isOpen) return null

  return (
    <div
      id="mobile-nav-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="fixed inset-0 z-50 flex h-dvh flex-col bg-background md:hidden"
    >
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-4 sm:px-6">
        <Link
          href="/"
          onClick={handleLogoClick}
          aria-label="Vaggelis Bomponis — Home"
          className="inline-flex min-h-10 items-center rounded-md px-1 outline-none"
        >
          <Logo />
        </Link>

        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="min-h-10 min-w-10 rounded-md"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>

      <div className="flex flex-1 flex-col justify-between overflow-y-auto px-4 py-6 sm:px-6">
        <nav aria-label="Mobile sections">
          <p className="mb-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Navigation
          </p>

          <ul className="divide-y divide-border border-y border-border">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex min-h-14 items-center justify-between gap-4 py-3 text-foreground outline-none transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-muted-foreground">
                      0{index + 1}
                    </span>
                    <span className="text-lg font-medium tracking-tight">
                      {item.name}
                    </span>
                  </span>

                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 space-y-4 border-t border-border pt-6">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Appearance
            </span>

            <Button
              type="button"
              variant="outline"
              onClick={onToggleTheme}
              className="min-h-10 rounded-md px-3.5 text-sm"
            >
              <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
              <Moon className="block h-4 w-4 dark:hidden" aria-hidden="true" />
              <span className="hidden dark:inline">Light Mode</span>
              <span className="inline dark:hidden">Dark Mode</span>
            </Button>
          </div>

          <Button
            asChild
            size="lg"
            className="min-h-11 w-full rounded-md"
          >
            <Link href={content.hero.social.email} onClick={onClose}>
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Get in Touch</span>
            </Link>
          </Button>

          <div className="grid grid-cols-2 gap-3">
            <Button
              asChild
              variant="outline"
              className="min-h-11 w-full rounded-md"
            >
              <Link
                href={content.hero.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
              >
                <Linkedin className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>LinkedIn</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="min-h-11 w-full rounded-md"
            >
              <Link
                href={content.hero.social.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
              >
                <Github className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

