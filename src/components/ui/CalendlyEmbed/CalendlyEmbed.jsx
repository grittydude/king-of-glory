import { useState } from 'react';
import { CALENDLY_URL } from '../../../constants';
import styles from './CalendlyEmbed.module.css';

export default function CalendlyEmbed({ url }) {
  const [loaded, setLoaded] = useState(false);
  const bookingUrl = url || CALENDLY_URL;

  return (
    <div className={styles.wrapper}>
      {!loaded && (
        <div className={styles.placeholder} aria-hidden="true">
          <div className={styles.spinner} />
          <p>Loading booking calendar…</p>
        </div>
      )}
      <iframe
        src={bookingUrl}
        title="Book an appointment"
        className={`${styles.frame} ${loaded ? styles.visible : styles.hidden}`}
        onLoad={() => setLoaded(true)}
        allow="payment"
        loading="lazy"
        aria-label="Appointment booking calendar"
      />
    </div>
  );
}
