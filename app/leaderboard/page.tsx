export default function Leaderboard() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Cookie Clicker Leaderboard</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              All-Time Top Players
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4">Rank</th>
                    <th className="text-left py-4 px-4">Player</th>
                    <th className="text-left py-4 px-4">Total Cookies</th>
                    <th className="text-left py-4 px-4">Prestige Level</th>
                    <th className="text-left py-4 px-4">Achievements</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      rank: 1,
                      player: "CookieMaster",
                      cookies: "999.999 Quadrillion",
                      prestige: 1000,
                      achievements: 100,
                    },
                    {
                      rank: 2,
                      player: "GrandmaPro",
                      cookies: "888.888 Quadrillion",
                      prestige: 950,
                      achievements: 98,
                    },
                    {
                      rank: 3,
                      player: "ClickKing",
                      cookies: "777.777 Quadrillion",
                      prestige: 900,
                      achievements: 95,
                    },
                    {
                      rank: 4,
                      player: "CookieWizard",
                      cookies: "666.666 Quadrillion",
                      prestige: 850,
                      achievements: 92,
                    },
                    {
                      rank: 5,
                      player: "BakeryBoss",
                      cookies: "555.555 Quadrillion",
                      prestige: 800,
                      achievements: 90,
                    },
                  ].map((player) => (
                    <tr key={player.rank} className="border-b">
                      <td className="py-4 px-4">#{player.rank}</td>
                      <td className="py-4 px-4">{player.player}</td>
                      <td className="py-4 px-4">{player.cookies}</td>
                      <td className="py-4 px-4">{player.prestige}</td>
                      <td className="py-4 px-4">{player.achievements}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Weekly Champions</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  position: "1st Place",
                  player: "SpeedClicker",
                  cookies: "100 Quadrillion",
                  icon: "🥇",
                },
                {
                  position: "2nd Place",
                  player: "CookieNinja",
                  cookies: "90 Quadrillion",
                  icon: "🥈",
                },
                {
                  position: "3rd Place",
                  player: "BakingPro",
                  cookies: "80 Quadrillion",
                  icon: "🥉",
                },
              ].map((winner) => (
                <div
                  key={winner.position}
                  className="p-6 rounded-lg bg-muted text-center"
                >
                  <div className="text-4xl mb-2">{winner.icon}</div>
                  <div className="font-semibold">{winner.position}</div>
                  <div className="text-lg font-bold mt-2">{winner.player}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {winner.cookies} cookies
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Hall of Fame</h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Fastest to 1 Quadrillion",
                  player: "SpeedRunner",
                  time: "2 hours 15 minutes",
                  date: "2024-02-15",
                },
                {
                  title: "Most Golden Cookies Clicked",
                  player: "LuckyCharm",
                  amount: "9,999",
                  date: "2024-02-10",
                },
                {
                  title: "Highest CPS",
                  player: "AutoClicker",
                  amount: "999.99 Trillion/sec",
                  date: "2024-02-05",
                },
              ].map((record) => (
                <div
                  key={record.title}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted"
                >
                  <div>
                    <h3 className="font-semibold">{record.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      by {record.player} on {record.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-mono">
                      {record.time || record.amount}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
