'use client'

import { Brain } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();  // Prevent the default link behavior
    window.open("https://aitalk.hashnode.dev/?source=top_nav_blog_home", "_blank");  // Open in a new tab
  };
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
          <Link className="text-sm font-bold hover:underline underline-offset-4 text-white" onClick={handleClick} href="/">
            Blog
          </Link>
        </nav>
      </header>
    )
}