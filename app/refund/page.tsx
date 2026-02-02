export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-black">Refund Policy</h1>
        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
          <p className="text-lg text-black">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">30-Day Money-Back Guarantee</h2>
            <p className="text-black leading-relaxed">
              We stand behind the quality of our courses. If you're not completely satisfied with your purchase, we
              offer a full refund within 30 days of your purchase date, no questions asked.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">How to Request a Refund</h2>
            <p className="text-black leading-relaxed mb-4">To request a refund, follow these simple steps:</p>
            <ol className="list-decimal pl-6 space-y-3 text-black">
              <li>Email us at refunds@kickcardacademy.com within 30 days of your purchase</li>
              <li>Include your order number and the email address used for purchase</li>
              <li>Briefly explain why you're requesting a refund (optional but helps us improve)</li>
              <li>We'll process your refund within 5-7 business days</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Refund Processing</h2>
            <p className="text-black leading-relaxed mb-4">Once your refund is approved:</p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>Your account access will be immediately disabled</li>
              <li>You will no longer be able to log in to your dashboard</li>
              <li>Access to the download portal will be revoked</li>
              <li>The refund will be processed to your original payment method</li>
              <li>You'll receive a confirmation email once the refund is complete</li>
              <li>It may take 5-10 business days for the refund to appear in your account, depending on your bank</li>
            </ul>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mt-4">
              <p className="text-sm text-black">
                <strong>Important:</strong> While we will revoke your account access and disable your ability to
                download files, any materials you have already downloaded to your device cannot be retrieved. By
                requesting a refund, you agree to delete all downloaded course materials and cease using them.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Exceptions</h2>
            <p className="text-black leading-relaxed mb-4">Our refund policy does not apply in the following cases:</p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>Refund requests made after 30 days from the purchase date</li>
              <li>Accounts found to be sharing course materials or violating our Terms of Service</li>
              <li>Purchases made with fraudulent payment methods</li>
              <li>Repeated refund requests (abuse of the refund policy)</li>
              <li>
                Accounts where extensive downloading activity has been detected (suggesting intent to refund after
                obtaining materials)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Partial Refunds</h2>
            <p className="text-black leading-relaxed">
              We do not offer partial refunds for individual modules or guides. If you purchase a tier and request a
              refund, it will be for the full amount of that tier only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Upgrades and Downgrades</h2>
            <p className="text-black leading-relaxed">
              If you wish to upgrade from a lower tier to a higher tier, contact us and we'll arrange the upgrade with
              credit for your previous purchase. Downgrades are not available, but you can request a full refund within
              the 30-day window.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Technical Issues</h2>
            <p className="text-black leading-relaxed">
              If you're experiencing technical difficulties accessing the course materials, please contact our support
              team at support@kickcardacademy.com before requesting a refund. We're committed to resolving any technical
              issues promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Content Protection</h2>
            <p className="text-black leading-relaxed">
              All course materials are protected by copyright and are licensed for your personal use only. Sharing,
              distributing, or reproducing course materials is strictly prohibited and may result in legal action. Upon
              refund, you must delete all downloaded materials and cease using them immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Questions?</h2>
            <p className="text-black leading-relaxed">
              If you have any questions about our refund policy, please don't hesitate to contact us at
              refunds@kickcardacademy.com or support@kickcardacademy.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
