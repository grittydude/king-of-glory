import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { sanitizeInput } from '../../../utils/helpers';
import { useApp } from '../../../context/AppContext';
import styles from './ContactForm.module.css';

const SERVICES = [
  'Psychiatric Treatment',
  'Medication Management',
  'Counseling',
  'Other',
];

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const { showToast } = useApp();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = async (data) => {
    setSubmitting(true);
    // Sanitize inputs before sending
    const sanitized = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      phone: sanitizeInput(data.phone || ''),
      service: sanitizeInput(data.service),
      message: sanitizeInput(data.message),
    };

    // Simulated API call — replace with real EmailJS or backend call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitting(false);
    setSuccess(true);
    reset();
    showToast('Your message has been sent! We will be in touch within 24 hours.');
    setTimeout(() => setSuccess(false), 6000);
  };

  if (success) {
    return (
      <motion.div
        className={styles.successState}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className={styles.successIcon} aria-hidden="true">✅</div>
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. A member of our team will contact you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
    >
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="cf-name" className={styles.label}>
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            placeholder="John Smith"
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.name ? 'cf-name-error' : undefined}
            {...register('name', {
              required: 'Full name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
              maxLength: { value: 80, message: 'Name is too long' },
            })}
          />
          {errors.name && (
            <span id="cf-name-error" className={styles.error} role="alert">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="cf-email" className={styles.label}>
            Email Address <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            placeholder="john@example.com"
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? 'cf-email-error' : undefined}
            {...register('email', {
              required: 'Email address is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address',
              },
            })}
          />
          {errors.email && (
            <span id="cf-email-error" className={styles.error} role="alert">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="cf-phone" className={styles.label}>Phone Number</label>
          <input
            id="cf-phone"
            type="tel"
            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            placeholder="+1 (555) 000-0000"
            autoComplete="tel"
            aria-describedby={errors.phone ? 'cf-phone-error' : undefined}
            {...register('phone', {
              pattern: {
                value: /^[+\d\s\-().]{7,20}$/,
                message: 'Please enter a valid phone number',
              },
            })}
          />
          {errors.phone && (
            <span id="cf-phone-error" className={styles.error} role="alert">
              {errors.phone.message}
            </span>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="cf-service" className={styles.label}>
            Service Interested In <span aria-hidden="true">*</span>
          </label>
          <select
            id="cf-service"
            className={`${styles.input} ${styles.select} ${errors.service ? styles.inputError : ''}`}
            aria-required="true"
            aria-describedby={errors.service ? 'cf-service-error' : undefined}
            {...register('service', { required: 'Please select a service' })}
          >
            <option value="">Select a service...</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && (
            <span id="cf-service-error" className={styles.error} role="alert">
              {errors.service.message}
            </span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-message" className={styles.label}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-message"
          className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          placeholder="Tell us briefly about your needs or questions..."
          rows={5}
          aria-required="true"
          aria-describedby={errors.message ? 'cf-message-error' : undefined}
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 10, message: 'Message must be at least 10 characters' },
            maxLength: { value: 2000, message: 'Message is too long (max 2000 characters)' },
          })}
        />
        {errors.message && (
          <span id="cf-message-error" className={styles.error} role="alert">
            {errors.message.message}
          </span>
        )}
      </div>

      <p className={styles.privacy}>
        Your information is kept strictly confidential. We will never share your data with third
        parties. See our{' '}
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>.
      </p>

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={submitting}
        aria-label="Send message"
      >
        {submitting ? (
          <span className={styles.spinner} aria-hidden="true" />
        ) : (
          <FaPaperPlane aria-hidden="true" />
        )}
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
