export default function Contact() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

        <div className="grid gap-12 md:grid-cols-[2fr,1fr]">
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Other Ways to Reach Us
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Discord</h3>
                  <p className="text-muted-foreground">
                    Join our Discord server for real-time chat and support
                  </p>
                  <a
                    href="https://discord.gg/cookieclicker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Join Discord Server
                  </a>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Social Media</h3>
                  <div className="space-y-2">
                    <a
                      href="https://twitter.com/cookieclickerfan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://github.com/tupta1999/cookie-clicker-empire.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Email</h3>
                  <a
                    href="mailto:contact@cookieclickerfan.com"
                    className="text-primary hover:underline"
                  >
                    contact@cookieclickerfan.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Response Time</h2>
              <p className="text-muted-foreground">
                We typically respond to inquiries within 24-48 hours during
                business days. For faster responses, please join our Discord
                server.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
