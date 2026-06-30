import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Request interceptor — could add auth tokens here
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response interceptor — normalize errors
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message || 'An unknown error occurred.';
    return Promise.reject(new Error(message));
  }
);

/**
 * Submit the contact form.
 * In production, wire this to EmailJS, a backend endpoint, or a serverless function.
 */
export async function submitContactForm(data) {
  // Placeholder — replace with real API call
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1500));
}

/**
 * Subscribe to newsletter.
 */
export async function subscribeNewsletter(email) {
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 800));
}

export default api;
