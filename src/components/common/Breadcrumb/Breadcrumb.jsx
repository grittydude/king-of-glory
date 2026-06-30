import { Link } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';
import styles from './Breadcrumb.module.css';

export default function Breadcrumb({ items = [] }) {
  const crumbs = [{ label: 'Home', path: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <ol className={styles.list} itemScope itemType="https://schema.org/BreadcrumbList">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li
              key={crumb.path || i}
              className={styles.item}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {i === 0 ? (
                <Link to="/" className={styles.link} itemProp="item" aria-label="Home">
                  <FaHome aria-hidden="true" />
                  <span itemProp="name" className="sr-only">Home</span>
                </Link>
              ) : isLast ? (
                <span className={styles.current} aria-current="page" itemProp="name">
                  {crumb.label}
                </span>
              ) : (
                <Link to={crumb.path} className={styles.link} itemProp="item">
                  <span itemProp="name">{crumb.label}</span>
                </Link>
              )}
              {!isLast && (
                <FaChevronRight className={styles.sep} aria-hidden="true" />
              )}
              <meta itemProp="position" content={i + 1} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
