import type * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollHomeToTop(event: React.MouseEvent<HTMLAnchorElement>) {
  if (typeof window === "undefined" || window.location.pathname !== "/") {
    return
  }

  event.preventDefault()

  if (window.location.hash) {
    window.history.replaceState(null, "", "/")
  }

  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
}
