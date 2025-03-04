import Link from "next/link";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const ALL_GAMES = [
  {
    title: "Pizza Clicker Tycoon",
    description:
      "Build your pizza empire from a small shop to a global chain. Upgrade your kitchen, hire staff, and discover new recipes!",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Business Sim",
    rating: 4.7,
    players: "2M+",
  },
  {
    title: "Pets Clicker",
    description:
      "Collect and raise adorable virtual pets. Feed them, play with them, and watch them grow!",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Pet Simulation",
    rating: 4.8,
    players: "3M+",
  },
  {
    title: "Huggy Wuggy Clicker",
    description:
      "Join Huggy Wuggy in this spooky clicker adventure. Collect toys and unlock scary surprises!",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Horror Clicker",
    rating: 4.6,
    players: "1.5M+",
  },
  {
    title: "Anime Girls Clicker",
    description:
      "Collect your favorite anime characters and build your ultimate waifu collection!",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Anime",
    rating: 4.9,
    players: "4M+",
  },
  {
    title: "Attack On Waifu Clicker",
    description:
      "Defend your city with cute anime warriors. Upgrade your defenses and collect rare characters!",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Anime Action",
    rating: 4.7,
    players: "2.5M+",
  },
  {
    title: "Animal Clicker",
    description:
      "Create your own wildlife sanctuary. Collect different species and help them thrive!",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Animal Sim",
    rating: 4.5,
    players: "1.8M+",
  },
  {
    title: "Squid Clicked 2",
    description:
      "The sequel to the viral sensation! Play mini-games and survive increasingly challenging levels.",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Action Clicker",
    rating: 4.8,
    players: "5M+",
  },
  {
    title: "Clicker Heroes",
    description:
      "Battle monsters and level up heroes in this addictive idle RPG",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Idle RPG",
    rating: 4.8,
    players: "1M+",
  },
  {
    title: "Adventure Capitalist",
    description:
      "Build a business empire from lemonade stands to moon colonies",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Business Sim",
    rating: 4.7,
    players: "5M+",
  },
  {
    title: "Idle Miner Tycoon",
    description:
      "Manage and expand your mining operation in this idle simulation",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Management",
    rating: 4.6,
    players: "10M+",
  },
  {
    title: "NGU Idle",
    description:
      "Train stats, fight bosses, and unlock new features in this complex idle game",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Complex Idle",
    rating: 4.9,
    players: "500K+",
  },
  {
    title: "Realm Grinder",
    description:
      "Choose your faction and build your realm in this strategic idle game",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Strategy Idle",
    rating: 4.7,
    players: "2M+",
  },
  {
    title: "Antimatter Dimensions",
    description:
      "Generate antimatter and unlock dimensions in this mathematical idle game",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Mathematical",
    rating: 4.8,
    players: "1.5M+",
  },
  {
    title: "Idle Champions",
    description: "Lead a party of D&D heroes through epic adventures",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "RPG",
    rating: 4.6,
    players: "3M+",
  },
  {
    title: "Melvor Idle",
    description:
      "Train skills and complete quests in this RuneScape-inspired idle game",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "RPG",
    rating: 4.9,
    players: "1M+",
  },
  {
    title: "Idle Slayer",
    description:
      "Slay monsters and collect souls in this action-packed idle game",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Action Idle",
    rating: 4.7,
    players: "2.5M+",
  },
  {
    title: "Eggs, Inc.",
    description:
      "Build the ultimate chicken farm empire in this quirky idle game",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Simulation",
    rating: 4.8,
    players: "5M+",
  },
  {
    title: "Idle Factory Tycoon",
    description:
      "Manage and optimize your factories in this industrial idle game",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Management",
    rating: 4.5,
    players: "3M+",
  },
  {
    title: "Idle Research",
    description:
      "Conduct research and make scientific discoveries in this educational idle game",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
    category: "Educational",
    rating: 4.6,
    players: "800K+",
  },
];

export function RelatedGames() {
  const [showAll, setShowAll] = useState(false);
  const displayedGames = showAll ? ALL_GAMES : ALL_GAMES.slice(0, 12);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedGames.map((game) => (
          <Link
            key={game.title}
            href={game.url}
            className="group relative overflow-hidden rounded-lg border bg-card transition-colors hover:bg-accent"
          >
            <div className="aspect-[3/2]">
              <img
                src={game.image}
                alt={game.title}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground">
                  {game.category}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-medium text-yellow-500">★</span>
                  <span className="text-xs font-medium">{game.rating}</span>
                </div>
              </div>
              <h3 className="font-semibold group-hover:text-primary">
                {game.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                {game.description}
              </p>
              <div className="mt-2 text-xs text-muted-foreground">
                {game.players} players
              </div>
            </div>
          </Link>
        ))}
      </div>

      {ALL_GAMES.length > 12 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            {showAll ? "Show Less" : "View All Similar Games"}
            <ChevronRight
              className={`h-4 w-4 transition-transform ${
                showAll ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>
      )}
    </div>
  );
}
