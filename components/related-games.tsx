import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Star, ExternalLink } from "lucide-react"

export function RelatedGames() {
  const games = [
    {
      title: "Clicker Heroes",
      description:
        "Click to defeat monsters, collect gold, and hire heroes in this popular idle RPG. Progress through zones, defeat bosses, and ascend to gain powerful bonuses.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
      tags: ["RPG", "Idle", "Popular"],
      rating: 4.7,
    },
    {
      title: "Adventure Capitalist",
      description:
        "Build a business empire from a single lemonade stand to oil companies and beyond. Invest in businesses, hire managers, and earn angel investors for powerful bonuses.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
      tags: ["Business", "Simulation", "Idle"],
      rating: 4.5,
    },
    {
      title: "Idle Miner Tycoon",
      description:
        "Manage and grow your mining operation from a small shaft to a mining empire. Hire managers, upgrade mines, and expand to new continents in this addictive idle game.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
      tags: ["Simulation", "Management", "Idle"],
      rating: 4.6,
    },
    {
      title: "Universal Paperclips",
      description:
        "Start as a paperclip-making AI and evolve into something much more powerful. This minimalist idle game has a surprising depth and narrative that unfolds as you progress.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
      tags: ["Minimalist", "Story-driven", "AI"],
      rating: 4.8,
    },
    {
      title: "NGU Idle",
      description:
        "Train your character, fight monsters, and unlock new features in this complex idle game with multiple progression systems and a quirky sense of humor.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
      tags: ["Complex", "RPG", "Humor"],
      rating: 4.7,
    },
    {
      title: "Realm Grinder",
      description:
        "Choose between good and evil factions, each with unique buildings and upgrades. This deep idle game features multiple reincarnation mechanics and hundreds of achievements.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
      tags: ["Strategy", "Fantasy", "Deep"],
      rating: 4.6,
    },
    {
      title: "Kittens Game",
      description:
        "Lead a village of kittens from the stone age to space exploration in this complex resource management idle game with no graphics but incredible depth.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
      tags: ["Text-based", "Resource Management", "Complex"],
      rating: 4.9,
    },
    {
      title: "Idle Breakout",
      description:
        "A unique blend of the classic Breakout game and idle mechanics. Place balls that automatically bounce and break bricks to earn points and upgrades.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
      tags: ["Arcade", "Unique", "Simple"],
      rating: 4.4,
    },
  ]

  // Display only the first 4 games on mobile, all on larger screens
  const displayedGames = games.slice(0, 8)

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {displayedGames.map((game, index) => (
          <Card
            key={index}
            className="overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-md"
          >
            <div className="relative">
              <img src={game.image || "/placeholder.svg"} alt={game.title} className="w-full h-48 object-cover" />
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
              <CardDescription className="text-sm">{game.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button asChild className="w-full">
                <Link href={game.link} className="flex items-center justify-center gap-1">
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
  )
}

