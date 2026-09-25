import { Helmet } from "react-helmet-async";
import SectionHeading from "../components/SectionHeading";

const TermsOfService = () => {
  return (
    <div className="pt-16 md:pt-32 bg-background min-h-screen">
      <Helmet>
        <title>Terms of Service | A Square Studio</title>
        <meta
          name="description"
          content="Terms of Service for using the A Square Studio website."
        />
        <link
          rel="canonical"
          href="https://asquarestudios.com/terms-of-service"
        />
      </Helmet>

      <section className="px-6 md:px-12 max-w-4xl mx-auto mb-16 md:mb-32 mt-18">
        <SectionHeading subtitle="Legal" title="Terms of Service" as="h1" />
        <p className="text-secondary/40 text-xs uppercase tracking-widest mb-12">
          Last updated: August 2026
        </p>

        <div className="flex flex-col gap-10 text-secondary/70 text-base leading-relaxed">
          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using asquarestudios.com ("the Site"), you agree
              to be bound by these Terms of Service. If you do not agree, please
              do not use the Site.
            </p>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              2. About Our Services
            </h2>
            <p>
              A Square Studio provides architectural and interior design
              consultation services across all over India. Submitting an inquiry
              through this Site does not create a contractual relationship - any
              actual project engagement is governed by a separate written
              agreement between you and A Square Studio.
            </p>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              3. Website Content
            </h2>
            <p>
              All content on this Site - including text, images, logos, and
              project photography - is the property of A Square Studio unless
              otherwise noted, and may not be reproduced, distributed, or used
              without our written permission.
            </p>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              4. Third-Party Links
            </h2>
            <p>
              This Site contains links to third-party platforms, including
              WhatsApp, Instagram, Facebook, and LinkedIn. We are not
              responsible for the content, privacy practices, or terms of these
              external sites.
            </p>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              5. Project Information Accuracy
            </h2>
            <p>
              Project details, imagery, and descriptions on this Site are
              provided for illustrative purposes. Actual project outcomes may
              vary based on site conditions, client requirements, and other
              factors specific to each engagement.
            </p>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              The Site and its content are provided "as is" without warranties
              of any kind. A Square Studio is not liable for any indirect,
              incidental, or consequential damages arising from your use of the
              Site.
            </p>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              7. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of India, without regard to
              conflict of law principles.
            </p>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              8. Changes to These Terms
            </h2>
            <p>
              We may revise these Terms at any time. Continued use of the Site
              after changes are posted constitutes acceptance of the revised
              Terms.
            </p>
          </div>

          <div>
            <h2 className="text-secondary font-serif text-xl mb-4">
              9. Contact Us
            </h2>
            <p>
              Questions about these Terms can be sent to{" "}
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

export default TermsOfService;
