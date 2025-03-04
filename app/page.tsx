import type { Metadata } from "next"
import Link from "next/link"
import { GameFrame } from "@/components/game-frame"
import { ThemeToggle } from "@/components/theme-toggle"
import { GameFeatures } from "@/components/game-features"
import { GameFAQ } from "@/components/game-faq"
import { GameTips } from "@/components/game-tips"
import { RelatedGames } from "@/components/related-games"
import { Separator } from "@/components/ui/separator"
import { ChevronUp, LightbulbIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Play Cookie Clicker Online | Best Free Idle Baking Game 2025",
  description:
    "Play the original Cookie Clicker game for free! Bake billions of cookies, unlock achievements, and build your cookie empire in this addictive idle game. No download required.",
  keywords:
    "cookie clicker, idle game, clicker game, free online games, cookie clicker online, cookie clicker unblocked, cookie clicker tips, cookie clicker strategy, best idle games, orteil games",
  openGraph: {
    title: "Cookie Clicker - The Original Idle Baking Game | Play Free Online",
    description:
      "Click cookies, build an empire! Play Cookie Clicker online for free. No download required. Discover strategies, upgrades, and achievements in this addictive idle game.",
    images: [{ url: "/cookie-clicker-og.jpg", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Clicker - Play the Best Idle Game Online for Free",
    description:
      "Bake billions of cookies in this addictive idle game. Unlock achievements, discover secrets, and build your cookie empire!",
    images: ["/cookie-clicker-twitter.jpg"],
  },
  alternates: {
    canonical: "https://your-domain.com/cookie-clicker",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/placeholder.svg?height=40&width=40" alt="Cookie Clicker Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold tracking-tight">Cookie Clicker</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#game" className="text-sm font-medium hover:text-primary">
              Play Game
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#tips" className="text-sm font-medium hover:text-primary">
              Tips & Tricks
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="container py-8">
        <section className="space-y-4 pb-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Play Cookie Clicker Online</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground">
              Welcome to the ultimate Cookie Clicker experience! This addictive idle game lets you bake billions of
              cookies, upgrade your bakery, and discover secret achievements. Created by Orteil in 2013, Cookie Clicker
              has become a global phenomenon with millions of players. No download required - play directly in your
              browser!
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="#game"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Play Now
              </Link>
              <Link
                href="#tips"
                className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                View Tips & Strategies
              </Link>
            </div>
          </div>
        </section>

        <section id="game" className="my-8 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Play Cookie Clicker Now</h2>
          <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
            <div>
              <p className="text-muted-foreground mb-4">
                Click on the giant cookie to start producing cookies. Use your cookies to purchase upgrades and
                buildings to increase your cookie production. The more buildings you have, the more cookies you'll
                produce automatically. Look out for golden cookies that appear randomly for special bonuses!
              </p>
              <GameFrame url="https://ubg365.github.io/cookie-clicker/play.html" />
              <div className="mt-4 flex justify-center">
                <Link
                  href="#game"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Restart Game <ChevronUp className="h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h3 className="text-xl font-semibold mb-3">Quick Start Guide</h3>
              <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                <li>Click the big cookie to earn cookies</li>
                <li>Buy upgrades from the right panel</li>
                <li>Purchase buildings to automate production</li>
                <li>Click golden cookies for special bonuses</li>
                <li>Unlock achievements for permanent benefits</li>
                <li>Ascend when you have enough prestige</li>
              </ol>
              <div className="mt-4 p-3 bg-amber-100 dark:bg-amber-950 rounded border border-amber-200 dark:border-amber-900">
                <p className="text-sm text-amber-800 dark:text-amber-300 flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-0.5">
                    <LightbulbIcon className="h-4 w-4" />
                  </span>
                  <span>Pro Tip: Hold Ctrl while clicking buildings to buy 10 at once, or Shift to buy 100!</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        <section id="features" className="my-8">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Game Features</h2>
          <GameFeatures />
        </section>

        <Separator className="my-8" />

        <section id="tips" className="my-8">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Tips & Strategies</h2>
          <GameTips />
        </section>

        <Separator className="my-8" />

        <section id="faq" className="my-8">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
          <GameFAQ />
        </section>

        <Separator className="my-8" />

        <section className="my-8">
          <h2 className="text-2xl font-bold tracking-tight mb-6">More Games Like Cookie Clicker</h2>
          <RelatedGames />
        </section>

        <section className="my-8 rounded-lg bg-muted p-6">
          <h2 className="text-2xl font-bold tracking-tight mb-4">About Cookie Clicker</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Cookie Clicker is an incremental game created by French programmer Julien "Orteil" Thiennot in 2013. The
              game has since become a cultural phenomenon, attracting millions of players worldwide with its simple yet
              addictive gameplay.
            </p>
            <p>
              The premise is straightforward: click on a giant cookie to produce cookies, then use those cookies to buy
              upgrades and buildings that automatically produce more cookies. As you progress, you'll unlock new
              features, achievements, and discover the game's quirky humor and hidden secrets.
            </p>
            <p>
              What makes Cookie Clicker so engaging is its perfect balance of immediate gratification and long-term
              strategy. The game continuously scales, allowing players to reach astronomical numbers of cookies produced
              per second, creating a satisfying sense of progression and achievement.
            </p>
            <p>
              The game features various buildings like Cursors, Grandmas, Farms, Mines, Factories, Banks, Temples,
              Wizard Towers, and more exotic options as you progress. Each building produces cookies at different rates
              and can be upgraded to become more efficient. Special upgrades, achievements, and the mysterious
              Grandmapocalypse add layers of depth to the gameplay.
            </p>
            <p>
              Cookie Clicker pioneered many mechanics now common in idle games, including prestige systems (Ascension),
              temporary boosts (Golden Cookies), and mini-games. Its influence on the gaming industry is significant,
              inspiring countless other idle and incremental games.
            </p>
            <p>
              Whether you're a casual player looking for a fun distraction or a dedicated gamer aiming to optimize your
              cookie production to the maximum, Cookie Clicker offers hours of entertainment. Play for free right here
              in your browser!
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Cookie Clicker</h3>
              <p className="text-sm text-muted-foreground">
                The ultimate idle game experience. Bake cookies, upgrade your bakery, and discover secrets in this
                addictive game created by Orteil.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Discord</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="12" r="1"></circle>
                    <circle cx="15" cy="12" r="1"></circle>
                    <path d="M7.5 6.5C7.5 6.5 9 4 12 4C15 4 16.5 6.5 16.5 6.5"></path>
                    <path d="M16.5 17.5C16.5 17.5 15 20 12 20C9 20 7.5 17.5 7.5 17.5"></path>
                    <path d="M8.5 2.5L6 2L2 6L2.5 8.5"></path>
                    <path d="M15.5 2.5L18 2L22 6L21.5 8.5"></path>
                    <path d="M8.5 21.5L6 22L2 18L2.5 15.5"></path>
                    <path d="M15.5 21.5L18 22L22 18L21.5 15.5"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#game" className="hover:text-primary">
                    Play Game
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="hover:text-primary">
                    Game Features
                  </Link>
                </li>
                <li>
                  <Link href="#tips" className="hover:text-primary">
                    Tips & Strategies
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-primary">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Leaderboards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Updates & News
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Cookie Clicker Wiki
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Advanced Strategy Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Complete Achievement List
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Building Calculator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Community Forum
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Official Website
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    DMCA Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Accessibility Statement
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Cookie Clicker Fan Site. This is an unofficial fan site. Cookie Clicker was
              created by Orteil (Julien Thiennot).
            </p>
            <p className="mt-2">
              All game content, images, and trademarks related to Cookie Clicker are the property of their respective
              owners.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

