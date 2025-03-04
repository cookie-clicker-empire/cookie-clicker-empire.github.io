export default function About() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          About Cookie Clicker Fan Site
        </h1>

        <div className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
            <p className="text-muted-foreground">
              Welcome to the Cookie Clicker Fan Site! We are a passionate
              community of Cookie Clicker enthusiasts dedicated to providing the
              best resources, guides, and information about this beloved idle
              game. Our journey began with a simple love for clicking cookies
              and has grown into a comprehensive platform for players of all
              levels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              Our mission is to create the most comprehensive and user-friendly
              resource for Cookie Clicker players. We strive to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>
                Provide accurate and up-to-date information about game mechanics
              </li>
              <li>
                Share strategies and tips to help players optimize their cookie
                production
              </li>
              <li>
                Build a friendly and supportive community of Cookie Clicker
                enthusiasts
              </li>
              <li>Create helpful tools and calculators for the game</li>
              <li>Document game updates and changes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-lg bg-muted">
                <h3 className="text-xl font-semibold mb-3">Game Resources</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Detailed game guides</li>
                  <li>• Achievement tracking</li>
                  <li>• Building calculators</li>
                  <li>• Strategy guides</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-muted">
                <h3 className="text-xl font-semibold mb-3">
                  Community Features
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Active Discord server</li>
                  <li>• Community forums</li>
                  <li>• Regular events</li>
                  <li>• News updates</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer</h2>
            <p className="text-muted-foreground">
              Cookie Clicker Fan Site is a fan-made website and is not
              affiliated with, endorsed by, or connected to Orteil (Julien
              Thiennot) or any official Cookie Clicker entities. All game
              content, trademarks, and intellectual property related to Cookie
              Clicker belong to their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              Have questions, suggestions, or feedback? We'd love to hear from
              you! Visit our Contact page to get in touch with our team.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
