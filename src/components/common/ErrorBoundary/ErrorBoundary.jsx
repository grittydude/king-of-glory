import { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorBoundary.module.css';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <div className={styles.icon} aria-hidden="true">🌿</div>
            <h1 className={styles.title}>Something went wrong</h1>
            <p className={styles.text}>
              We're sorry — an unexpected error occurred. Please try refreshing the page or
              returning to the homepage.
            </p>
            <div className={styles.actions}>
              <button
                className={styles.btnPrimary}
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </button>
              <Link to="/" className={styles.btnSecondary}>
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
