"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_DATA = [
  {
    id: "item-1",
    question: "What is Cookie Clicker and how do I play it?",
    answer: `Cookie Clicker is a popular incremental game where you start by clicking a giant cookie to produce cookies. As you accumulate cookies, you can buy various buildings and upgrades that automatically produce cookies for you. The key features include:

    • Click the big cookie to earn cookies manually
    • Purchase buildings like Cursors, Grandmas, and Farms to produce cookies automatically
    • Buy upgrades to increase your production efficiency
    • Unlock achievements and discover hidden features
    • Use Golden Cookies for temporary boosts
    • Progress through different stages of the game, including the mysterious Grandmapocalypse`,
  },
  {
    id: "item-2",
    question: "How do I save my progress in Cookie Clicker?",
    answer: `Cookie Clicker automatically saves your progress in several ways:

    1. Auto-save: The game saves automatically every 60 seconds
    2. Browser storage: Progress is stored in your browser's local storage
    3. Manual save: Click 'Options' then 'Save' to save manually
    4. Export save: You can export your save code to:
       - Back up your progress
       - Transfer to another browser/device
       - Share with friends
    
    Pro tip: Export your save code regularly and keep it somewhere safe!`,
  },
  {
    id: "item-3",
    question: "What are Golden Cookies and how do they work?",
    answer: `Golden Cookies are special cookies that appear randomly on your screen and provide powerful temporary bonuses:

    • Frenzy: 7x cookie production for 77 seconds
    • Lucky: Instant cookies based on your current CpS
    • Click Frenzy: 777x clicking power for 13 seconds
    • Building Special: Massive boost to a specific building
    • Cookie Chain: Series of increasing rewards
    
    Strategy tip: Combine "Click Frenzy" with "Frenzy" for maximum cookie production!`,
  },
  {
    id: "item-4",
    question: "What is the Grandmapocalypse and should I trigger it?",
    answer: `The Grandmapocalypse is a special game phase that occurs when you purchase specific upgrades:

    1. Effects:
       • Changes the game's appearance
       • Introduces Wrath Cookies (red cookies)
       • Unlocks new achievements
       • Adds new upgrades and challenges
    
    2. Should you trigger it?
       Pros:
       • Access to new content and upgrades
       • Higher potential cookie production
       • Unique achievements
       
       Cons:
       • More dangerous Golden Cookie effects
       • More challenging gameplay
       • May slow down initial progress
    
    The choice is yours, but most experienced players recommend experiencing it at least once!`,
  },
  {
    id: "item-5",
    question: "What are the best strategies for beginners?",
    answer: `Here are essential tips for new Cookie Clicker players:

    1. Early Game (0-1 hour):
       • Click manually until you can buy your first Cursor
       • Buy Cursors and Grandmas first
       • Always click Golden Cookies
    
    2. Mid Game (1-24 hours):
       • Focus on highest CpS buildings you can afford
       • Save up for important upgrades
       • Start using the "Buy 10" feature
    
    3. General Tips:
       • Keep buildings balanced (buy in multiples of 10)
       • Prioritize achievements for milk bonuses
       • Use keyboard shortcuts (Ctrl+Click for buying 10)
       • Don't ascend too early (wait for 440 prestige)`,
  },
  {
    id: "item-6",
    question: "What are Heavenly Chips and when should I Ascend?",
    answer: `Heavenly Chips are the game's prestige currency, earned through Ascending:

    1. How to get them:
       • Earned based on total cookies baked
       • Convert to Heavenly Chips upon Ascending
       • Used to buy permanent upgrades
    
    2. When to Ascend:
       First Ascension:
       • Wait for 440 chips (recommended)
       • Takes about 2-3 days of active play
       
       Later Ascensions:
       • When doubling your current chips
       • When you can afford desired upgrades
       
    3. Best First Purchases:
       • Twin Gates of Transcendence
       • Permanent Upgrade Slot I
       • Divine Discount
       • Heavenly Cookies`,
  },
  {
    id: "item-7",
    question: "How do I unlock all achievements efficiently?",
    answer: `Achievement hunting strategy guide:

    1. Production Achievements:
       • Focus on round numbers (100, 200, etc.)
       • Keep buildings balanced
       • Use Golden Cookie combos
    
    2. Special Achievements:
       • Click Golden Cookies consistently
       • Participate in seasonal events
       • Try different Grandmapocalypse stages
    
    3. Shadow Achievements:
       • These are extra challenging
       • Don't count toward milk
       • Include cheating achievements
       • Best saved for late game
    
    Pro tip: Use the Stats menu to track missing achievements!`,
  },
  {
    id: "item-8",
    question: "What are seasonal events and how do they work?",
    answer: `Seasonal events add special content during different "seasons":

    1. Available Seasons:
       • Christmas
       • Halloween
       • Valentine's Day
       • Easter
       • Business Day
    
    2. How to Access:
       • Buy Season Switcher upgrade
       • Each season costs cookies to switch
       • Can only have one active at a time
    
    3. Benefits:
       • Unique upgrades
       • Special cookies/items
       • Exclusive achievements
       • Additional gameplay mechanics
    
    Strategy: Complete one season at a time for maximum efficiency!`,
  },
  {
    id: "item-9",
    question: "How do mini-games work and which buildings unlock them?",
    answer: `Mini-games add extra gameplay mechanics to certain buildings:

    1. Grimoire (Wizard Towers):
       • Cast spells for various effects
       • Manage magic meter
       • Combine with Golden Cookies
    
    2. Garden (Farms):
       • Grow different plants
       • Cross-breed for new species
       • Harvest special effects
    
    3. Stock Market (Banks):
       • Trade cookie stocks
       • Predict market movements
       • Earn extra cookies
    
    4. Pantheon (Temples):
       • Assign gods for bonuses
       • Manage slots and powers
       • Strategic deity rotation`,
  },
  {
    id: "item-10",
    question:
      "What are some advanced techniques for maximizing cookie production?",
    answer: `Advanced strategies for experienced players:

    1. Golden Cookie Combos:
       • Building Special + Click Frenzy + Frenzy (Most powerful)
       • Dragon Harvest + Elder Frenzy
       • Godzamok + Click Frenzy
       • Building Special + Dragon Harvest
    
    2. Building Optimization:
       • Keep buildings in multiples of 50
       • Focus on highest CpS/cost ratio
       • Use calculator for efficiency
       • Time purchases with Frenzy
    
    3. Mini-game Mastery:
       Garden:
       • Queenbeet farming for sugar lumps
       • JQB setup for maximum gains
       • Bakeberry during Frenzy
       
       Pantheon:
       • Godzamok + Mokalsium + Muridal (clicking)
       • Holobore + Jeremy + Mokalsium (idle)
       
       Grimoire:
       • Force the Hand of Fate timing
       • Spell combo calculations
       • Mana regeneration tricks
    
    4. Advanced Techniques:
       Click Optimization:
       • Auto-clicker positioning
       • Click timing with buffs
       • Cursor synergy
       
       Building Strategy:
       • Cascading purchases
       • Synergy optimization
       • Cost/benefit analysis
       
       Ascension Planning:
       • Strategic prestige timing
       • Heavenly upgrade order
       • Challenge run preparation
    
    5. End-game Optimization:
       • Perfect idle setup
       • Maximum clicking setup
       • Hybrid strategies
       • Speed run techniques`,
  },
  {
    id: "item-11",
    question: "How do I progress through different stages of Cookie Clicker?",
    answer: `Complete Cookie Clicker progression guide from early to end game:

    1. Early Game (0-1 hour):
       • Goal: Reach 1 million cookies per second (CpS)
       • Focus on clicking and basic buildings
       • Key Buildings: Cursors, Grandmas, Farms
       • Important: Click every Golden Cookie
       • Target: Get 100 of each basic building
    
    2. Mid-Early Game (1-4 hours):
       • Goal: Reach 1 billion CpS
       • Start buying more expensive buildings
       • Unlock your first achievements
       • Begin using keyboard shortcuts
       • Start thinking about upgrades strategy
    
    3. Mid Game (4-24 hours):
       • Goal: Prepare for first Ascension
       • Target: 440+ Heavenly Chips
       • Focus on achievement hunting
       • Start exploring Grandmapocalypse
       • Optimize Golden Cookie hunting
    
    4. Late-Mid Game (2-7 days):
       • Goal: Master all basic mechanics
       • Unlock all main buildings
       • Complete seasonal events
       • Start using mini-games
       • Plan Ascension upgrades
    
    5. Early Late Game (1-2 weeks):
       • Goal: Reach quadrillions CpS
       • Master Garden mini-game
       • Optimize Pantheon rotation
       • Perfect Golden Cookie combos
       • Start sugar lump strategy
    
    6. Late Game (2-4 weeks):
       • Goal: Unlock most achievements
       • Perfect Stock Market strategies
       • Master all mini-games
       • Complex building strategies
       • Krumblor optimization
    
    7. End Game (1+ months):
       • Goal: Complete everything
       • Hunt shadow achievements
       • Perfect garden setups
       • Maximum efficiency builds
       • Challenge runs
    
    Pro Tips for Each Stage:
    
    Early Game:
    • Never stop clicking until you have 2-3 Cursors
    • Buy cheapest available building always
    • Click Golden Cookies immediately
    
    Mid-Early Game:
    • Start using "Buy 10" feature
    • Balance building costs
    • Save for key upgrades
    
    Mid Game:
    • Start planning Ascension
    • Focus on achievement milestones
    • Begin Grandmapocalypse carefully
    
    Late-Mid Game:
    • Master Golden Cookie timing
    • Complete seasonal events
    • Start optimizing building ratios
    
    Early Late Game:
    • Perfect combo strategies
    • Optimize mini-game usage
    • Plan long-term sugar lump use
    
    Late Game:
    • Complex combo strategies
    • Maximum efficiency builds
    • Achievement hunting
    
    End Game:
    • Speed run strategies
    • Challenge completion
    • Perfect optimization`,
  },
  {
    id: "item-12",
    question: "Can I play Cookie Clicker offline?",
    answer: `The web version requires an internet connection, but there are several options for playing:

    1. Online Web Version (Free):
       • Requires internet connection
       • Auto-saves to browser
       • No download required
       • Access to all basic features
    
    2. Steam Version (Paid):
       • Can be played offline
       • Additional features
       • Cloud save support
       • No advertisements
    
    3. Mobile Version:
       • Available for iOS/Android
       • Different gameplay mechanics
       • Touch-optimized interface
       • Some exclusive features
    
    Note: Our embedded version requires an internet connection to play. For offline play, we recommend the Steam version.`,
  },
];

export function GameFAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItem, setOpenItem] = useState<string | undefined>("item-1");

  const filteredFaqs = FAQ_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      <Accordion
        type="single"
        collapsible
        value={openItem}
        onValueChange={setOpenItem}
      >
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="whitespace-pre-line text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))
        ) : (
          <p className="text-center py-4 text-muted-foreground">
            No FAQs match your search. Try different keywords.
          </p>
        )}
      </Accordion>
    </div>
  );
}
