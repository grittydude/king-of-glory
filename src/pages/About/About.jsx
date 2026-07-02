import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight, FaHeart, FaShieldAlt, FaUsers, FaBullseye } from 'react-icons/fa';
import PageHeader from '../../components/common/PageHeader/PageHeader';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import Button from '../../components/common/Button/Button';
import CTA from '../../components/ui/CTA/CTA';
import founderImg from '../../assets/images/founder.jpeg';
import { stats } from '../../data/stats';
import { ANIMATION_VARIANTS, SITE_NAME } from '../../constants';
import useCounter from '../../hooks/useCounter';
import styles from './About.module.css';

const VALUES = [
  { icon: <FaHeart />, title: 'Compassion First', desc: 'We approach every person with kindness, empathy, and genuine understanding.' },
  { icon: <FaShieldAlt />, title: 'Integrity Always', desc: 'We uphold the highest ethical standards in all we do.' },
  { icon: <FaBullseye />, title: 'Continuous Growth', desc: 'We strive for personal and professional care development every day.' },
  { icon: <FaUsers />, title: 'Community Impact', desc: 'We aim to make a lasting positive difference in society.' },
];

const TIMELINE = [
  { year: '2012', title: 'Founded', desc: 'King of Glory Healthcare was established with a mission to bring compassionate psychiatric care to underserved communities.' },
  { year: '2015', title: 'Expanded Services', desc: 'Launched our counseling and family therapy programs, tripling our clinical capacity.' },
  { year: '2018', title: 'Telehealth Launch', desc: 'Pioneered secure telehealth services in the region, making care accessible to patients statewide.' },
  { year: '2021', title: 'New Facility', desc: 'Opened our state-of-the-art clinic in Clinton, MD — designed with patient comfort and accessibility at its core.' },
  { year: '2023', title: 'Community Award', desc: 'Recognized by the MD Mental Health Association as the region\'s Outstanding Mental Health Provider.' },
  { year: '2024', title: 'Growing Forward', desc: 'Expanded our team to 20+ clinicians and launched our substance recovery program.' },
];

