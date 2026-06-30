import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight, FaCheckCircle, FaStar, FaLeaf } from 'react-icons/fa';
import Button from '../../components/common/Button/Button';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import ServiceCard from '../../components/ui/ServiceCard/ServiceCard';
import TestimonialsSlider from '../../components/ui/TestimonialsSlider/TestimonialsSlider';
import CTA from '../../components/ui/CTA/CTA';
import { services } from '../../data/services';
import { stats } from '../../data/stats';
import { ANIMATION_VARIANTS, CONTACT_INFO, SITE_NAME } from '../../constants';
import useCounter from '../../hooks/useCounter';
import styles from './Home.module.css';

const WHY_ITEMS = [
  { icon: '🎯', title: 'Patient-Centered Care', desc: 'Every treatment plan is built around you — your goals, your timeline, your life.' },
  { icon: '🏥', title: 'Experienced Clinicians', desc: 'Board-certified psychiatrists and licensed therapists with decades of combined experience.' },
  { icon: '🔒', title: 'Confidential & Safe', desc: 'Your privacy is sacred. Every interaction is protected under HIPAA.' },
  { icon: '🔬', title: 'Evidence-Based Treatment', desc: 'We use only treatments with proven clinical efficacy — no guesswork.' },
  { icon: '🌿', title: 'Holistic Wellness', desc: 'We address mind, body, and spirit for comprehensive, lasting wellbeing.' },
  { icon: '📅', title: 'Flexible Appointments', desc: 'In-person and telehealth sessions available, including evenings and weekends.' },
];

function StatCounter({ stat }) {
  const { ref, count } = useCounter(stat.value, { duration: 2200 });
  return (
    <motion.div
      ref={ref}
      className={styles.statItem}
      variants={ANIMATION_VARIANTS.scaleIn}
    >
      <span className={styles.statValue}>
        {count}{stat.suffix}
      </span>
      <span className={styles.statLabel}>{stat.label}</span>
    </motion.div>
  );
}

