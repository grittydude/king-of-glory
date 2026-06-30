import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight, FaHeart, FaShieldAlt, FaUsers, FaBullseye } from 'react-icons/fa';
import PageHeader from '../../components/common/PageHeader/PageHeader';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import Button from '../../components/common/Button/Button';
import CTA from '../../components/ui/CTA/CTA';
import { stats } from '../../data/stats';
import { ANIMATION_VARIANTS, SITE_NAME } from '../../constants';
import useCounter from '../../hooks/useCounter';
import styles from './About.module.css';

const VALUES = [
  { icon: <FaHeart />, title: 'Compassion', desc: 'We treat every patient with genuine empathy, dignity, and unconditional positive regard.' },
  { icon: <FaShieldAlt />, title: 'Integrity', desc: 'We operate with transparency and honesty in all we do — clinically and administratively.' },
  { icon: <FaBullseye />, title: 'Excellence', desc: 'We hold ourselves to the highest clinical standards and continuously pursue better outcomes.' },
  { icon: <FaUsers />, title: 'Community', desc: 'We believe mental health care is a community responsibility and strive to expand access for all.' },
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
              <span className={styles.eyebrow}>Our Mission</span>
              <h2 className={styles.sectionHeading}>Professionals Dedicated to Your Health</h2>
              <p>
                At King of Glory Healthcare, our mission is to provide accessible, compassionate, and
                evidence-based mental health care that empowers individuals, strengthens families, and
                enriches communities.
              </p>
              <p>
                We believe that mental health is not a luxury — it is a fundamental component of
                overall wellbeing. Every person deserves quality care, regardless of their background,
                insurance status, or the severity of their struggles.
              </p>
              <ul className={styles.missionPoints}>
                {['Patient-centered care rooted in clinical evidence', 'Specialist doctors with board certifications', '24-hour crisis support resources', 'Telehealth available statewide'].map((p) => (
                  <li key={p}>
                    <FaCheckCircle aria-hidden="true" className={styles.checkIcon} />
                    {p}
                  </li>
                ))}
              </ul>
              <Button as={Link} to="/team" size="lg">
                Meet Our Team <FaArrowRight aria-hidden="true" />
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
            eyebrow="Core Values"
            title="The Principles That Guide Everything We Do"
            subtitle="Our values are not just words on a wall — they are the lived commitments that shape every patient interaction."
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
