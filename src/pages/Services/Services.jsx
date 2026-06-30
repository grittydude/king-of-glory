import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader/PageHeader';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import ServiceCard from '../../components/ui/ServiceCard/ServiceCard';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import CTA from '../../components/ui/CTA/CTA';
import { services } from '../../data/services';
import { SERVICE_CATEGORIES, ANIMATION_VARIANTS, SITE_NAME } from '../../constants';
import styles from './Services.module.css';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let list = activeCategory === 'All' ? services : services.filter((s) => s.category === activeCategory);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.shortDesc.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, query]);

  return (
    <>
      <Helmet>
        <title>Mental Health Services | {SITE_NAME}</title>
        <meta name="description" content="Explore our comprehensive range of mental health services including psychiatric treatment, counseling, medication management, family therapy, anxiety treatment, and more." />
        <link rel="canonical" href="https://kingofgloryhealthcare.com/services" />
      </Helmet>

      <PageHeader
        title="Our Healthcare Services"
        subtitle="Comprehensive, evidence-based mental health services tailored to your unique needs — all under one roof."
        breadcrumbs={[{ label: 'Services', path: '/services' }]}
      />

      <section className="section">
        <div className="container">
          {/* Search & Filter */}
          <div className={styles.controls}>
            <div className={styles.searchWrapper}>
              <SearchBar
                value={query}
                onChange={setQuery}
                onClear={() => setQuery('')}
                placeholder="Search services..."
                label="Search mental health services"
              />
            </div>
            <div className={styles.filters} role="group" aria-label="Filter services by category">
              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className={styles.resultsCount} aria-live="polite" aria-atomic="true">
            {filtered.length === 0
              ? 'No services found. Try a different search or category.'
              : `Showing ${filtered.length} service${filtered.length !== 1 ? 's' : ''}`}
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <motion.div
              className={styles.grid}
              variants={ANIMATION_VARIANTS.staggerContainer}
              initial="hidden"
              animate="visible"
              key={`${activeCategory}-${query}`}
            >
              {filtered.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </motion.div>
          ) : (
            <div className={styles.empty}>
              <span aria-hidden="true">🔍</span>
              <p>No services match your search. Try a different keyword or reset the filter.</p>
              <button
                className={styles.resetBtn}
                onClick={() => { setQuery(''); setActiveCategory('All'); }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CTA
        title="Not Sure Which Service Is Right for You?"
        subtitle="Book a free 15-minute consultation with one of our clinicians. We will help you find the best path to wellness."
        primaryLabel="Book a Free Consultation"
      />
    </>
  );
}