export default function Home() {
  const featuredServices = services.slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: SITE_NAME,
    url: 'https://kingofgloryhealthcare.com',
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8861 Branch Avenue',
      addressLocality: 'Clinton',
      addressRegion: 'MD',
      postalCode: '20735',
      addressCountry: 'US',
    },
    medicalSpecialty: ['Psychiatry', 'Psychology', 'MentalHealth'],
    description: 'King of Glory Healthcare provides expert mental health services including psychiatric treatment, counseling, medication management, and more.',
  };

  return (
    <>
      <Helmet>
        <title>King of Glory Healthcare | Compassionate Expert Mental Health Care</title>
        <meta name="description" content="Expert psychiatric treatment, counseling, medication management, and comprehensive mental health services. Book your appointment today at King of Glory Healthcare." />
        <meta property="og:title" content="King of Glory Healthcare" />
        <meta property="og:description" content="Compassionate, evidence-based mental health care in Maryland. Book an appointment today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kingofgloryhealthcare.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://kingofgloryhealthcare.com" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Hero section">
        {/* Animated background blobs */}
        <div className={styles.blob1} aria-hidden="true" />
        <div className={styles.blob2} aria-hidden="true" />
        <div className={styles.blob3} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          <motion.div
            className={styles.heroContent}
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className={styles.heroBadge}>
              <FaLeaf aria-hidden="true" />
              Your Health, Our Priority
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={ANIMATION_VARIANTS.fadeInUp}>
              Your Path to <span className={styles.heroAccent}>Wellness</span> Starts Here
            </motion.h1>
            <motion.p className={styles.heroSubtitle} variants={ANIMATION_VARIANTS.fadeInUp}>
              Experience healthcare you can trust. Our dedicated team of board-certified psychiatrists and
              licensed therapists provides compassionate, high-quality mental health care tailored to you.
            </motion.p>
            <motion.div className={styles.heroActions} variants={ANIMATION_VARIANTS.fadeInUp}>
              <Button as={Link} to="/book-appointment" size="lg">
                <FaCalendarAlt aria-hidden="true" />
                Book Appointment
              </Button>
              <Button as={Link} to="/services" size="lg" variant="secondary">
                Explore Services
                <FaArrowRight aria-hidden="true" />
              </Button>
            </motion.div>
            <motion.div className={styles.heroTrust} variants={ANIMATION_VARIANTS.fadeInUp}>
              <div className={styles.heroRating}>
                {[1,2,3,4,5].map((s) => <FaStar key={s} aria-hidden="true" />)}
                <span>5.0</span>
                <span className={styles.heroRatingText}>Based on 500+ reviews</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.heroImage}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.heroImgWrapper}>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&auto=format&fit=crop&q=85"
                alt="Dr. Esther Howard, King of Glory Healthcare physician"
                className={styles.heroImg}
                loading="eager"
                width="560"
                height="680"
              />
              {/* Floating card — appointment */}
              <motion.div
                className={`${styles.floatingCard} ${styles.floatingCard1}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className={styles.fcIcon}>🕐</div>
                <div>
                  <strong>Opening Hours</strong>
                  <span>Mon–Fri: 9am–7pm</span>
                </div>
              </motion.div>
              {/* Floating card — patients */}
              <motion.div
                className={`${styles.floatingCard} ${styles.floatingCard2}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className={styles.fcIcon}>😊</div>
                <div>
                  <strong>3,500+</strong>
                  <span>Satisfied Patients</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className={styles.wave} aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="var(--color-bg)" />
          </svg>
        </div>
      </section>

      {/* ── Trust Indicators / Stats ────────────────────────── */}
      <section className={styles.statsSection} aria-label="Key statistics">
        <div className="container">
          <motion.div
            className={styles.statsGrid}
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {stats.slice(0, 4).map((stat) => (
              <StatCounter key={stat.id} stat={stat} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services Preview ────────────────────────────────── */}
      <section className="section" aria-label="Services preview">
        <div className="container">
          <SectionTitle
            eyebrow="Our Services"
            title="Comprehensive Services for Your Mental Health"
            subtitle="From psychiatric evaluations to individual therapy, we offer a full spectrum of evidence-based mental health services under one roof."
          />
          <motion.div
            className={styles.servicesGrid}
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {featuredServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </motion.div>
          <div className={styles.centerBtn}>
            <Button as={Link} to="/services" size="lg" variant="secondary">
              View All Services
              <FaArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ───────────────────────────────────── */}
      <section className={`section ${styles.whySection}`} aria-label="Why choose us">
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyLeft}>
              <motion.div
                variants={ANIMATION_VARIANTS.fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className={styles.eyebrow}>Why Choose Us</span>
                <h2 className={styles.whyTitle}>Why Patients Trust Us With Their Care</h2>
                <p className={styles.whySubtitle}>
                  Our commitment to excellence, compassion, and personalized treatment has earned
                  the trust of thousands of patients across Maryland. Here is what sets us apart.
                </p>
                <ul className={styles.whyList}>
                  {['Flexible hours to fit your busy schedule', 'Team committed to your comfort', 'Prompt, effective, evidence-based care', 'Helping you at every stage of life'].map((item) => (
                    <li key={item} className={styles.whyListItem}>
                      <FaCheckCircle className={styles.checkIcon} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button as={Link} to="/about" size="lg">
                  Learn More About Us
                </Button>
              </motion.div>
            </div>
            <motion.div
              className={styles.whyRight}
              variants={ANIMATION_VARIANTS.staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {WHY_ITEMS.map((item) => (
                <motion.div
                  key={item.title}
                  className={styles.whyCard}
                  variants={ANIMATION_VARIANTS.scaleIn}
                  whileHover={{ y: -4, boxShadow: 'var(--shadow-card-hover)' }}
                >
                  <div className={styles.whyCardIcon} aria-hidden="true">{item.icon}</div>
                  <div>
                    <h3 className={styles.whyCardTitle}>{item.title}</h3>
                    <p className={styles.whyCardDesc}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className={`section ${styles.testimonialSection}`} aria-label="Patient testimonials">
        <div className="container">
          <SectionTitle
            eyebrow="Patient Stories"
            title="What Our Patients Say"
            subtitle="Don't take our word for it — hear directly from the people whose lives we have had the privilege of touching."
          />
          <TestimonialsSlider />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTA />
    </>
  );
}
