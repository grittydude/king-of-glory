import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/common/PageHeader/PageHeader';
import { SITE_NAME, CONTACT_INFO } from '../../constants';
import styles from '../PrivacyPolicy/PrivacyPolicy.module.css';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | {SITE_NAME}</title>
        <meta name="description" content="Read the Terms and Conditions governing your use of the King of Glory Healthcare website and services." />
        <link rel="canonical" href="https://kingofgloryhealthcare.com/terms" />
      </Helmet>

      <PageHeader
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our website or services."
        breadcrumbs={[{ label: 'Terms & Conditions', path: '/terms' }]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <p className={styles.updated}>Effective Date: January 8, 2025</p>

            <p>Welcome to King of Glory Healthcare ("we," "our," "us"). By accessing or using our website, services, or booking an appointment, you agree to these Terms &amp; Conditions. Please read them carefully.</p>

            <h2>1. Use of Our Services</h2>
            <ul>
              <li>Our website and services are intended for individuals seeking mental health support.</li>
              <li>You agree to use our services responsibly and in compliance with applicable laws.</li>
              <li>You must be at least 18 years old or have parental/guardian consent to use our services.</li>
            </ul>

            <h2>2. No Emergency Services</h2>
            <ul>
              <li>King of Glory Healthcare does not provide emergency medical or psychiatric services.</li>
              <li>If you are experiencing a crisis, call your local emergency number immediately or go to the nearest emergency facility.</li>
            </ul>

            <h2>3. Appointments &amp; Payments</h2>
            <ul>
              <li>All sessions must be booked through our official booking system or by contacting our office.</li>
              <li>Payment is due at the time of booking unless otherwise agreed.</li>
              <li>Cancellations must be made at least 24 hours in advance. Late cancellations or missed appointments may be charged in full.</li>
            </ul>

            <h2>4. Confidentiality &amp; Privacy</h2>
            <ul>
              <li>We respect your privacy and maintain confidentiality in accordance with professional and legal standards.</li>
              <li>Please refer to our <a href="/privacy-policy">Privacy Policy</a> for details on how we collect, store, and use your personal information.</li>
            </ul>

            <h2>5. Limitation of Liability</h2>
            <ul>
              <li>Our services are provided by licensed professionals but do not guarantee any particular outcome.</li>
              <li>We are not liable for any damages, losses, or injuries arising from the use of our services or website.</li>
              <li>Use of this website and our services is at your own risk.</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>All content on our website, including text, graphics, and logos, is the property of King of Glory Healthcare and may not be copied, reproduced, or distributed without permission.</p>

            <h2>7. Changes to Terms</h2>
            <p>We may update these Terms &amp; Conditions at any time. Updated versions will be posted on our website with a revised "Effective Date."</p>

            <h2>8. Governing Law</h2>
            <p>These Terms &amp; Conditions shall be governed by and interpreted under the laws of the United States.</p>

            <h2>9. Contact Us</h2>
            <p>For questions regarding these Terms &amp; Conditions, please contact us:</p>
            <address className={styles.address}>
              <strong>King of Glory Healthcare</strong><br />
              8861 Branch Avenue, Clinton, MD 20735 United States<br />
              Email: <a href="mailto:contact@kingofgloryhealthcare.com">contact@kingofgloryhealthcare.com</a><br />
              Phone: <a href="tel:+12404487242">+1 (240) 448-7242</a>
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
