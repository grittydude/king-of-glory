import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import PageHeader from '../../components/common/PageHeader/PageHeader';
import CalendlyEmbed from '../../components/ui/CalendlyEmbed/CalendlyEmbed';
import Accordion from '../../components/common/Accordion/Accordion';
import { bookingFaqs } from '../../data/faq';
import { CONTACT_INFO, ANIMATION_VARIANTS, SITE_NAME } from '../../constants';
import styles from './Booking.module.css';

const STEPS = [
  { num: 1, title: 'Choose a Time', desc: 'Use the calendar below to select a date and time that works for your schedule.' },
  { num: 2, title: 'Complete the Form', desc: 'Enter your name, contact details, and the type of service you are looking for.' },
  { num: 3, title: 'Get Confirmation', desc: 'You\'ll receive an email confirmation with all the details for your appointment.' },
  { num: 4, title: 'Attend Your Session', desc: 'Arrive 10 minutes early for in-person visits, or click your telehealth link at the scheduled time.' },
];

export default function Booking() {
  return (
    <>
      <Helmet>
        <title>Book an Appointment | {SITE_NAME}</title>
        <meta name="description" content="Schedule a confidential mental health appointment at King of Glory Healthcare. Choose a time that works for you using our online booking system." />
        <link rel="canonical" href="https://kingofgloryhealthcare.com/book-appointment" />
      </Helmet>

      <PageHeader
        title="Book Your Appointment"
        subtitle="Scheduling your care is quick and easy. Choose a time below and we'll take care of the rest."
        breadcrumbs={[{ label: 'Book Appointment', path: '/book-appointment' }]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Left: Steps + Info */}
            <div className={styles.infoCol}>
              <motion.div
                variants={ANIMATION_VARIANTS.fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className={styles.heading}>How It Works</h2>
                <div className={styles.steps}>
                  {STEPS.map((s) => (
                    <div key={s.num} className={styles.step}>
                      <div className={styles.stepNum}>{s.num}</div>
                      <div>
                        <h3 className={styles.stepTitle}>{s.title}</h3>
                        <p className={styles.stepDesc}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.infoBox}>
                  <h3>What to Prepare</h3>
                  <ul className={styles.infoList}>
                    {[
                      'Valid photo ID',
                      'Insurance card (if applicable)',
                      'List of current medications',
                      'Any prior mental health records',
                      'Completed intake forms (emailed after booking)',
                    ].map((item) => (
                      <li key={item}>
                        <FaCheckCircle aria-hidden="true" className={styles.checkIcon} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.contactBox}>
                  <h3>Prefer to Call?</h3>
                  <a href={`tel:${CONTACT_INFO.phone}`} className={styles.contactLink}>
                    <FaPhone aria-hidden="true" /> {CONTACT_INFO.phone}
                  </a>
                  <a href={`mailto:${CONTACT_INFO.email}`} className={styles.contactLink}>
                    <FaEnvelope aria-hidden="true" /> {CONTACT_INFO.email}
                  </a>
                  <p className={styles.contactHours}>{CONTACT_INFO.hours}</p>
                </div>
              </motion.div>
            </div>

            {/* Right: Calendly */}
            <motion.div
              className={styles.calendarCol}
              variants={ANIMATION_VARIANTS.fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <CalendlyEmbed />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--gradient-light)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 className={styles.faqTitle}>Booking FAQs</h2>
          <Accordion items={bookingFaqs} allowMultiple />
        </div>
      </section>
    </>
  );
}
