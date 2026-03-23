import { Layout } from "@/components/layout/Layout";
import { profile } from "@/data/profile";

const Privacy = () => {
  const lastUpdated = "February 2025";

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container-narrow">
          <h1 className="text-display font-bold mb-4">Privacy Notice</h1>
          <p className="text-primary-foreground/80">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container-narrow prose-content max-w-none space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Introduction</h2>
            <p>
              This privacy notice explains how I ({profile.displayName}) collect, use, and protect 
              your personal information when you visit this portfolio website or contact me through 
              the contact form.
            </p>
            <p>
              I am committed to protecting your privacy and handling your personal data in compliance 
              with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">What Information I Collect</h2>
            <p>I may collect the following information:</p>
            <ul>
              <li>
                <strong>Contact form submissions:</strong> Name, email address, company name (if provided), 
                subject, and message content when you submit the contact form.
              </li>
              <li>
                <strong>Technical data:</strong> [If analytics are used: IP address, browser type, 
                device type, pages visited, and time spent on site through analytics tools.]
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">How I Use Your Information</h2>
            <p>I use your personal information to:</p>
            <ul>
              <li>Respond to your enquiries and messages</li>
              <li>Consider potential working opportunities you may present</li>
              <li>[If analytics are used: Understand how visitors use this website to improve its content and functionality]</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Legal Basis for Processing</h2>
            <p>I process your personal data based on:</p>
            <ul>
              <li>
                <strong>Legitimate interests:</strong> To respond to your enquiries and consider 
                potential working relationships.
              </li>
              <li>
                <strong>Consent:</strong> Where you have provided explicit consent, such as for 
                marketing communications (if applicable).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Data Retention</h2>
            <p>
              I retain your personal data only for as long as necessary to fulfil the purposes for 
              which it was collected. Contact form submissions are typically retained for up to 
              12 months unless an ongoing professional relationship is established.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Your Rights</h2>
            <p>Under UK data protection law, you have the right to:</p>
            <ul>
              <li>Access the personal data I hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
            </ul>
            <p>
              To exercise any of these rights, please contact me at{" "}
              <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
                {profile.email}
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Cookies</h2>
            <p>
              [If cookies are used: This website uses cookies to improve your browsing experience 
              and to analyse site traffic. You can control cookie settings through your browser preferences.]
            </p>
            <p>
              [If no cookies are used: This website does not use cookies for tracking or analytics purposes.]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Third-Party Services</h2>
            <p>
              [If third-party services are used: This website may use the following third-party services 
              that may collect data:]
            </p>
            <ul>
              <li>[Add any analytics services, e.g., Google Analytics]</li>
              <li>[Add any hosting services]</li>
              <li>[Add any form handling services]</li>
            </ul>
            <p>
              [If no third-party services are used: This website does not share your personal data 
              with third-party services.]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Data Security</h2>
            <p>
              I take appropriate technical and organisational measures to protect your personal data 
              against unauthorised access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p>
              If you have any questions about this privacy notice or wish to exercise your data 
              protection rights, please contact me at:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
                {profile.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Complaints</h2>
            <p>
              If you are not satisfied with how I handle your personal data, you have the right to 
              lodge a complaint with the Information Commissioner's Office (ICO):
            </p>
            <p>
              <a 
                href="https://ico.org.uk/make-a-complaint/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://ico.org.uk/make-a-complaint/
              </a>
            </p>
          </div>

          <div className="pt-8 border-t text-sm text-muted-foreground">
            <p>
              <em>
                Note: This privacy notice is provided for general information purposes and does not 
                constitute legal advice. Please consult with a legal professional for specific 
                guidance on data protection compliance.
              </em>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
