export default function Blog() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Cookie Clicker Blog</h1>

        <div className="space-y-12">
          <article className="grid gap-8 md:grid-cols-[2fr,1fr]">
            <div>
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Featured blog post"
                className="w-full h-[300px] object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-bold mb-4">
                Ultimate Guide to Late Game Strategy
              </h2>
              <p className="text-muted-foreground mb-4">
                Master the art of cookie production with our comprehensive guide
                to late-game optimization. Learn about the best building
                combinations, upgrade priorities, and golden cookie strategies.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  March 1, 2024
                </div>
                <div className="text-sm text-muted-foreground">15 min read</div>
                <div className="text-sm text-primary">Strategy Guide</div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-semibold">In This Article</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Building Priority Order
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Upgrade Combinations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Golden Cookie Timing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Prestige Strategy
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "Beginner's Guide to Cookie Clicker",
                excerpt:
                  "New to Cookie Clicker? Start here with our comprehensive guide for beginners.",
                date: "February 28, 2024",
                readTime: "10 min read",
                category: "Guides",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Hidden Achievements Revealed",
                excerpt:
                  "Discover all the secret achievements and how to unlock them in Cookie Clicker.",
                date: "February 25, 2024",
                readTime: "8 min read",
                category: "Tips & Tricks",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "The Math Behind Cookie Production",
                excerpt:
                  "Deep dive into the mathematical formulas that power Cookie Clicker's mechanics.",
                date: "February 20, 2024",
                readTime: "12 min read",
                category: "Analysis",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Community Spotlight: Best Strategies",
                excerpt:
                  "Top players share their strategies and tips for maximizing cookie production.",
                date: "February 15, 2024",
                readTime: "7 min read",
                category: "Community",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((post) => (
              <article key={post.title} className="group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-muted-foreground">
                    {post.date}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {post.readTime}
                  </div>
                  <div className="text-sm text-primary">{post.category}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-6">
            <h2 className="text-2xl font-semibold">Recent News</h2>
            {[
              {
                title: "New Update Coming Soon",
                excerpt:
                  "Get ready for the biggest Cookie Clicker update yet! Preview of new features and changes.",
                date: "March 2, 2024",
              },
              {
                title: "Community Event: Cookie Baking Championship",
                excerpt:
                  "Join our monthly competition to see who can bake the most cookies in 24 hours.",
                date: "March 1, 2024",
              },
              {
                title: "Interview with Top Player",
                excerpt:
                  "Learn the secrets of success from one of Cookie Clicker's most accomplished players.",
                date: "February 29, 2024",
              },
            ].map((news) => (
              <div
                key={news.title}
                className="p-6 rounded-lg bg-muted hover:bg-muted/80"
              >
                <h3 className="font-bold mb-2">{news.title}</h3>
                <p className="text-muted-foreground mb-2">{news.excerpt}</p>
                <div className="text-sm text-muted-foreground">{news.date}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
              Load More Posts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
