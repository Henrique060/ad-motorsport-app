import React from 'react';
import { REVIEWS } from '../data/workshopData';
import { StarIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import './Reviews.css';

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <StarIcon size={16} fill="var(--primary-orange)" />
          <span>{t('reviews.tag', 'Verified Driver Feedback')}</span>
        </div>
        <h2 className="section-title">{t('reviews.title', 'Trusted by Enthusiasts & Commuters')}</h2>
        <p className="section-desc">
          {t('reviews.desc', 'Over 480 verified five-star reviews on Google and automotive forums.')}
        </p>
      </div>

      <div className="reviews-grid">
        {REVIEWS.map((review, idx) => (
          <div key={idx} className="review-card">
            <div className="review-stars">
              {[...Array(review.rating)].map((_, i) => (
                <StarIcon key={i} size={18} fill="#FBBF24" />
              ))}
            </div>
            <p className="review-text">"{review.text}"</p>
            <div>
              <div className="review-author">{review.author}</div>
              <div className="review-car">{review.car} • {review.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
