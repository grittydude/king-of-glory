import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import styles from './Accordion.module.css';

export default function Accordion({ items = [], allowMultiple = false }) {
  const [openIds, setOpenIds] = useState(new Set());

  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={styles.list} role="list">
      {items.map((item, i) => {
        const isOpen = openIds.has(item.id ?? i);
        const itemId = item.id ?? i;
        const contentId = `accordion-content-${itemId}`;
        const headerId = `accordion-header-${itemId}`;

        return (
          <div
            key={itemId}
            className={`${styles.item} ${isOpen ? styles.open : ''}`}
            role="listitem"
          >
            <button
              id={headerId}
              className={styles.trigger}
              onClick={() => toggle(itemId)}
              aria-expanded={isOpen}
              aria-controls={contentId}
            >
              <span className={styles.question}>{item.question}</span>
              <span className={styles.icon} aria-hidden="true">
                {isOpen ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className={styles.answer}>
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
