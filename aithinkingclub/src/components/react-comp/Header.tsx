import { Brain } from "lucide-react"
import Link from "next/link"

export default function Header() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Brain className="h-6 w-6 text-primary fill-white" />
          <span className="ml-2 text-lg font-bold text-white">AI Thinking Club</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-bold hover:underline underline-offset-4 text-white" href="/about">
            About
          </Link>
          <Link className="text-sm font-bold hover:underline underline-offset-4 text-white" href="/events">
            Events
          </Link>
          <Link className="text-sm font-bold hover:underline underline-offset-4 text-white" href="/internships">
            Internships
          </Link>
        </nav>
      </header>
    )
}