function StatBlock({ stat }) {
  const { ref, count } = useCounter(stat.value, { duration: 2000 });
  return (
    <motion.div ref={ref} className={styles.statBlock} variants={ANIMATION_VARIANTS.scaleIn}>
      <span className={styles.statValue}>{count}{stat.suffix}</span>
      <span className={styles.statLabel}>{stat.label}</span>
      <span className={styles.statDesc}>{stat.description}</span>
    </motion.div>
  );
}

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | {SITE_NAME}</title>
        <meta name="description" content="Learn about King of Glory Healthcare — our mission, values, history, and commitment to compassionate, evidence-based mental health care in Maryland." />
        <link rel="canonical" href="https://kingofgloryhealthcare.com/about" />
      </Helmet>

      <PageHeader
        title="About King of Glory Healthcare"
        subtitle="A decade of compassionate care, clinical excellence, and unwavering commitment to your mental wellness."
        breadcrumbs={[{ label: 'About Us', path: '/about' }]}
      />

      {/* Meet Our Founder */}
      <section className={`section ${styles.founderSection}`}>
        <div className="container">
          <div className={styles.founderGrid}>
            <motion.div
              className={styles.founderImageWrapper}
              variants={ANIMATION_VARIANTS.fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={founderImg}
                alt="Dr. Ify, Founder of King of Glory Healthcare"
                className={styles.founderImg}
                loading="eager"
              />
            </motion.div>
            <motion.div
              className={styles.founderContent}
              variants={ANIMATION_VARIANTS.fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className={styles.eyebrow}>Meet Our Founder</span>
              <h2 className={styles.sectionHeading}>Dr. Ify</h2>
              <p>
                Dr. Ify is the visionary founder of King of Glory Healthcare, bringing decades of
                clinical expertise and a heartfelt commitment to mental wellness in underserved
                communities. Her approach blends evidence-based practice with genuine compassion —
                meeting every patient where they are.
              </p>
              <p>
                Driven by a belief that quality mental healthcare is a right, not a privilege, Dr. Ify
                built King of Glory Healthcare to be a place where every person feels seen, heard, and
                supported on their journey toward lasting wellness.
              </p>
              <ul className={styles.missionPoints}>
                {[
                  'Board-certified psychiatric specialist',
                  'Dedicated advocate for community mental health',
                  'Serving Clinton, MD and surrounding areas',
                  'Accepting Medicaid and other insurance plans',
                ].map((p) => (
                  <li key={p}>
                    <FaCheckCircle aria-hidden="true" className={styles.checkIcon} />
                    {p}
                  </li>
                ))}
              </ul>
              <Button as={Link} to="/book-appointment" size="lg">
                Book with Dr. Ify <FaArrowRight aria-hidden="true" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className={styles.missionGrid}>
            <motion.div
              className={styles.missionContent}
              variants={ANIMATION_VARIANTS.fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className={styles.eyebrow}>About King of Glory Healthcare</span>
              <h2 className={styles.sectionHeading}>Professionals Dedicated to Your Health</h2>
              <p>
                At King of Glory Healthcare, we provide a comprehensive range of behavioral and
                mental health services designed to support individuals and families at every stage
                of their wellness journey.
              </p>
              <p>
                From psychiatric evaluations and medication management to counseling and ongoing
                mental health support, our goal is to help you overcome challenges and achieve
                lasting well-being. Our compassionate team is committed to creating a safe,
                welcoming, and confidential environment where your needs are heard and respected.
              </p>
              <p>
                We take a personalized approach to care, working closely with you to develop
                treatment plans that promote healing, resilience, and a better quality of life.
                Whether you are seeking support for emotional, behavioral, or mental health
                concerns, King of Glory Healthcare is here to guide and support you every step
                of the way.
              </p>
              <blockquote className={styles.quoteBlock}>
                <p>"Mental health isn't a race to a finish line; it's the practice of learning to navigate the terrain as you move through it."</p>
                <cite>— Dr. Ify</cite>
              </blockquote>
              <Button as={Link} to="/contact" size="lg">
                Contact Us <FaArrowRight aria-hidden="true" />
              </Button>
            </motion.div>
            <motion.div
              className={styles.missionImageGrid}
              variants={ANIMATION_VARIANTS.fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80"
                alt="Healthcare professionals at King of Glory Healthcare"
                className={styles.missionImg1}
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&auto=format&fit=crop&q=80"
                alt="Doctor consulting with a patient"
                className={styles.missionImg2}
                loading="lazy"
              />
              <div className={styles.missionBadge}>
                <strong>98%</strong>
                <span>Patient Satisfaction</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <SectionTitle
            eyebrow="Our Values"
            title="Guided by Principles, Driven by Care"
            subtitle="Our values define who we are and guide our mission to provide compassionate, ethical, and impactful mental health care for every individual we serve."
          />
          <motion.div
            className={styles.valuesGrid}
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {VALUES.map((v) => (
              <motion.div
                key={v.title}
                className={styles.valueCard}
                variants={ANIMATION_VARIANTS.fadeInUp}
                whileHover={{ y: -6 }}
              >
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          <SectionTitle
            eyebrow="Our Numbers"
            title="Health Is Wealth, and the Numbers Prove It"
            subtitle="Excellence in healthcare is our standard, and our numbers back it up."
            light
          />
          <motion.div
            className={styles.statsGrid}
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.slice(0, 4).map((s) => (
              <StatBlock key={s.id} stat={s} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Our Story"
            title="A Decade of Healing and Growth"
            subtitle="From a small clinic to a comprehensive mental health center — here is how we got here."
          />
          <div className={styles.timeline}>
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}
                variants={i % 2 === 0 ? ANIMATION_VARIANTS.fadeInLeft : ANIMATION_VARIANTS.fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
                <div className={styles.timelineDot} aria-hidden="true" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className={`section ${styles.philosophySection}`}>
        <div className="container">
          <div className={styles.philosophyGrid}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=700&auto=format&fit=crop&q=80"
                alt="Therapist and patient in a counseling session"
                className={styles.philosophyImg}
                loading="lazy"
              />
            </div>
            <motion.div
              className={styles.philosophyContent}
              variants={ANIMATION_VARIANTS.fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className={styles.eyebrow}>Healthcare Philosophy</span>
              <h2 className={styles.sectionHeading}>We Treat the Whole Person, Not Just the Diagnosis</h2>
              <p>
                Mental health exists within the context of a whole life — relationships, environment,
                culture, biology, and personal history all play a role. Our integrative approach
                addresses these dimensions holistically, using evidence-based treatments while
                honoring each patient's unique background and values.
              </p>
              <p>
                We believe in collaborative care — that the best outcomes happen when clinicians and
                patients work as partners. Your voice matters in every treatment decision.
              </p>
              <Button as={Link} to="/services" size="lg" style={{ marginTop: '2rem' }}>
                Explore Our Services
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
