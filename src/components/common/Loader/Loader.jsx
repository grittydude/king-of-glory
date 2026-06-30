import styles from './Loader.module.css';

export default function Loader({ fullPage = false }) {
  return (
    <div
      className={`${styles.wrapper} ${fullPage ? styles.fullPage : ''}`}
      role="status"
      aria-label="Loading"
    >
      <div className={styles.spinner}>
        <div className={styles.ring} />
        <div className={styles.leaf} aria-hidden="true">🌿</div>
      </div>
    </div>
  );
}
