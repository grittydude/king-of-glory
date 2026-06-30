# King of Glory Healthcare Website

A production-ready healthcare website built with React 19, Vite, Framer Motion, and more.

## Tech Stack

- **React 19** — UI library
- **Vite** — Build tool
- **React Router DOM v6** — Client-side routing
- **CSS Modules** — Scoped styles
- **Framer Motion** — Animations
- **Swiper.js** — Testimonial & image sliders
- **React Hook Form** — Form validation
- **React Helmet Async** — SEO & meta tags
- **React Icons** — Icon library
- **Axios** — HTTP client
- **Calendly Embed** — Appointment booking

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone / open the project
cd king-of-glory-website

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Fill in your values in .env, then start dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview   # preview production build locally
```

## Environment Variables

See `.env.example` for all available variables:

| Variable | Description |
|---|---|
| `VITE_CALENDLY_URL` | Your Calendly scheduling URL |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID for contact form |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_GOOGLE_MAPS_API_KEY` | Google Maps API key (optional) |
| `VITE_SITE_URL` | Canonical site URL |

## Project Structure

```
src/
├── assets/           # Static images & icons
├── components/
│   ├── layout/       # Navbar, Footer, Layout
│   ├── common/       # Button, Card, Hero, Counter…
│   └── ui/           # DoctorCard, ServiceCard, Testimonials…
├── context/          # AppContext (global state)
├── data/             # Mock data (services, doctors, blog…)
├── hooks/            # Custom React hooks
├── pages/            # One folder per route
├── routes/           # Route definitions
├── services/         # Axios API layer
├── styles/           # Global CSS & variables
└── utils/            # Helper functions
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/services` | All Services |
| `/service/:slug` | Service Detail |
| `/team` | Healthcare Team |
| `/blog` | Health Blog |
| `/blog/:slug` | Blog Article |
| `/contact` | Contact |
| `/book-appointment` | Book Appointment (Calendly) |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `*` | 404 Not Found |

## Customization

- **Colors** — Edit `src/styles/variables.css`
- **Content** — Edit files in `src/data/`
- **Calendly** — Set `VITE_CALENDLY_URL` in `.env`
- **Contact form** — Wire up EmailJS in `src/services/emailService.js`

## License

© 2024 King of Glory Healthcare. All Rights Reserved.
