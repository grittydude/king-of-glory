import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { ANIMATION_VARIANTS } from '../../../constants';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ service, variant = 'default' }) {
  const { slug, title, icon, shortDesc, image, category } = service;

  return (
    <motion.article
      className={`${styles.card} ${styles[variant]}`}
      variants={ANIMATION_VARIANTS.fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      <Link to={`/service/${slug}`} className={styles.imageLink} tabIndex="-1" aria-hidden="true">
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt={`${title} service`}
            className={styles.image}
            loading="lazy"
            width="400"
            height="240"
          />
          <div className={styles.categoryBadge}>{category}</div>
        </div>
      </Link>
      <div className={styles.body}>
        <div className={styles.iconWrapper} aria-hidden="true">{icon}</div>
        <h3 className={styles.title}>
          <Link to={`/service/${slug}`}>{title}</Link>
        </h3>
        <p className={styles.desc}>{shortDesc}</p>
        <Link to={`/service/${slug}`} className={styles.readMore} aria-label={`Learn more about ${title}`}>
          Learn More
          <FaArrowRight className={styles.arrow} aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
