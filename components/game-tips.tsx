import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LightbulbIcon, TrendingUp, MousePointer, Clock, Target, Sparkles, BarChart, Calculator } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function GameTips() {
  const beginnerTips = [
    {
      icon: <MousePointer className="h-5 w-5 text-blue-500" />,
      title: "Click Golden Cookies",
      content:
        "Golden cookies appear randomly and provide temporary boosts. Always try to click them for massive production bonuses like 'Frenzy' or 'Lucky'. These can multiply your production by 7x or give you 15 minutes worth of cookies instantly.",
    },
    {
      icon: <Clock className="h-5 w-5 text-amber-500" />,
      title: "Be Patient with Expensive Buildings",
      content:
        "Don't rush to buy the most expensive buildings right away. Sometimes it's better to save up for upgrades that boost your existing buildings. A good rule of thumb is to buy buildings when they cost less than 10-15% of your current cookie count.",
    },
    {
      icon: <Target className="h-5 w-5 text-red-500" />,
      title: "Aim for Achievement Milestones",
      content:
        "Achievements not only track your progress but also contribute to your milk percentage, which provides passive bonuses to your cookie production. Try to unlock achievements whenever possible to maximize these bonuses.",
    },
    {
      icon: <LightbulbIcon className="h-5 w-5 text-yellow-500" />,
      title: "Use Keyboard Shortcuts",
      content:
        "Hold Ctrl while clicking a building to buy 10 at once, or Shift to buy 100. This saves time when you're making bulk purchases. You can also press Ctrl+S to manually save your game at any time.",
    },
  ]

  const intermediateTips = [
    {
      icon: <TrendingUp className="h-5 w-5 text-green-500" />,
      title: "Focus on CpS (Cookies per Second)",
      content:
        "The key to success in Cookie Clicker is maximizing your CpS. Always prioritize upgrades and buildings that give the biggest boost to your cookie production rate. Use the in-game statistics to compare the CpS increase per cookie spent.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-purple-500" />,
      title: "Understand the Grandmapocalypse",
      content:
        "Research upgrades in the Bingo Center will eventually trigger the Grandmapocalypse, changing the game dynamics with Wrath Cookies. These can have negative effects but also offer unique rewards like Elder Frenzies that multiply production by 666x.",
    },
    {
      icon: <BarChart className="h-5 w-5 text-indigo-500" />,
      title: "Plan Your Ascensions",
      content:
        "Once you've accumulated enough cookies, you can ascend to gain Heavenly Chips and permanent upgrades. A good first ascension is around 440 prestige levels (about 1 trillion cookies baked all time). Each subsequent ascension should at least double your prestige level.",
    },
    {
      icon: <Calculator className="h-5 w-5 text-orange-500" />,
      title: "Optimize Building Ratios",
      content:
        "Different buildings have different synergies. For example, Cursors gain bonuses based on non-cursor buildings owned. Try to maintain a balanced ratio of buildings to maximize these synergy effects, especially after unlocking synergy upgrades.",
    },
  ]

  const advancedTips = [
    {
      icon: <Sparkles className="h-5 w-5 text-pink-500" />,
      title: "Golden Cookie Combos",
      content:
        "The most powerful strategy is chaining Golden Cookie effects. Wait for a 'Building Special' + 'Click Frenzy' + 'Frenzy' combo for astronomical cookie production. Use the 'Force the Hand of Fate' spell from the Grimoire to help create these combos.",
    },
    {
      icon: <Target className="h-5 w-5 text-cyan-500" />,
      title: "Garden Strategy",
      content:
        "Once unlocked, the Garden mini-game offers powerful plant effects. Focus on growing Queenbeets for sacrifice, or create a garden of Whiskerbloom and Nursetulip to boost your milk effects and CpS significantly.",
    },
    {
      icon: <BarChart className="h-5 w-5 text-emerald-500" />,
      title: "Stock Market Optimization",
      content:
        "In the Stock Market mini-game, buy low and sell high. Look for cyclical patterns in stock prices and invest accordingly. The most profitable approach is to buy when stocks are below 10 dollars and sell when they rise above 60.",
    },
    {
      icon: <Calculator className="h-5 w-5 text-violet-500" />,
      title: "Krumblor Aura Selection",
      content:
        "For the Dragon, the most powerful auras are 'Radiant Appetite' (doubles CpS) and 'Dragon's Fortune' (+123% CpS when golden cookies are present). Once you have two aura slots, this combination provides exceptional production boosts.",
    },
  ]

  return (
    <Tabs defaultValue="beginner" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="beginner">Beginner Tips</TabsTrigger>
        <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
      </TabsList>
      <TabsContent value="beginner" className="mt-4">
        <div className="space-y-4">
          {beginnerTips.map((tip, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {tip.icon}
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tip.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="intermediate" className="mt-4">
        <div className="space-y-4">
          {intermediateTips.map((tip, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {tip.icon}
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tip.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="advanced" className="mt-4">
        <div className="space-y-4">
          {advancedTips.map((tip, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {tip.icon}
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tip.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

