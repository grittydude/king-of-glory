import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    disabled = false,
    as: Tag = 'button',
    className = '',
    ...props
  },
  ref
) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    loading ? styles.loading : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.div
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.97 }}
      style={{ display: fullWidth ? 'block' : 'inline-block' }}
    >
      <Tag
        ref={ref}
        className={cls}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {loading && <span className={styles.spinner} aria-hidden="true" />}
        <span>{children}</span>
      </Tag>
    </motion.div>
  );
});

export default Button;
