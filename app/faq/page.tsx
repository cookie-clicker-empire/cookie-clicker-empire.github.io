export default function FAQ() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
            <div className="space-y-6">
              {[
                {
                  question: "What is Cookie Clicker?",
                  answer:
                    "Cookie Clicker is an incremental game created by Orteil where you start by clicking a big cookie to produce cookies. As you get more cookies, you can buy buildings and upgrades that automatically produce cookies for you. The game features various mechanics like achievements, prestige system, and mini-games.",
                },
                {
                  question: "How do I start playing?",
                  answer:
                    "Simply click on the 'Play Game' button on our homepage. The game runs directly in your browser - no download required. Start by clicking the big cookie, and use your earned cookies to buy buildings and upgrades.",
                },
                {
                  question: "How do I save my progress?",
                  answer:
                    "The game automatically saves your progress to your browser's local storage. However, it's recommended to manually export your save occasionally by clicking the 'Options' menu and selecting 'Export save'. This gives you a code you can use to restore your progress later.",
                },
              ].map((item) => (
                <div
                  key={item.question}
                  className="p-6 rounded-lg bg-muted space-y-3"
                >
                  <h3 className="font-semibold">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Game Mechanics</h2>
            <div className="space-y-6">
              {[
                {
                  question: "What are Golden Cookies?",
                  answer:
                    "Golden Cookies are special cookies that appear randomly during gameplay. Clicking them grants various temporary effects like multiplied cookie production, instant cookie rewards, or special combinations of effects. They're crucial for maximizing your cookie production.",
                },
                {
                  question: "How does the Prestige system work?",
                  answer:
                    "When you have enough cookies, you can 'ascend', which resets your progress but gives you prestige levels and heavenly chips. These can be spent on permanent upgrades that make future playthroughs more powerful. The more cookies you have when ascending, the more heavenly chips you receive.",
                },
                {
                  question: "What are Grandmapocalypse and Wrinklers?",
                  answer:
                    "The Grandmapocalypse is a special game state triggered by buying specific upgrades. It changes the game's appearance and introduces Wrinklers - creatures that reduce your CpS but store cookies that can be collected by popping them. They can actually increase your overall cookie production.",
                },
              ].map((item) => (
                <div
                  key={item.question}
                  className="p-6 rounded-lg bg-muted space-y-3"
                >
                  <h3 className="font-semibold">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Tips & Strategy</h2>
            <div className="space-y-6">
              {[
                {
                  question: "What's the best way to earn cookies quickly?",
                  answer:
                    "Focus on buying the most efficient buildings and upgrades first. Use the 'Buy 10' option when it becomes available. Take advantage of Golden Cookie effects, especially 'Frenzy' combined with 'Click Frenzy'. Join active communities to learn advanced strategies.",
                },
                {
                  question: "When should I ascend?",
                  answer:
                    "For your first ascension, it's recommended to wait until you have at least 440 prestige levels (about 1 trillion cookies baked all time). After that, you might want to ascend when it would take too long to reach your next meaningful upgrade.",
                },
                {
                  question: "Which buildings should I prioritize?",
                  answer:
                    "Early game, focus on Cursors and Grandmas. Mid-game, Farms through Banks are efficient. Late-game, Temples and Wizard Towers become more important. Always check the efficiency (cookies per second per cookie spent) when deciding what to buy next.",
                },
              ].map((item) => (
                <div
                  key={item.question}
                  className="p-6 rounded-lg bg-muted space-y-3"
                >
                  <h3 className="font-semibold">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Technical Issues</h2>
            <div className="space-y-6">
              {[
                {
                  question: "My game isn't saving, what should I do?",
                  answer:
                    "First, make sure your browser allows local storage and cookies. Try clearing your browser cache. If issues persist, use the export save feature regularly to back up your progress. You can also try using a different browser.",
                },
                {
                  question: "The game is running slowly, how can I fix it?",
                  answer:
                    "Try closing other browser tabs and applications. You can also reduce particles and fancy graphics in the game options. For very late-game saves, try using the 'Low-quality mode' option.",
                },
                {
                  question: "How do I transfer my save to another device?",
                  answer:
                    "Use the 'Export save' option to get your save code. Copy this code and use the 'Import save' option on your other device. Make sure to back up your save before importing to avoid losing progress.",
                },
              ].map((item) => (
                <div
                  key={item.question}
                  className="p-6 rounded-lg bg-muted space-y-3"
                >
                  <h3 className="font-semibold">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="p-6 rounded-lg bg-muted">
            <h2 className="text-xl font-semibold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for? Check out our community
              forums or contact us directly.
            </p>
            <div className="flex gap-4">
              <a
                href="/contact"
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Contact Us
              </a>
              <a
                href="https://discord.gg/cookieclicker"
                className="px-4 py-2 rounded-md bg-muted hover:bg-muted/80 border"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
