import { Helmet } from "react-helmet-async";
import SectionHeading from "../components/SectionHeading";

const PrivacyPolicy = () => {
  return (
    <div className="pt-16 md:pt-32 bg-background min-h-screen">
      <Helmet>
        <title>Privacy Policy | A Square Studio</title>
        <meta
          name="description"
          content="Privacy Policy for A Square Studio - how we collect, use, and protect your information."
        />
        <link
          rel="canonical"
          href="https://asquarestudios.com/privacy-policy"
        />
      </Helmet>

      <section className="px-6 md:px-12 max-w-4xl mx-auto mb-16 md:mb-32 mt-18">
        <SectionHeading subtitle="Legal" title="Privacy Policy" as="h1" />
        <p className="text-secondary/40 text-xs uppercase tracking-widest mb-12">
          Last updated: August 2026
        </p>

        <div className="flex flex-col gap-10 text-secondary/70 text-base leading-relaxed">
          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              1. Who We Are
            </h2>
            <p>
              A Square Studio ("we," "our," "us") provides architectural and
              interior design services across all over India. This Privacy
              Policy explains how we collect, use, and protect information when
              you visit asquarestudios.com ("the Site").
            </p>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information in the following ways:
            </p>
            <ul className="flex flex-col gap-2 list-disc pl-6">
              <li>
                <strong className="text-secondary">
                  Contact form submissions:
                </strong>{" "}
                When you fill out our contact form, we collect your name, email
                address, phone number, and any message you provide. This
                information is sent directly to our business email via a
                third-party service (EmailJS) for the sole purpose of responding
                to your inquiry.
              </li>
              <li>
                <strong className="text-secondary">
                  Analytics and advertising:
                </strong>{" "}
                We use Google Analytics and Google Ads to understand how
                visitors use the Site and to measure the performance of our
                advertising campaigns. These services may use cookies and
                similar technologies to collect information such as your
                approximate location, device type, and browsing behavior on the
                Site.
              </li>
              <li>
                <strong className="text-secondary">WhatsApp:</strong> If you
                click our WhatsApp contact button, you will be redirected to
                WhatsApp, which is operated by Meta and governed by its own
                privacy policy. We do not control what information WhatsApp
                collects.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              3. How We Use Your Information
            </h2>
            <p>
              We use the information you provide solely to respond to your
              inquiries, discuss potential projects, and provide the services
              you request. We do not sell, rent, or trade your personal
              information to third parties for their marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              4. Third-Party Services
            </h2>
            <p className="mb-4">
              We rely on the following third-party services to operate the Site.
              Each has its own privacy policy governing how they handle data:
            </p>
            <ul className="flex flex-col gap-2 list-disc pl-6">
              <li>EmailJS - processes and delivers contact form submissions</li>
              <li>
                Google Analytics &amp; Google Ads - website analytics and
                advertising
              </li>
              <li>WhatsApp (Meta) - direct messaging</li>
            </ul>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              5. Cookies
            </h2>
            <p>
              The Site uses cookies primarily through Google Analytics and
              Google Ads to understand visitor behavior and measure ad
              performance. You can disable cookies through  your browser
              settings, though some parts of the Site may not function as
              intended if you do so.
            </p>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              6. Data Retention
            </h2>
            <p>
              We retain contact form submissions only as long as necessary to
              respond to your inquiry and maintain a record of client
              communications. You may request deletion of your information at
              any time by contacting us directly.
            </p>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              7. Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of any
              personal information you have submitted to us by emailing{" "}
              <a
                href="mailto:info@asquarestudios.com"
                className="text-gold hover:underline"
              >
                info@asquarestudios.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              8. Children's Privacy
            </h2>
            <p>
              The Site is not directed at children under 18, and we do not
              knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated "Last updated" date.
            </p>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              10. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:info@asquarestudios.com"
                className="text-gold hover:underline"
              >
                info@asquarestudios.com
              </a>{" "}
              or +91-9667641294.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
