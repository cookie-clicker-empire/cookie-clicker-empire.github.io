import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";

export function RelatedGames() {
  const games = [
    {
      title: "Banana Clicker",
      description:
        "🍌 Banana Clicker – Go bananas with this fun and addictive clicker game! Tap to collect bananas, upgrade your farm, and unlock crazy boosts to multiply your earnings. The more you click, the more you grow! 🍌💰",
      image:
        "https://img.gamemonetize.com/jhuhd9lxirm5t1vw5wi4czyv0swfkf8k/512x384.jpg",
      link: "https://gameson24.in/game/cat-clicker",
      tags: ["Clicker", "Idle", "Popular"],
      rating: 4.7,
    },
    {
      title: "Pets Clicker",
      description:
        "🐾 Pets Clicker – Tap your way to an adorable pet empire! 🐶🐱 Click to collect cute pets, upgrade your collection, and unlock exciting boosts to grow faster. The more you click, the bigger your furry family becomes! 🐾💖",
      image:
        "https://img.gamemonetize.com/wf0watoy0w9b4vlwzhzb8tgmwrnfzrvw/512x384.jpg",
      link: "https://gameson24.in/game/pets-clicker",
      tags: ["Clicker", "Simulation", "Idle"],
      rating: 4.5,
    },
    {
      title: "Anime Girls Clicker",
      description:
        "🌸 Anime Girls Clicker – Tap to collect beautiful anime girls and build your ultimate waifu collection! 💖✨ Upgrade, unlock new characters, and boost your clicks to grow faster. The more you tap, the more stunning anime girls you discover! 🎀🎮",
      image:
        "https://img.gamemonetize.com/5lg1rd4h2odybdj4e0ewjwfdti0j6gqw/512x384.jpg",
      link: "https://gameson24.in/game/anime-girls-clicker",
      tags: ["Simulation", "Management", "Idle"],
      rating: 4.6,
    },
    {
      title: "Huggy Wuggy Clicker",
      description:
        "💙 Huggy Wuggy Clicker – Tap to collect Huggy Wuggy and his spooky friends! 👻💀 Upgrade your clicks, unlock creepy boosts, and build the ultimate Huggy empire. The more you tap, the scarier it gets! 😈🎮",
      image:
        "https://img.gamemonetize.com/ywlu2q50o0ckiat4i8uq2pj84kmcuwdc/512x384.jpg",
      link: "https://gameson24.in/game/huggy-wuggy-clicker",
      tags: ["AnimeAnime", "Story-driven", "Clicker"],
      rating: 4.8,
    },
    {
      title: "Attack On Waifu Clicker",
      description:
        "⚔️ Attack On Waifu Clicker – Tap to recruit powerful anime waifus and build your unstoppable army! 💖🔥 Upgrade your warriors, unlock epic boosts, and conquer the battlefield with every click. The more you tap, the stronger your waifu squad becomes! 🎮👑",
      image:
        "https://img.gamemonetize.com/3yby7v4i9yq7wfwarzi1w1kl0w60yv4z/512x384.jpg",
      link: "https://gameson24.in/game/attack-on-waifu-clicker",
      tags: ["Complex", "Clicker", "Humor"],
      rating: 4.7,
    },
    {
      title: "Squid Clicker 2",
      description:
        "🦑 Squid Clicker 2 – Click your way through intense challenges inspired by the ultimate survival game! 💰🔥 Earn cash, unlock risky upgrades, and see if you have what it takes to survive. The more you tap, the closer you get to fortune—or elimination! 🎮💀",
      image:
        "https://img.gamemonetize.com/e355f2bwx95nl2chh62wtg00ulvydcuo/512x384.jpg",
      link: "https://gameson24.in/game/squid-clicker-game-2",
      tags: ["Strategy", "Squid", "Clicker"],
      rating: 4.6,
    },
    {
      title: "Kittens Game",
      description:
        "🐱 Kittens Game – A deep and addictive incremental game where you guide a growing kitten civilization! 🌾🐾 Gather resources, build your village, and uncover ancient secrets as your feline empire expands. Every click leads to new discoveries! 🏡✨",
      image:
        "https://img.gamemonetize.com/thw4met3fb1mc1nl7nm504da85e13ahv/512x384.jpg",
      link: "https://gameson24.in/game/4gameground-kittens-coloring",
      tags: ["Text-based", "Resource Management", "Complex"],
      rating: 4.9,
    },
    {
      title: "Idle Breakout",
      description:
        "🧱 Idle Breakout – A next-level brick-breaking clicker! 🔥 Click to destroy bricks, unlock powerful balls, and upgrade your arsenal to break through faster. The more you play, the stronger you get—can you clear them all? 🎮💥",
      image:
        "https://img.gamemonetize.com/wfw6ef8v4w0y9jzwq4p1v9hzsv21g1ap/512x384.jpg",
      link: "https://gameson24.in/game/idle-ball-clicker-shooter",
      tags: ["Arcade", "Unique", "Simple"],
      rating: 4.4,
    },
  ];

  // Display only the first 4 games on mobile, all on larger screens
  const displayedGames = games.slice(0, 8);

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {displayedGames.map((game, index) => (
          <Card
            key={index}
            className="overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-md"
          >
            <div className="relative">
              <img
                src={game.image || "/placeholder.svg"}
                alt={game.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>{game.rating}</span>
              </div>
            </div>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-lg">{game.title}</CardTitle>
              <div className="flex flex-wrap gap-1 mt-1">
                {game.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-grow">
              <CardDescription className="text-sm">
                {game.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button asChild className="w-full">
                <Link
                  href={game.link}
                  className="flex items-center justify-center gap-1"
                >
                  Play Now <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Button variant="outline" asChild>
          <Link href="#">View All Similar Games</Link>
        </Button>
      </div>
    </div>
  );
}
