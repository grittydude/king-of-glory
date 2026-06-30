import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaTag } from 'react-icons/fa';
import { ANIMATION_VARIANTS } from '../../../constants';
import styles from './BlogCard.module.css';

export default function BlogCard({ post, featured = false }) {
  const { slug, title, excerpt, image, author, date, category, readTime } = post;

  return (
    <motion.article
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      variants={ANIMATION_VARIANTS.fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      <Link to={`/blog/${slug}`} className={styles.imageLink} tabIndex="-1" aria-hidden="true">
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt={title}
            className={styles.image}
            loading="lazy"
            width="400"
            height="240"
          />
          <span className={styles.category}>
            <FaTag aria-hidden="true" /> {category}
          </span>
        </div>
      </Link>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.date}>{date}</span>
          <span className={styles.readTime}>
            <FaClock aria-hidden="true" /> {readTime}
          </span>
        </div>
        <h3 className={styles.title}>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.footer}>
          <div className={styles.author}>
            <img
              src={author.avatar}
              alt={author.name}
              className={styles.avatar}
              loading="lazy"
              width="32"
              height="32"
            />
            <div>
              <span className={styles.authorName}>{author.name}</span>
              <span className={styles.authorRole}>{author.role}</span>
            </div>
          </div>
          <Link
            to={`/blog/${slug}`}
            className={styles.readMore}
            aria-label={`Read more: ${title}`}
          >
            Read More <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
