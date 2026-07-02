import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaTimes, FaChevronDown } from 'react-icons/fa';
import logoImg from '../../../assets/images/kingofgloryhealthcare_logo.png';
import { NAV_LINKS, CONTACT_INFO } from '../../../constants';
import { useApp } from '../../../context/AppContext';
import Button from '../../common/Button/Button';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { navOpen, openNav, closeNav, toggleNav } = useApp();
  const drawerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change / escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeNav(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeNav]);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [navOpen]);

  return (
    <>
      <header
        className={`${styles.navbar} ${scrolled ? styles.scrolled : styles.transparent}`}
        role="banner"
      >
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label="King of Glory Healthcare Home">
            <img src={logoImg} alt="King of Glory Healthcare" className={styles.logoImg} />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation">
            <ul className={styles.navLinks} role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.path} className={styles.navItem}>
                  {link.megaMenu ? (
                    <>
                      <Link
                        to={link.path}
                        className={styles.navLink}
                        aria-haspopup="true"
                      >
                        {link.label}
                        <FaChevronDown className={styles.chevron} aria-hidden="true" />
                      </Link>
                      <div className={styles.megaMenu} role="menu">
                        {link.megaMenu.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className={styles.megaLink}
                            role="menuitem"
                          >
                            <span className={styles.megaDot} aria-hidden="true" />
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ''}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <a href={`tel:${CONTACT_INFO.phone}`} className={styles.phoneLink} aria-label="Call us">
              <FaPhone aria-hidden="true" />
              {CONTACT_INFO.phone}
            </a>
            <span className={styles.desktopBook}>
              <Button as={Link} to="/book-appointment" size="sm">
                Book Appointment
              </Button>
            </span>
            <button
              className={`${styles.hamburger} ${navOpen ? styles.open : ''}`}
              onClick={toggleNav}
              aria-label={navOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={navOpen}
              aria-controls="mobile-drawer"
            >
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`${styles.drawer} ${navOpen ? styles.open : ''}`}
        aria-hidden={!navOpen}
        ref={drawerRef}
      >
        <div
          className={styles.drawerOverlay}
          onClick={closeNav}
          aria-label="Close menu"
        />
        <AnimatePresence>
          {navOpen && (
            <motion.div
              className={styles.drawerPanel}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              role="dialog"
              aria-label="Navigation menu"
            >
              <div className={styles.drawerHeader}>
                <Link to="/" className={styles.logo} onClick={closeNav}>
                  <img src={logoImg} alt="King of Glory Healthcare" className={styles.logoImg} />
                </Link>
                <button
                  className={styles.drawerClose}
                  onClick={closeNav}
                  aria-label="Close navigation"
                >
                  <FaTimes />
                </button>
              </div>

              <nav aria-label="Mobile navigation">
                <ul className={styles.drawerNav} role="list">
                  {NAV_LINKS.map((link) => (
                    <li key={link.path}>
                      <NavLink
                        to={link.path}
                        end={link.path === '/'}
                        className={({ isActive }) =>
                          `${styles.drawerLink} ${isActive ? styles.active : ''}`
                        }
                        onClick={closeNav}
                      >
                        {link.label}
                      </NavLink>
                      {link.megaMenu && (
                        <ul className={styles.drawerSubLinks}>
                          {link.megaMenu.slice(0, 5).map((sub) => (
                            <li key={sub.path}>
                              <Link
                                to={sub.path}
                                className={styles.drawerSubLink}
                                onClick={closeNav}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className={styles.drawerCta}>
                <Button
                  as={Link}
                  to="/book-appointment"
                  fullWidth
                  onClick={closeNav}
                >
                  Book Appointment
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
