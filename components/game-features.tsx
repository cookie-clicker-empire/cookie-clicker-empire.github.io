import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cookie, Building, Award, Sparkles, Clock, Zap, Layers, Cpu } from "lucide-react"

export function GameFeatures() {
  const features = [
    {
      icon: <Cookie className="h-8 w-8 text-amber-500" />,
      title: "Click to Bake",
      description:
        "Start by clicking the giant cookie to produce cookies. Each click counts! As you progress, your clicks become more powerful through upgrades.",
      color: "bg-amber-500",
    },
    {
      icon: <Building className="h-8 w-8 text-blue-500" />,
      title: "Build Your Empire",
      description:
        "Purchase buildings like cursors, grandmas, farms, and factories to automate cookie production. Each building type has unique upgrades and synergies.",
      color: "bg-blue-500",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Unlock Achievements",
      description:
        "Earn over 300 achievements as you reach milestones and discover secrets. Achievements contribute to your milk percentage, providing passive production bonuses.",
      color: "bg-purple-500",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-yellow-500" />,
      title: "Special Upgrades",
      description:
        "Discover and purchase special upgrades to boost your cookie production exponentially. From simple improvements to game-changing enhancements, there's always something new.",
      color: "bg-yellow-500",
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: "Idle Gameplay",
      description:
        "Let the game run in the background while your buildings automatically produce cookies. Return later to find mountains of cookies waiting for you to spend.",
      color: "bg-green-500",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-500" />,
      title: "Golden Cookies",
      description:
        "Click on golden cookies for temporary boosts and special effects. Chain these effects for massive production multipliers that can skyrocket your cookie count.",
      color: "bg-red-500",
    },
    {
      icon: <Layers className="h-8 w-8 text-orange-500" />,
      title: "Prestige System",
      description:
        "Ascend to reset your progress but gain permanent benefits through Heavenly Chips and upgrades. Each ascension makes your next run more powerful.",
      color: "bg-orange-500",
    },
    {
      icon: <Cpu className="h-8 w-8 text-indigo-500" />,
      title: "Mini-Games",
      description:
        "Unlock mini-games for each building type as you progress. From the stock market to gardening, these add layers of strategy to optimize your cookie production.",
      color: "bg-indigo-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Card key={index} className="overflow-hidden">
          <div className={`h-1 w-full ${feature.color}`}></div>
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="rounded-full bg-muted p-2 flex items-center justify-center">{feature.icon}</div>
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm">{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

