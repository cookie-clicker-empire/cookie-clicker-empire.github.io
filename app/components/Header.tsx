import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <img
              src="https://gameson24.in/images/cookie-clicker-clicker-games.png"
              alt="Cookie Clicker Logo"
              className="h-10 w-10"
            />
          </Link>
          <Link href="/" className="text-xl font-bold tracking-tight">
            Cookie Clicker
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#game"
            className="text-sm font-medium hover:text-primary"
          >
            Play Game
          </Link>
          <Link
            href="/#features"
            className="text-sm font-medium hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="/#tips"
            className="text-sm font-medium hover:text-primary"
          >
            Tips & Tricks
          </Link>
          <Link href="/#faq" className="text-sm font-medium hover:text-primary">
            FAQ
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
