import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaHome, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import { ANIMATION_VARIANTS, SITE_NAME } from '../../constants';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | {SITE_NAME}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className={styles.section}>
        {/* Background blob */}
        <div className={styles.blob} aria-hidden="true" />

        <motion.div
          className={styles.content}
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.illustration} variants={ANIMATION_VARIANTS.scaleIn} aria-hidden="true">
            🌿
          </motion.div>
          <motion.span className={styles.code} variants={ANIMATION_VARIANTS.fadeInUp}>
            404
          </motion.span>
          <motion.h1 className={styles.title} variants={ANIMATION_VARIANTS.fadeInUp}>
            Page Not Found
          </motion.h1>
          <motion.p className={styles.subtitle} variants={ANIMATION_VARIANTS.fadeInUp}>
            The page you're looking for doesn't exist or has been moved. Please use the links below
            to find what you need, or return to the homepage.
          </motion.p>
          <motion.div className={styles.actions} variants={ANIMATION_VARIANTS.fadeInUp}>
            <Link to="/" className={styles.btnPrimary}>
              <FaHome aria-hidden="true" />
              Go to Homepage
            </Link>
            <Link to="/services" className={styles.btnSecondary}>
              <FaSearch aria-hidden="true" />
              Browse Services
            </Link>
            <Link to="/book-appointment" className={styles.btnSecondary}>
              <FaCalendarAlt aria-hidden="true" />
              Book Appointment
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
