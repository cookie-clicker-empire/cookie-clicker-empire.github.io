export default function Achievements() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Cookie Clicker Achievements</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Cookie Production</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  name: "Wake and bake",
                  description: "Bake 1 cookie in one ascension",
                  icon: "🍪",
                },
                {
                  name: "Making some dough",
                  description: "Bake 1,000 cookies in one ascension",
                  icon: "🥯",
                },
                {
                  name: "Cookie factory",
                  description: "Bake 100,000 cookies in one ascension",
                  icon: "🏭",
                },
                {
                  name: "Cookie monster",
                  description: "Bake 1,000,000 cookies in one ascension",
                  icon: "👾",
                },
              ].map((achievement) => (
                <div
                  key={achievement.name}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted"
                >
                  <div className="text-2xl">{achievement.icon}</div>
                  <div>
                    <h3 className="font-semibold">{achievement.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Buildings</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  name: "Cursor clickin' good",
                  description: "Have 10 cursors",
                  icon: "👆",
                },
                {
                  name: "Grandma's cookies",
                  description: "Have 10 grandmas",
                  icon: "👵",
                },
                {
                  name: "Farm fresh",
                  description: "Have 10 farms",
                  icon: "🌾",
                },
                {
                  name: "Mine craft",
                  description: "Have 10 mines",
                  icon: "⛏️",
                },
              ].map((achievement) => (
                <div
                  key={achievement.name}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted"
                >
                  <div className="text-2xl">{achievement.icon}</div>
                  <div>
                    <h3 className="font-semibold">{achievement.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Special Events</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  name: "Golden cookie",
                  description: "Click 1 golden cookie",
                  icon: "✨",
                },
                {
                  name: "Lucky day",
                  description: "Click 7 golden cookies",
                  icon: "🍀",
                },
                {
                  name: "Fortune cookie",
                  description: "Click 77 golden cookies",
                  icon: "🥠",
                },
                {
                  name: "Jackpot",
                  description: "Click 777 golden cookies",
                  icon: "🎰",
                },
              ].map((achievement) => (
                <div
                  key={achievement.name}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted"
                >
                  <div className="text-2xl">{achievement.icon}</div>
                  <div>
                    <h3 className="font-semibold">{achievement.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Prestige</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  name: "Reborn",
                  description: "Ascend for the first time",
                  icon: "🔄",
                },
                {
                  name: "Sacrifice",
                  description: "Ascend with 100 prestige",
                  icon: "📈",
                },
                {
                  name: "Eternal",
                  description: "Ascend with 1,000 prestige",
                  icon: "⭐",
                },
                {
                  name: "Immortal",
                  description: "Ascend with 10,000 prestige",
                  icon: "👑",
                },
              ].map((achievement) => (
                <div
                  key={achievement.name}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted"
                >
                  <div className="text-2xl">{achievement.icon}</div>
                  <div>
                    <h3 className="font-semibold">{achievement.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
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
