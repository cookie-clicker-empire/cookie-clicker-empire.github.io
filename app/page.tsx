import type { Metadata } from "next";
import Link from "next/link";
import { GameFAQ } from "@/app/components/game-faq";
import { GameFrame } from "@/components/game-frame";
import { GameFeatures } from "@/components/game-features";
import { GameTips } from "@/components/game-tips";
import { RelatedGames } from "@/components/related-games";
import { Separator } from "@/components/ui/separator";
import { ChevronUp, LightbulbIcon } from "lucide-react";

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
};

export default function Home() {
  return (
    <div className="container py-8">
      <section className="space-y-4 pb-8">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Play Cookie Clicker Online
        </h2>
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground">
            Welcome to the ultimate Cookie Clicker experience! This addictive
            idle game lets you bake billions of cookies, upgrade your bakery,
            and discover secret achievements. Created by Orteil in 2013, Cookie
            Clicker has become a global phenomenon with millions of players. No
            download required - play directly in your browser!
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
        <h2 className="text-2xl font-bold tracking-tight">
          Play Cookie Clicker Now
        </h2>
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div>
            <p className="text-muted-foreground mb-4">
              Click on the giant cookie to start producing cookies. Use your
              cookies to purchase upgrades and buildings to increase your cookie
              production. The more buildings you have, the more cookies you'll
              produce automatically. Look out for golden cookies that appear
              randomly for special bonuses!
            </p>
            <GameFrame url="https://ubg365.github.io/cookie-clicker/play.html" />
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
                <span>
                  Pro Tip: Hold Ctrl while clicking buildings to buy 10 at once,
                  or Shift to buy 100!
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      <section id="features" className="my-8">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          Game Features
        </h2>
        <GameFeatures />
      </section>

      <Separator className="my-8" />

      <section id="tips" className="my-8">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          Tips & Strategies
        </h2>
        <GameTips />
      </section>

      <Separator className="my-8" />

      <section id="faq" className="my-8">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          Frequently Asked Questions
        </h2>
        <GameFAQ />
      </section>

      <Separator className="my-8" />

      <section className="my-8">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          More Games Like Cookie Clicker
        </h2>
        <RelatedGames />
      </section>

      <section className="my-8 rounded-lg bg-muted p-6">
        <h2 className="text-2xl font-bold tracking-tight mb-4">
          About Cookie Clicker
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Cookie Clicker is an incremental game created by French programmer
            Julien "Orteil" Thiennot in 2013. The game has since become a
            cultural phenomenon, attracting millions of players worldwide with
            its simple yet addictive gameplay.
          </p>
          <p>
            The premise is straightforward: click on a giant cookie to produce
            cookies, then use those cookies to buy upgrades and buildings that
            automatically produce more cookies. As you progress, you'll unlock
            new features, achievements, and discover the game's quirky humor and
            hidden secrets.
          </p>
          <p>
            What makes Cookie Clicker so engaging is its perfect balance of
            immediate gratification and long-term strategy. The game
            continuously scales, allowing players to reach astronomical numbers
            of cookies produced per second, creating a satisfying sense of
            progression and achievement.
          </p>
          <p>
            The game features various buildings like Cursors, Grandmas, Farms,
            Mines, Factories, Banks, Temples, Wizard Towers, and more exotic
            options as you progress. Each building produces cookies at different
            rates and can be upgraded to become more efficient. Special
            upgrades, achievements, and the mysterious Grandmapocalypse add
            layers of depth to the gameplay.
          </p>
          <p>
            Cookie Clicker pioneered many mechanics now common in idle games,
            including prestige systems (Ascension), temporary boosts (Golden
            Cookies), and mini-games. Its influence on the gaming industry is
            significant, inspiring countless other idle and incremental games.
          </p>
          <p>
            Whether you're a casual player looking for a fun distraction or a
            dedicated gamer aiming to optimize your cookie production to the
            maximum, Cookie Clicker offers hours of entertainment. Play for free
            right here in your browser!
          </p>
        </div>
      </section>
    </div>
  );
}
