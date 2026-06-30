import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader/PageHeader';
import DoctorCard from '../../components/ui/DoctorCard/DoctorCard';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import CTA from '../../components/ui/CTA/CTA';
import { doctors } from '../../data/doctors';
import { ANIMATION_VARIANTS, SITE_NAME } from '../../constants';
import styles from './Team.module.css';

const SPECIALIZATIONS = ['All', 'Psychiatry', 'Therapy', 'Child Psychology', 'Trauma', 'Addiction', 'Integrative'];

export default function Team() {
  const [query, setQuery] = useState('');
  const [activeSpec, setActiveSpec] = useState('All');

  const filtered = useMemo(() => {
    let list = doctors;
    if (activeSpec !== 'All') {
      list = list.filter((d) => d.specialization.toLowerCase().includes(activeSpec.toLowerCase()));
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.specialization.toLowerCase().includes(q) ||
          d.languages.some((l) => l.toLowerCase().includes(q))
      );
    }
    return list;
  }, [query, activeSpec]);

  return (
    <>
      <Helmet>
        <title>Our Healthcare Team | {SITE_NAME}</title>
        <meta name="description" content="Meet King of Glory Healthcare's team of board-certified psychiatrists, licensed therapists, and clinical specialists dedicated to your mental wellness." />
        <link rel="canonical" href="https://kingofgloryhealthcare.com/team" />
      </Helmet>

      <PageHeader
        title="Meet Our Healthcare Team"
        subtitle="Compassionate experts with decades of combined experience, united by a passion for transforming lives through exceptional mental health care."
        breadcrumbs={[{ label: 'Team', path: '/team' }]}
      />

      <section className="section">
        <div className="container">
          {/* Controls */}
          <div className={styles.controls}>
            <SearchBar
              value={query}
              onChange={setQuery}
              onClear={() => setQuery('')}
              placeholder="Search by name, specialization, or language…"
              label="Search doctors"
            />
            <div className={styles.filters} role="group" aria-label="Filter by specialization">
              {SPECIALIZATIONS.map((s) => (
                <button
                  key={s}
                  className={`${styles.filterBtn} ${activeSpec === s ? styles.active : ''}`}
                  onClick={() => setActiveSpec(s)}
                  aria-pressed={activeSpec === s}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <span>👨‍⚕️</span>
              <p>No doctors found. Try adjusting your search.</p>
              <button onClick={() => { setQuery(''); setActiveSpec('All'); }} className={styles.resetBtn}>
                Reset Filters
              </button>
            </div>
          ) : (
            <motion.div
              className={styles.grid}
              variants={ANIMATION_VARIANTS.staggerContainer}
              initial="hidden"
              animate="visible"
              key={`${activeSpec}-${query}`}
            >
              {filtered.map((doc) => (
                <DoctorCard key={doc.id} doctor={doc} />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <CTA
        title="Ready to Meet Your Clinician?"
        subtitle="Schedule a confidential appointment with one of our specialists and take the first step toward wellness."
      />
    </>
  );
}
