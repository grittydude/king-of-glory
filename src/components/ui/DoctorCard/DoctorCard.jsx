import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaCalendarAlt } from 'react-icons/fa';
import { ANIMATION_VARIANTS } from '../../../constants';
import styles from './DoctorCard.module.css';

const SOCIAL_ICONS = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
};

export default function DoctorCard({ doctor }) {
  const { slug, name, title, specialization, experience, photo, social } = doctor;

  return (
    <motion.article
      className={styles.card}
      variants={ANIMATION_VARIANTS.fadeInUp}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className={styles.imageWrapper}>
        <img
          src={photo}
          alt={`Photo of ${name}`}
          className={styles.photo}
          loading="lazy"
          width="300"
          height="360"
        />
        <div className={styles.overlay}>
          <div className={styles.socialLinks} aria-label={`Social links for ${name}`}>
            {Object.entries(social || {}).map(([platform, href]) => {
              const Icon = SOCIAL_ICONS[platform];
              if (!Icon) return null;
              return (
                <a
                  key={platform}
                  href={href}
                  className={styles.socialLink}
                  aria-label={`${name} on ${platform}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.experience}>{experience} exp.</span>
          <span className={styles.badge}>{title}</span>
        </div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.specialization}>{specialization}</p>
        <Link
          to={`/book-appointment?doctor=${slug}`}
          className={styles.bookBtn}
          aria-label={`Book an appointment with ${name}`}
        >
          <FaCalendarAlt aria-hidden="true" />
          Book Appointment
        </Link>
      </div>
    </motion.article>
  );
}
