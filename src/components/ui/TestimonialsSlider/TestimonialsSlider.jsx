import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../../../data/testimonials';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './TestimonialsSlider.module.css';

function StarRating({ count = 5 }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} aria-hidden="true" />
      ))}
    </div>
  );
}

export default function TestimonialsSlider() {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={24}
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          640: { slidesPerView: 1 },
          900: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className={styles.swiper}
        aria-label="Patient testimonials"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id} className={styles.slide}>
            <article className={styles.card} aria-label={`Testimonial from ${t.name}`}>
              <FaQuoteLeft className={styles.quoteIcon} aria-hidden="true" />
              <StarRating count={t.rating} />
              <blockquote className={styles.quote}>
                <p>"{t.quote}"</p>
              </blockquote>
              <div className={styles.author}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  className={styles.avatar}
                  loading="lazy"
                  width="48"
                  height="48"
                />
                <div>
                  <cite className={styles.name}>{t.name}</cite>
                  <span className={styles.role}>{t.role}</span>
                </div>
                <span className={styles.service}>{t.service}</span>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
