export default function Updates() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Cookie Clicker Updates</h1>

        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-semibold">Version 2.052 (Latest)</h2>
              <span className="px-2 py-1 text-xs rounded-full bg-primary text-primary-foreground">
                Latest
              </span>
            </div>
            <div className="prose max-w-none">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">New Features</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Added new heavenly upgrade: "Divine discount"</li>
                    <li>Introduced 3 new achievements</li>
                    <li>Added new building: "Fractal engine"</li>
                    <li>New golden cookie sound effects</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Improvements</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Optimized performance for late-game players</li>
                    <li>Updated visual effects for critical clicks</li>
                    <li>Improved building tooltips</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Bug Fixes</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Fixed golden cookie spawn rate calculation</li>
                    <li>Corrected achievement unlock conditions</li>
                    <li>Fixed visual glitch with grandma animations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Version 2.051</h2>
            <div className="prose max-w-none">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">New Features</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Added new upgrade tier for all buildings</li>
                    <li>Introduced seasonal events system</li>
                    <li>Added achievement tracking page</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Improvements</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Rebalanced prestige gains</li>
                    <li>Updated UI for better mobile experience</li>
                    <li>Improved save system reliability</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Version 2.050</h2>
            <div className="prose max-w-none">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Major Changes</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Complete game engine rewrite for better performance</li>
                    <li>Added new prestige system</li>
                    <li>Introduced mini-games for buildings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Balance Changes
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Adjusted building costs and production rates</li>
                    <li>Rebalanced achievement requirements</li>
                    <li>Modified golden cookie effects</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center">
            <button className="px-6 py-3 rounded-md bg-muted hover:bg-muted/80">
              Load More Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
