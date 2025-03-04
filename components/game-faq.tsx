"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function GameFAQ() {
  const [openItem, setOpenItem] = useState<string | null>("item-1")
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      id: "item-1",
      question: "What is Cookie Clicker?",
      answer:
        "Cookie Clicker is an incremental game created by Orteil (Julien Thiennot) in 2013. The goal is to bake as many cookies as possible by clicking on a giant cookie and purchasing various upgrades and buildings that automatically produce cookies for you. The game has no end goal, allowing for virtually infinite progression as you unlock new features and reach increasingly astronomical numbers of cookies.",
    },
    {
      id: "item-2",
      question: "Is Cookie Clicker free to play?",
      answer:
        "Yes, Cookie Clicker is completely free to play in your web browser. There are no in-app purchases or premium features in the web version. The game is supported by non-intrusive advertisements. There is also a premium version available on Steam for a one-time purchase that includes additional features and no advertisements.",
    },
    {
      id: "item-3",
      question: "How do I save my progress in Cookie Clicker?",
      answer:
        "Cookie Clicker automatically saves your progress to your browser's local storage every 60 seconds. However, it's a good idea to manually export your save occasionally by clicking on 'Options' and then 'Export save' to back up your progress. This generates a code you can copy and store elsewhere. To import a save, go to 'Options' > 'Import save' and paste your save code.",
    },
    {
      id: "item-4",
      question: "What are Golden Cookies?",
      answer:
        "Golden Cookies are special cookies that appear randomly on the screen. Clicking them gives you various temporary bonuses such as 'Lucky' (instant cookies equal to 15% of your current cookies or 15 minutes of production, whichever is less), 'Frenzy' (7x production for 77 seconds), or 'Click Frenzy' (777x clicking power for 13 seconds). Stacking these effects is key to maximizing your cookie production.",
    },
    {
      id: "item-5",
      question: "What is the Grandmapocalypse?",
      answer:
        "The Grandmapocalypse is a special game state triggered by purchasing specific research upgrades from the Bingo Center/Research Facility. It changes the appearance of the game and replaces Golden Cookies with Wrath Cookies, which can have both positive and negative effects. The Grandmapocalypse has three stages (Awakening, Displeased, and Angered) and introduces new gameplay mechanics like Wrinklers that consume your CpS but can be popped for extra cookies.",
    },
    {
      id: "item-6",
      question: "What are Heavenly Chips and how does Ascension work?",
      answer:
        "Heavenly Chips are a special currency earned when you reset your game (ascend). They're based on your total cookies baked all time and provide permanent boosts to your cookie production in future playthroughs. When you ascend, you lose all your cookies, buildings, and upgrades, but gain prestige levels that convert to Heavenly Chips. These can be spent on permanent upgrades in the Heavenly Bakery. Each prestige level gives +1% CpS in your next run.",
    },
    {
      id: "item-7",
      question: "Can I play Cookie Clicker offline?",
      answer:
        "The web version requires an internet connection, but there is an official Steam version available for purchase that can be played offline. Our embedded version requires an internet connection to play. If you want to play offline in a browser, you can export your save, then visit the Cookie Clicker website once while online, and it may work offline for some time afterward due to browser caching.",
    },
    {
      id: "item-8",
      question: "What are the different buildings in Cookie Clicker?",
      answer:
        "Cookie Clicker features numerous buildings that automatically produce cookies, including: Cursors, Grandmas, Farms, Mines, Factories, Banks, Temples, Wizard Towers, Shipments, Alchemy Labs, Portals, Time Machines, Antimatter Condensers, Prisms, Chancemakers, Fractal Engines, Javascript Consoles, Idleverses, Cortex Bakers, and You. Each building has its own CpS rate, upgrades, and synergies with other buildings.",
    },
    {
      id: "item-9",
      question: "What are mini-games in Cookie Clicker?",
      answer:
        "Mini-games are special interactive features unlocked by reaching level 1 with specific buildings and purchasing the corresponding upgrade. There are three main mini-games: the Garden (Farms), the Pantheon (Temples), and the Grimoire (Wizard Towers). Each offers unique mechanics that can significantly boost your cookie production when mastered.",
    },
    {
      id: "item-10",
      question: "How do I get started with Cookie Clicker?",
      answer:
        "To get started, simply click the big cookie to earn cookies. Use these cookies to buy your first Cursor and then Grandma. Continue clicking while purchasing more buildings and upgrades as they become available. Focus on clicking Golden Cookies whenever they appear. As you progress, you'll unlock new features and mechanics that add depth to the gameplay. The key is to balance immediate purchases with saving for more expensive, powerful upgrades.",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search FAQs..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem}>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))
        ) : (
          <p className="text-center py-4 text-muted-foreground">No FAQs match your search. Try different keywords.</p>
        )}
      </Accordion>
    </div>
  )
}

