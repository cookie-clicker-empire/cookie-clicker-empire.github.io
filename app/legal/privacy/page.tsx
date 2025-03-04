export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p>
          We collect information that your browser sends whenever you visit our
          website. This may include:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Browser type and version</li>
          <li>Your IP address</li>
          <li>Time and date of your visit</li>
          <li>Pages of our website that you visit</li>
          <li>Time spent on those pages</li>
          <li>Game progress and preferences (stored locally on your device)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>Provide and maintain our website</li>
          <li>Monitor and analyze usage patterns and trends</li>
          <li>Improve our website and user experience</li>
          <li>Save your game progress (stored locally on your device)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to track activity on
          our website and store certain information. You can instruct your
          browser to refuse all cookies or to indicate when a cookie is being
          sent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Third-Party Services
        </h2>
        <p>
          We may employ third-party companies and individuals due to the
          following reasons:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>To facilitate our website</li>
          <li>To provide analytics services</li>
          <li>To serve advertisements</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Security</h2>
        <p>
          The security of your information is important to us, but remember that
          no method of transmission over the Internet or method of electronic
          storage is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          6. Changes to This Privacy Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
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
