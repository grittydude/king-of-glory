import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaAmbulance } from 'react-icons/fa';
import PageHeader from '../../components/common/PageHeader/PageHeader';
import ContactForm from '../../components/ui/ContactForm/ContactForm';
import Accordion from '../../components/common/Accordion/Accordion';
import { generalFaqs } from '../../data/faq';
import { CONTACT_INFO, ANIMATION_VARIANTS, SITE_NAME } from '../../constants';
import styles from './Contact.module.css';

const CONTACT_ITEMS = [
  { icon: <FaPhone />, label: 'Phone', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
  { icon: <FaPhone />, label: 'Additional Lines', value: CONTACT_INFO.phone2 },
  { icon: <FaEnvelope />, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: <FaMapMarkerAlt />, label: 'Address', value: CONTACT_INFO.address },
  { icon: <FaClock />, label: 'Hours', value: CONTACT_INFO.hours },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | {SITE_NAME}</title>
        <meta name="description" content="Get in touch with King of Glory Healthcare. Contact us by phone, email, or our online form. We respond within 24 hours." />
        <link rel="canonical" href="https://kingofgloryhealthcare.com/contact" />
      </Helmet>

      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out via any of the channels below, or complete the form and we'll be in touch within 24 hours."
        breadcrumbs={[{ label: 'Contact', path: '/contact' }]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {/* Info Column */}
            <motion.div
              className={styles.infoCol}
              variants={ANIMATION_VARIANTS.fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className={styles.colTitle}>Get in Touch</h2>
              <p className={styles.colSubtitle}>
                Our care team is available Monday through Saturday. For after-hours mental health
                support, please use our crisis line.
              </p>
              <ul className={styles.contactList}>
                {CONTACT_ITEMS.map((item) => (
                  <li key={item.label} className={styles.contactItem}>
                    <div className={styles.contactIconWrapper} aria-hidden="true">
                      {item.icon}
                    </div>
                    <div>
                      <span className={styles.contactLabel}>{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className={styles.contactValue}>{item.value}</a>
                      ) : (
                        <span className={styles.contactValue}>{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Emergency */}
              <div className={styles.emergencyBox}>
                <FaAmbulance className={styles.emergencyIcon} aria-hidden="true" />
                <div>
                  <strong>Mental Health Emergency?</strong>
                  <p>
                    Call <a href={`tel:${CONTACT_INFO.emergency}`}>{CONTACT_INFO.emergency}</a> or
                    the National Crisis Line at <a href="tel:988">988</a> for immediate support.
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className={styles.mapWrapper} aria-label="Office location map">
                <iframe
                  title="King of Glory Healthcare location"
                  src={`https://maps.google.com/maps?q=8861+Branch+Avenue+Clinton+MD+20735&output=embed`}
                  width="100%"
                  height="260"
                  style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              className={styles.formCol}
              variants={ANIMATION_VARIANTS.fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className={styles.formCard}>
                <h2 className={styles.colTitle}>Send Us a Message</h2>
                <p className={styles.colSubtitle}>
                  Have a question about our services, insurance, or scheduling? Fill out the form
                  and we will get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section`} style={{ background: 'var(--gradient-light)' }}>
        <div className="container">
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <Accordion items={generalFaqs.slice(0, 4)} allowMultiple />
            <Accordion items={generalFaqs.slice(4)} allowMultiple />
          </div>
        </div>
      </section>
    </>
  );
}
