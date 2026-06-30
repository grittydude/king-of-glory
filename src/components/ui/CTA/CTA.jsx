import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import Button from '../../common/Button/Button';
import { ANIMATION_VARIANTS } from '../../../constants';
import styles from './CTA.module.css';

export default function CTA({
  title = 'Ready to Start Your Wellness Journey?',
  subtitle = 'Book a confidential appointment with one of our expert clinicians today. Your first step toward healing starts here.',
  primaryLabel = 'Book an Appointment',
  primaryTo = '/book-appointment',
  secondaryLabel = 'Learn More About Us',
  secondaryTo = '/about',
}) {
  return (
    <section className={styles.section} aria-label="Call to action">
      {/* Decorative blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className="container">
        <motion.div
          className={styles.inner}
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div className={styles.content} variants={ANIMATION_VARIANTS.fadeInUp}>
            <span className={styles.eyebrow}>Take the First Step</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </motion.div>

          <motion.div className={styles.actions} variants={ANIMATION_VARIANTS.fadeInUp}>
            <Button as={Link} to={primaryTo} size="lg" variant="white">
              <FaCalendarAlt aria-hidden="true" />
              {primaryLabel}
            </Button>
            <Link to={secondaryTo} className={styles.secondaryLink}>
              {secondaryLabel}
              <FaArrowRight aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
