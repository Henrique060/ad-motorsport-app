import React from 'react';
import { CalendarIcon, GaugeIcon, ArrowRightIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import WorkshopFacility from './WorkshopFacility';
import Reviews from './Reviews';
import './Hero.css';

export default function Hero({ onOpenBooking, onSelectTab }) {
  const { t } = useLanguage();

  const metrics = [
    { value: '15+', label: t('hero.metrics.experience', '15+ Years Track & Street') },
    { value: '12,400+', label: t('hero.metrics.vehicles', '12,400+ Vehicles Serviced') },
    { value: '30 min', label: t('hero.metrics.diagnostic', '30-Min Express Diagnostics') },
    { value: '100%', label: t('hero.metrics.parts', '100% OEM & High-Grade Parts') },
  ];

  return (
    <div id="hero" className="hero-section">
      <div className="hero-background-pattern"></div>
      <div className="hero-content">
        
        {/* Prominent Logo on a clean white emblem plate for maximum contrast with zero drop-shadow */}
        <div className="hero-logo-plate">
          <img 
            src={`${import.meta.env.BASE_URL}ad-motorsport-logo.png`} 
            alt="AD Motorsport" 
            className="hero-center-logo" 
          />
        </div>

        {/* Bold Headline */}
        <h1 className="hero-title">
          {t('hero.title', 'Precision Car Repair & Motorsport Performance')}
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          {t('hero.subtitle', 'Certified automotive engineering, Hunter 3D laser alignment, dealer-level ECU diagnostics, and custom track preparation. Direct technical communication and zero guesswork.')}
        </p>

        {/* CTAs */}
        <div className="hero-cta-group">
          

          <button 
            type="button"
            className="btn-hero-secondary"
            onClick={() => onSelectTab('about')}
          >
            <span>{t('hero.aboutBtn', 'Location & About')}</span>
            <ArrowRightIcon size={18} />
          </button>
        </div>

        {/* Metrics Bar */}
        <div className="hero-metrics-bar">
          {metrics.map((metric, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Facilities & Reviews integrated directly into the Home view */}
      <div style={{ marginTop: '3rem' }}>
        <WorkshopFacility />
        <Reviews />
      </div>
    </div>
  );
}
