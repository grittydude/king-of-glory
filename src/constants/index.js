export const SITE_NAME = 'King of Glory Healthcare';
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://kingofgloryhealthcare.com';
export const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/contact-kingofgloryhealthcare/booking';

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  {
    label: 'Services',
    path: '/services',
    megaMenu: [
      { label: 'Psychiatric Treatment', path: '/service/psychiatric-treatment' },
      { label: 'Medication Management', path: '/service/medication-management' },
      { label: 'Counseling', path: '/service/counseling-therapy' },
    ],
  },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const FOOTER_LINKS = {
  healthcare: [
    { label: 'Psychiatric Treatment', path: '/service/psychiatric-treatment' },
    { label: 'Medication Management', path: '/service/medication-management' },
    { label: 'Counseling', path: '/service/counseling-therapy' },
  ],
  quickLinks: [
    { label: 'About Us', path: '/about' },
    { label: 'Book Appointment', path: '/book-appointment' },
    { label: 'Contact Us', path: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms' },
  ],
};

export const SOCIAL_LINKS = [
  { icon: 'FaFacebookF', href: 'https://facebook.com', label: 'Facebook' },
  { icon: 'FaInstagram', href: 'https://instagram.com', label: 'Instagram' },
  { icon: 'FaTwitter', href: 'https://twitter.com', label: 'Twitter' },
  { icon: 'FaLinkedinIn', href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: 'FaYoutube', href: 'https://youtube.com', label: 'YouTube' },
];

export const CONTACT_INFO = {
  phone: '(240) 448-7242',
  phone2: '(240) 681-9354',
  fax: '(240) 448-6991',
  email: 'contact@kingofgloryhealthcare.com',
  email2: 'Kingofgloryhealthcare@gmail.com',
  website: 'kingofgloryhealthcare.com',
  address: '8861 Branch Avenue, Clinton, MD 20735 United States',
  hours: 'Mon–Sat: 9:00am – 6:30pm',
  insurance: 'We accept Medicaid and other insurance plans',
  emergency: '988',
};

export const SERVICE_CATEGORIES = [
  'All',
  'Psychiatry',
  'Therapy',
];

export const BLOG_CATEGORIES = [
  'All',
  'Mental Health',
  'Wellness',
  'Therapy',
  'Nutrition',
  'Sleep',
  'Anxiety',
  'Depression',
];

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  },
  staggerContainer: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  },
};
