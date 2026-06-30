import { useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import styles from './SearchBar.module.css';

export default function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = 'Search...',
  label = 'Search',
}) {
  const inputRef = useRef(null);

  return (
    <div className={styles.wrapper} role="search">
      <label htmlFor="search-input" className="sr-only">{label}</label>
      <FaSearch className={styles.icon} aria-hidden="true" />
      <input
        id="search-input"
        ref={inputRef}
        type="search"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={label}
        autoComplete="off"
        spellCheck="false"
      />
      {value && (
        <button
          className={styles.clearBtn}
          onClick={() => { onClear?.(); inputRef.current?.focus(); }}
          aria-label="Clear search"
          type="button"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
}
