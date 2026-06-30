import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader/PageHeader';
import BlogCard from '../../components/ui/BlogCard/BlogCard';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import Pagination from '../../components/common/Pagination/Pagination';
import { blogPosts } from '../../data/blog';
import { BLOG_CATEGORIES, ANIMATION_VARIANTS, SITE_NAME } from '../../constants';
import styles from './Blog.module.css';

const POSTS_PER_PAGE = 6;

export default function Blog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = category === 'All' ? blogPosts : blogPosts.filter((p) => p.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.author.name.toLowerCase().includes(q)
      );
    }
    return list;
  }, [query, category]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setPage(1);
  };

  return (
    <>
      <Helmet>
        <title>Health Blog | {SITE_NAME}</title>
        <meta name="description" content="Expert articles on mental health, wellness, therapy, anxiety, depression, sleep hygiene, and more from the King of Glory Healthcare clinical team." />
        <link rel="canonical" href="https://kingofgloryhealthcare.com/blog" />
      </Helmet>

      <PageHeader
        title="Health Updates You Need to Know"
        subtitle="Evidence-based articles, wellness tips, and mental health insights from our clinical team."
        breadcrumbs={[{ label: 'Blog', path: '/blog' }]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.controls}>
            <SearchBar
              value={query}
              onChange={(v) => { setQuery(v); setPage(1); }}
              onClear={() => { setQuery(''); setPage(1); }}
              placeholder="Search articles…"
              label="Search blog posts"
            />
            <div className={styles.categories} role="group" aria-label="Filter by category">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.catBtn} ${category === cat ? styles.active : ''}`}
                  onClick={() => handleCategoryChange(cat)}
                  aria-pressed={category === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <p className={styles.count} aria-live="polite">
            {filtered.length} article{filtered.length !== 1 ? 's' : ''}
          </p>

          {paginated.length > 0 ? (
            <motion.div
              className={styles.grid}
              variants={ANIMATION_VARIANTS.staggerContainer}
              initial="hidden"
              animate="visible"
              key={`${category}-${query}-${page}`}
            >
              {paginated.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </motion.div>
          ) : (
            <div className={styles.empty}>
              <span aria-hidden="true">📰</span>
              <p>No articles found. Try a different search or category.</p>
            </div>
          )}

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </section>
    </>
  );
}
