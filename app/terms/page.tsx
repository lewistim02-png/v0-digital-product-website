export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-black">Terms of Service</h1>
        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
          <p className="text-lg text-black">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">1. Agreement to Terms</h2>
            <p className="text-black leading-relaxed">
              By accessing and purchasing from Kickcard Academy, you agree to be bound by these Terms of Service and all
              applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
              using or accessing our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Course Access and License</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Upon purchase, you are granted a personal, non-transferable, non-exclusive license to access and use the
              course materials. This license includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Lifetime access to all purchased course materials</li>
              <li>All future updates and additions to your purchased tier</li>
              <li>Personal use only - commercial redistribution is strictly prohibited</li>
              <li>Access for one individual user only - account sharing is not permitted</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">3. Intellectual Property</h2>
            <p className="text-black leading-relaxed">
              All course materials, including but not limited to PDFs, videos, templates, and written content, are the
              intellectual property of Kickcard Academy. You may not reproduce, distribute, modify, create derivative
              works of, publicly display, or exploit any of our content without express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">4. Refund Policy</h2>
            <p className="text-black leading-relaxed">
              We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, contact us within 30
              days of purchase for a full refund. See our Refund Policy page for complete details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">5. Prohibited Uses</h2>
            <p className="text-black leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>Share your account credentials with others</li>
              <li>Distribute, sell, or share course materials with non-purchasers</li>
              <li>Use course content for commercial training or resale</li>
              <li>Reverse engineer, decompile, or extract source materials</li>
              <li>Remove copyright or proprietary notices from materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">6. Disclaimer of Warranties</h2>
            <p className="text-black leading-relaxed">
              The course materials are provided "as is" without warranty of any kind. While we strive for accuracy, we
              make no guarantees about specific results or earnings. Your success depends on your effort, market
              conditions, and factors beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">7. Limitation of Liability</h2>
            <p className="text-black leading-relaxed">
              Kickcard Academy shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages resulting from your use of or inability to use the course materials, even if we have been advised
              of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">8. Changes to Terms</h2>
            <p className="text-black leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon
              posting. Your continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">9. Contact Information</h2>
            <p className="text-black leading-relaxed">
              For questions about these Terms of Service, please contact us at support@kickcardacademy.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
