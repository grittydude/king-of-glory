import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '../../../constants';
import styles from './SectionTitle.module.css';

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  maxWidth = '600px',
}) {
  return (
    <motion.div
      className={`${styles.wrapper} ${styles[align]} ${light ? styles.light : ''}`}
      style={{ maxWidth: align === 'center' ? maxWidth : undefined, margin: align === 'center' ? '0 auto' : undefined }}
      variants={ANIMATION_VARIANTS.fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {eyebrow && (
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowDot} aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
}
