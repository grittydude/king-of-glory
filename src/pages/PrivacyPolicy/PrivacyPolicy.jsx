import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/common/PageHeader/PageHeader';
import { SITE_NAME, CONTACT_INFO } from '../../constants';
import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | {SITE_NAME}</title>
        <meta name="description" content="Read King of Glory Healthcare's privacy policy. We are committed to protecting your personal health information under HIPAA and applicable law." />
        <link rel="canonical" href="https://kingofgloryhealthcare.com/privacy-policy" />
      </Helmet>

      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy and the confidentiality of your health information are fundamental to everything we do."
        breadcrumbs={[{ label: 'Privacy Policy', path: '/privacy-policy' }]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <p className={styles.updated}>Last updated: December 1, 2024</p>

            <h2>1. Introduction</h2>
            <p>King of Glory Healthcare ("we," "our," or "us") is committed to protecting the privacy and confidentiality of your personal and health information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number, date of birth.</li>
              <li><strong>Health Information:</strong> Information you provide when booking appointments or communicating with our clinical team, protected under HIPAA.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website (pages visited, time spent, browser type), collected via cookies and analytics.</li>
              <li><strong>Communications:</strong> Content of messages you send us through our contact form.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Schedule and manage your appointments</li>
              <li>Provide and improve our healthcare services</li>
              <li>Communicate with you about your care</li>
              <li>Send appointment reminders and follow-up information</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Improve our website and user experience</li>
            </ul>

            <h2>4. HIPAA Compliance</h2>
            <p>As a healthcare provider, we are subject to the Health Insurance Portability and Accountability Act (HIPAA). Your Protected Health Information (PHI) is handled in strict compliance with HIPAA regulations. We will not disclose your PHI without your written authorization except as permitted by law (e.g., for treatment, payment, and healthcare operations, or when required by law to protect public safety).</p>

            <h2>5. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information only:</p>
            <ul>
              <li>With your explicit written consent</li>
              <li>With healthcare providers involved in your treatment</li>
              <li>With insurance companies for billing and claims</li>
              <li>As required by law or court order</li>
              <li>With service providers who assist us in operating our website (under strict confidentiality agreements)</li>
            </ul>

            <h2>6. Data Security</h2>
            <p>We implement industry-standard security measures to protect your information, including SSL encryption, secure servers, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2>7. Cookies and Tracking</h2>
            <p>Our website uses cookies to improve your experience. You may disable cookies in your browser settings; however, some features of the site may not function properly without them. We use analytics cookies to understand how visitors use our site, helping us improve our services.</p>

            <h2>8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal and health information we hold</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your information (subject to legal retention requirements)</li>
              <li>Opt out of marketing communications at any time</li>
              <li>File a complaint with the HHS Office for Civil Rights if you believe your HIPAA rights have been violated</li>
            </ul>

            <h2>9. Children's Privacy</h2>
            <p>We do not knowingly collect personal information from children under the age of 13 without verified parental consent. For minor patients (under 18), a parent or legal guardian must authorize treatment and may access the minor's health records, subject to applicable law.</p>

            <h2>10. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>

            <h2>11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on this page with a revised date. Your continued use of our services after such changes constitutes your acceptance of the updated policy.</p>

            <h2>12. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy or how we handle your information, please contact our Privacy Officer:</p>
            <address className={styles.address}>
              <strong>King of Glory Healthcare — Privacy Officer</strong><br />
              8861 Branch Avenue, Clinton, MD 20735 United States<br />
              Email: <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a><br />
              Phone: <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
