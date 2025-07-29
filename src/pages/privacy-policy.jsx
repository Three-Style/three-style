import React from 'react'
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";

const PrivacyPolicy = () => {
  return (
    <>
      <HomeHeader />

      <main>
        <section className="section">
          <div className="container">
            <h2 className="h4 mb-4">Privacy Policy</h2>
            <p>
              At <strong>Your Company Name</strong>, your privacy is important to us. This Privacy Policy outlines how we collect, use, store, and protect your personal data when you visit our website or make a purchase from our online store, which specializes in high-quality sarees and kurtis.
            </p>

            <h6 className="py-2">1. Information We Collect</h6>
            <p>
              When you interact with our website, we may collect the following types of information:
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, billing and shipping address.</li>
                <li><strong>Order Information:</strong> Details of products purchased, transaction ID, and purchase history.</li>
                <li><strong>Payment Information:</strong> Credit/debit card or UPI information (processed via secure third-party gateways; we do not store this).</li>
                <li><strong>Technical Data:</strong> Browser type, device type, IP address, operating system, and referring URLs.</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on site, and click behavior.</li>
              </ul>
            </p>

            <h6 className="py-2">2. How We Use Your Information</h6>
            <p>
              We use the information we collect to:
              <ul>
                <li>Process and fulfill your orders efficiently.</li>
                <li>Send transactional emails like order confirmations and shipping updates.</li>
                <li>Provide customer service and respond to queries.</li>
                <li>Improve our website, product offerings, and user experience.</li>
                <li>Send promotional emails (only if you've opted in).</li>
                <li>Prevent fraudulent transactions and secure our website.</li>
              </ul>
            </p>

            <h6 className="py-2">3. Sharing Your Information</h6>
            <p>
              We never sell your personal data to third parties. However, we may share your information with:
              <ul>
                <li>Trusted payment gateways to process payments securely.</li>
                <li>Shipping providers for order delivery.</li>
                <li>Email marketing services (only for subscribed users).</li>
                <li>Analytics providers (like Google Analytics) to understand user behavior.</li>
                <li>Legal authorities, if required by law or to protect our rights.</li>
              </ul>
            </p>

            <h6 className="py-2">4. Cookies and Tracking Technologies</h6>
            <p>
              We use cookies and similar technologies to improve your browsing experience, personalize content, analyze traffic, and serve targeted advertisements. You can manage your cookie preferences through your browser settings.
            </p>

            <h6 className="py-2">5. Data Storage and Security</h6>
            <p>
              Your information is securely stored and protected using industry-standard encryption, firewalls, and secure socket layer (SSL) technology. While we strive to protect your data, no online transmission is 100% secure. You share information at your own risk.
            </p>

            <h6 className="py-2">6. Your Rights</h6>
            <p>
              You have the right to:
              <ul>
                <li>Access the personal information we hold about you.</li>
                <li>Request correction or deletion of inaccurate data.</li>
                <li>Withdraw consent or unsubscribe from marketing emails.</li>
                <li>Request complete deletion of your account and data.</li>
              </ul>
              To exercise these rights, contact us at <strong>your-email@example.com</strong>.
            </p>

            <h6 className="py-2">7. Changes to This Privacy Policy</h6>
            <p>
              We may update this policy from time to time to reflect changes in our business or legal obligations. All updates will be posted on this page with the “Last Updated” date revised accordingly.
            </p>

            <h6 className="py-2">8. Contact Us</h6>
            <p className="m-0px">
              For any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
              <br />
              <strong>Email:</strong> your-email@example.com
              <br />
              <strong>Company:</strong> Your Company Name
            </p>
          </div>
        </section>

      </main>

      <HomeFooter />
    </>
  )
}


export default PrivacyPolicy;

