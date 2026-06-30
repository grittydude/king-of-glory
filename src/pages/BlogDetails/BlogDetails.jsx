import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaClock, FaTag, FaArrowLeft, FaFacebookF, FaTwitter, FaLinkedinIn, FaLink } from 'react-icons/fa';
import BlogCard from '../../components/ui/BlogCard/BlogCard';
import { getPostBySlug, blogPosts } from '../../data/blog';
import { ANIMATION_VARIANTS, SITE_NAME } from '../../constants';
import styles from './BlogDetails.module.css';

export default function BlogDetails() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/404" replace />;

  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);
  const siteUrl = `https://kingofgloryhealthcare.com/blog/${slug}`;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(siteUrl);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Person', name: post.author.name },
    datePublished: post.date,
    image: post.image,
    publisher: { '@type': 'Organization', name: SITE_NAME },
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | {SITE_NAME}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={siteUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src={post.image} alt={post.title} loading="eager" />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={ANIMATION_VARIANTS.fadeInUp}>
              <Link to="/blog" className={styles.backLink}>
                <FaArrowLeft aria-hidden="true" /> Back to Blog
              </Link>
            </motion.div>
            <motion.div className={styles.meta} variants={ANIMATION_VARIANTS.fadeInUp}>
              <span className={styles.category}>
                <FaTag aria-hidden="true" /> {post.category}
              </span>
              <span className={styles.readTime}>
                <FaClock aria-hidden="true" /> {post.readTime}
              </span>
              <span className={styles.date}>{post.date}</span>
            </motion.div>
            <motion.h1 className={styles.title} variants={ANIMATION_VARIANTS.fadeInUp}>
              {post.title}
            </motion.h1>
            <motion.div className={styles.authorBlock} variants={ANIMATION_VARIANTS.fadeInUp}>
              <img src={post.author.avatar} alt={post.author.name} className={styles.authorAvatar} />
              <div>
                <span className={styles.authorName}>{post.author.name}</span>
                <span className={styles.authorRole}>{post.author.role}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Article */}
            <article className={styles.article} aria-label="Article content">
              <p className={styles.lead}>{post.excerpt}</p>
              <div
                className={styles.body}
                dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
              />
              {/* Tags */}
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}># {tag}</span>
                ))}
              </div>
              {/* Share */}
              <div className={styles.share}>
                <span className={styles.shareLabel}>Share this article:</span>
                <div className={styles.shareLinks}>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareBtn}
                    aria-label="Share on Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(siteUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareBtn}
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareBtn}
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <button
                    className={styles.shareBtn}
                    onClick={handleCopyLink}
                    aria-label="Copy link to clipboard"
                    type="button"
                  >
                    <FaLink />
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.authorCard}>
                <img src={post.author.avatar} alt={post.author.name} className={styles.sidebarAvatar} />
                <h3 className={styles.sidebarAuthorName}>{post.author.name}</h3>
                <p className={styles.sidebarAuthorRole}>{post.author.role}</p>
                <p className={styles.sidebarAuthorBio}>
                  A member of the King of Glory Healthcare clinical team, bringing evidence-based insights to help you live your best life.
                </p>
              </div>
              <div className={styles.recentCard}>
                <h3 className={styles.sidebarTitle}>Recent Articles</h3>
                {blogPosts.slice(0, 4).filter((p) => p.id !== post.id).slice(0, 3).map((p) => (
                  <Link key={p.id} to={`/blog/${p.slug}`} className={styles.recentItem}>
                    <img src={p.image} alt={p.title} className={styles.recentThumb} loading="lazy" />
                    <div>
                      <span className={styles.recentTitle}>{p.title}</span>
                      <span className={styles.recentDate}>{p.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="section" style={{ background: 'var(--gradient-light)' }}>
          <div className="container">
            <h2 className={styles.relatedTitle}>Related Articles</h2>
            <div className={styles.relatedGrid}>
              {related.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/**
 * Very lightweight markdown-to-HTML converter for the article body.
 * In production, use a library like marked or remark.
 */
function markdownToHtml(md) {
  if (!md) return '';
  return md
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/^\| (.+) \|$/gm, (_, row) => `<tr>${row.split(' | ').map((cell) => `<td>${cell}</td>`).join('')}</tr>`)
    .replace(/(<tr>[\s\S]*?<\/tr>)/g, '<table>$1</table>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|t|u|o])(.+)$/gm, '$1')
    .trim();
}
