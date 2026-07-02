import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube,
} from 'react-icons/fa';
import logoImg from '../../../assets/images/kingofgloryhealthcare_logo.png';
import { FOOTER_LINKS, CONTACT_INFO } from '../../../constants';
import styles from './Footer.module.css';

const SOCIAL = [
  { Icon: FaFacebookF, href: '#', label: 'Facebook' },
  { Icon: FaInstagram, href: '#', label: 'Instagram' },
  { Icon: FaTwitter, href: '#', label: 'Twitter' },
  { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { Icon: FaYoutube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubStatus('Thanks for subscribing!');
    setEmail('');
    setTimeout(() => setSubStatus(''), 4000);
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.top}>
        <div className={`container ${styles.grid}`}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo} aria-label="King of Glory Healthcare">
              <img src={logoImg} alt="King of Glory Healthcare" className={styles.logoImg} />
            </Link>
            <p className={styles.brandDesc}>
              Compassionate, evidence-based mental health care that meets you where you are.
              Your wellness journey starts here.
            </p>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} aria-hidden="true" />
                <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
              </li>
              <li className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} aria-hidden="true" />
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </li>
              <li className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} aria-hidden="true" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className={styles.contactItem}>
                <FaClock className={styles.contactIcon} aria-hidden="true" />
                <span>{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </div>

          {/* Healthcare Services */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Our Services</h3>
            <ul className={styles.colLinks}>
              {FOOTER_LINKS.healthcare.map((l) => (
                <li key={l.path}>
                  <Link to={l.path}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.colLinks}>
              {FOOTER_LINKS.quickLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Stay Updated</h3>
            <div className={styles.newsletter}>
              <p className={styles.newsletterText}>
                Get the latest health tips, articles, and clinic news delivered to your inbox.
              </p>
              {subStatus ? (
                <p style={{ color: 'var(--color-accent)', fontSize: '0.875rem' }}>{subStatus}</p>
              ) : (
                <form className={styles.newsletterForm} onSubmit={handleSubscribe} noValidate>
                  <label htmlFor="footer-email" className="sr-only">Email address</label>
                  <input
                    id="footer-email"
                    type="email"
                    className={styles.newsletterInput}
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-required="true"
                  />
                  <button type="submit" className={styles.newsletterBtn}>
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="container">
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} King of Glory Healthcare. All Rights Reserved.
          </p>
          <nav aria-label="Social media links" className={styles.social}>
            {SOCIAL.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className={styles.socialLink}
                aria-label={label}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </nav>
          <nav aria-label="Legal links" className={styles.legalLinks}>
            {FOOTER_LINKS.legal.map((l) => (
              <Link key={l.path} to={l.path}>{l.label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
