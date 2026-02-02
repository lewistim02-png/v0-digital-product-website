export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-black">Privacy Policy</h1>
        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
          <p className="text-lg text-black">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">1. Information We Collect</h2>
            <p className="text-black leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>
                <strong>Account Information:</strong> Email address, name, and password when you create an account
              </li>
              <li>
                <strong>Payment Information:</strong> Processed securely through Stripe - we never store your full
                payment details
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access and use our course materials
              </li>
              <li>
                <strong>Communications:</strong> When you contact us for support or feedback
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">2. How We Use Your Information</h2>
            <p className="text-black leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>Provide, maintain, and improve our courses and services</li>
              <li>Process your transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect and prevent fraud and abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">3. Information Sharing</h2>
            <p className="text-black leading-relaxed mb-4">
              We do not sell your personal information. We may share your information only in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>
                <strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g.,
                Stripe for payments, Vercel for hosting)
              </li>
              <li>
                <strong>Legal Requirements:</strong> If required by law or to protect our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">4. Data Security</h2>
            <p className="text-black leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information.
              However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">5. Your Rights</h2>
            <p className="text-black leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Data portability</li>
            </ul>
            <p className="text-black leading-relaxed mt-4">
              To exercise these rights, contact us at privacy@kickcardacademy.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">6. Cookies and Tracking</h2>
            <p className="text-black leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our service and hold certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">7. Children's Privacy</h2>
            <p className="text-black leading-relaxed">
              Our services are not directed to individuals under 16. We do not knowingly collect personal information
              from children under 16. If you become aware that a child has provided us with personal information, please
              contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">8. International Data Transfers</h2>
            <p className="text-black leading-relaxed">
              Your information may be transferred to and maintained on servers located outside of your country. We
              ensure appropriate safeguards are in place to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">9. Changes to This Policy</h2>
            <p className="text-black leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">10. Contact Us</h2>
            <p className="text-black leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at privacy@kickcardacademy.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
