import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  markClassName?: string
  showWordmark?: boolean
}

export function Logo({
  className,
  markClassName,
  showWordmark = true,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 38 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-6 w-auto shrink-0", markClassName)}
        aria-hidden="true"
      >
        <path
          d="M2.2 4H5.6L9.7 18.6L13.8 4H17.2L11.2 24H7.8L2.2 4Z"
          className="fill-emerald-700 dark:fill-emerald-400"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.6 4H29.4A5.2 5.2 0 0 1 31.8 13.8A5.6 5.6 0 0 1 28.6 24H13.6L19.6 4ZM22.04 7.2L20.57 12.1H29A2.45 2.45 0 0 0 29 7.2H22.04ZM19.61 15.3L17.96 20.8H28.3A2.75 2.75 0 0 0 28.3 15.3H19.61Z"
          className="fill-foreground"
        />
      </svg>

      {showWordmark && (
        <span className="flex items-baseline gap-1.5 text-sm tracking-tight">
          <span className="font-semibold text-foreground">Vaggelis</span>
          <span className="font-normal text-muted-foreground">Bomponis</span>
        </span>
      )}
    </span>
  )
}
