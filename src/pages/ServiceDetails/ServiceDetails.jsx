import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader/PageHeader';
import Accordion from '../../components/common/Accordion/Accordion';
import ServiceCard from '../../components/ui/ServiceCard/ServiceCard';
import Button from '../../components/common/Button/Button';
import { getServiceBySlug, getRelatedServices } from '../../data/services';
import { serviceFaqs } from '../../data/faq';
import { ANIMATION_VARIANTS, SITE_NAME } from '../../constants';
import styles from './ServiceDetails.module.css';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/404" replace />;

  const related = getRelatedServices(service.relatedServices).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{service.title} | {SITE_NAME}</title>
        <meta name="description" content={service.shortDesc} />
        <link rel="canonical" href={`https://kingofgloryhealthcare.com/service/${slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalProcedure',
          name: service.title,
          description: service.description,
          provider: {
            '@type': 'MedicalOrganization',
            name: SITE_NAME,
          },
        })}</script>
      </Helmet>

      <PageHeader
        title={service.title}
        subtitle={service.shortDesc}
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: service.title, path: `/service/${slug}` },
        ]}
        image={service.image}
      />

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Main Content */}
            <div className={styles.main}>
              {/* Overview */}
              <motion.div
                className={styles.card}
                variants={ANIMATION_VARIANTS.fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className={styles.cardTitle}>Service Overview</h2>
                <p>{service.description}</p>
              </motion.div>

              {/* Benefits */}
              <motion.div
                className={styles.card}
                variants={ANIMATION_VARIANTS.fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className={styles.cardTitle}>Benefits</h2>
                <ul className={styles.benefitList}>
                  {service.benefits.map((b) => (
                    <li key={b} className={styles.benefitItem}>
                      <span className={styles.benefitBullet} aria-hidden="true">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* FAQ */}
              <motion.div
                className={styles.card}
                variants={ANIMATION_VARIANTS.fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className={styles.cardTitle}>Frequently Asked Questions</h2>
                <Accordion items={serviceFaqs} />
              </motion.div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Book CTA */}
              <div className={styles.infoCard}>
                <Button as={Link} to="/book-appointment" fullWidth size="lg">
                  Book This Service
                </Button>
              </div>

              {/* Emergency */}
              <div className={styles.emergencyCard}>
                <span aria-hidden="true">🚨</span>
                <h4>Mental Health Crisis?</h4>
                <p>If you or someone you know is in immediate danger, call <strong>988</strong> (Suicide & Crisis Lifeline) or <strong>911</strong>.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className={styles.relatedTitle}>Related Services</h2>
            <div className={styles.relatedGrid}>
              {related.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
