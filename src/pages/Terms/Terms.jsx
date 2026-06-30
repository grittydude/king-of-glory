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
            <p className={styles.updated}>Last updated: December 1, 2024</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using the King of Glory Healthcare website and services, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.</p>

            <h2>2. Healthcare Disclaimer</h2>
            <p>The content on this website is provided for general informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider for any medical questions or conditions. Never disregard professional medical advice or delay seeking it because of information you have read on this website.</p>
            <p>In case of a medical emergency, call 911 or your local emergency services immediately. For mental health crises, call 988 (Suicide & Crisis Lifeline).</p>

            <h2>3. Appointment Booking and Cancellations</h2>
            <p>Appointments booked through our website are subject to availability and confirmation by our clinical team. We require at least 24 hours notice for cancellations or rescheduling. Late cancellations (less than 24 hours notice) or no-shows may incur an administrative fee of $50.</p>

            <h2>4. Payment and Insurance</h2>
            <p>Fees for services are due at the time of service unless other arrangements have been made. We accept most major insurance plans; however, it is your responsibility to verify your coverage before your appointment. You are responsible for any amounts not covered by your insurance, including deductibles, copays, and coinsurance.</p>

            <h2>5. Telehealth Services</h2>
            <p>Telehealth services are subject to additional terms and the laws of the state in which you reside. By using our telehealth services, you consent to the use of electronic communications for your care. Telehealth is not appropriate for all conditions; your clinician will advise if in-person care is needed.</p>

            <h2>6. Intellectual Property</h2>
            <p>All content on this website — including text, images, graphics, logos, and software — is the property of King of Glory Healthcare or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written permission.</p>

            <h2>7. User Conduct</h2>
            <p>You agree not to use our website to:</p>
            <ul>
              <li>Post or transmit any content that is unlawful, harmful, or offensive</li>
              <li>Impersonate any person or entity</li>
              <li>Transmit any unsolicited advertising or spam</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Engage in any activity that disrupts or interferes with our services</li>
            </ul>

            <h2>8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, King of Glory Healthcare shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services, including but not limited to loss of data, loss of profits, or interruption of service.</p>

            <h2>9. Governing Law</h2>
            <p>These Terms and Conditions are governed by the laws of the State of Maryland, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Maryland.</p>

            <h2>10. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any such changes constitutes your acceptance of the new terms.</p>

            <h2>11. Contact</h2>
            <p>If you have questions about these Terms and Conditions, please contact us:</p>
            <address className={styles.address}>
              <strong>King of Glory Healthcare — Legal Department</strong><br />
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
