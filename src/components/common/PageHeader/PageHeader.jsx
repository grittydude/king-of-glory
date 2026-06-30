import { motion } from 'framer-motion';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { ANIMATION_VARIANTS } from '../../../constants';
import styles from './PageHeader.module.css';

export default function PageHeader({ title, subtitle, breadcrumbs = [], image }) {
  return (
    <section className={styles.header} aria-label="Page header">
      {image && (
        <div className={styles.imageBg}>
          <img src={image} alt="" aria-hidden="true" loading="eager" />
          <div className={styles.overlay} />
        </div>
      )}
      <div className={`container ${styles.inner}`}>
        <Breadcrumb items={breadcrumbs} />
        <motion.div
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.title} variants={ANIMATION_VARIANTS.fadeInUp}>
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p className={styles.subtitle} variants={ANIMATION_VARIANTS.fadeInUp}>
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--color-bg)" />
        </svg>
      </div>
    </section>
  );
}
