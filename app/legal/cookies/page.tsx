export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. What Are Cookies
        </h2>
        <p>
          Cookies are small pieces of text sent by your web browser by a website
          you visit. A cookie file is stored in your web browser and allows the
          website or a third-party to recognize you and make your next visit
          easier and more useful to you.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. How We Use Cookies
        </h2>
        <p>We use cookies for the following purposes:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>To save your game progress and preferences</li>
          <li>To understand and save user's preferences for future visits</li>
          <li>To keep track of advertisements</li>
          <li>
            To compile aggregate data about site traffic and site interactions
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          3. Types of Cookies We Use
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Essential Cookies:</h3>
            <p>
              Necessary for the website to function properly. They enable basic
              functions like page navigation and access to secure areas of the
              website.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Game Progress Cookies:</h3>
            <p>
              Store your game progress, achievements, and preferences locally on
              your device.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Analytics Cookies:</h3>
            <p>
              Help us understand how visitors interact with our website by
              collecting and reporting information anonymously.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Advertising Cookies:</h3>
            <p>
              Used to deliver relevant advertisements and track ad campaign
              performance.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Third-Party Cookies
        </h2>
        <p>
          In addition to our own cookies, we may also use various third-party
          cookies to report usage statistics of the website and deliver
          advertisements on and through the website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          5. How to Control Cookies
        </h2>
        <p>
          You can control and/or delete cookies as you wish. You can delete all
          cookies that are already on your computer and you can set most
          browsers to prevent them from being placed. If you do this, however,
          you may have to manually adjust some preferences every time you visit
          a site and some services and functionalities may not work.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          6. More Information
        </h2>
        <p>
          If you have any questions about our use of cookies, please contact us
          at:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>By email: [Your Contact Email]</li>
          <li>By visiting this page on our website: /contact</li>
        </ul>
      </div>
    </div>
  );
}
