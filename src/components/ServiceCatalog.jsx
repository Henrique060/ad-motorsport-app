import React, { useState } from 'react';
import { WORKSHOP_SERVICES } from '../data/workshopData';
import { WrenchIcon, ClockIcon, ShieldCheckIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import './ServiceCatalog.css';

export default function ServiceCatalog({ onOpenBooking }) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: t('services.filters.all', 'All Services') },
    { id: 'maintenance', label: t('services.filters.maintenance', 'Routine Care') },
    { id: 'mechanical', label: t('services.filters.mechanical', 'Mechanical & Brakes') },
    { id: 'diagnostics', label: t('services.filters.diagnostics', 'ECU & Diagnostics') },
    { id: 'motorsport', label: t('services.filters.motorsport', 'Motorsport & Dyno') },
  ];

  const filteredServices = activeCategory === 'all'
    ? WORKSHOP_SERVICES
    : WORKSHOP_SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <WrenchIcon size={16} />
          <span>{t('services.tag', 'Workshop Capabilities')}</span>
        </div>
        <h2 className="section-title">{t('services.title', 'Specialist Services & Technical Scope')}</h2>
        <p className="section-desc">
          {t('services.desc', 'Engineered for everyday vehicle reliability and competition performance. Every procedure includes an itemized digital inspection report.')}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="catalog-filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Catalog Grid */}
      <div className="catalog-grid">
        {filteredServices.map((service) => (
          <div key={service.id} className="service-card">
            
            <div className="service-card-top">
              <span className="service-card-badge">{service.badge}</span>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.shortDesc}</p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.75rem' }}>
                {service.details.slice(0, 3).map((d, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                    <span style={{ color: 'var(--primary-orange)' }}>•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="service-meta-row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#E2E8F0', fontWeight: 600 }}>
                  <ShieldCheckIcon size={16} style={{ color: 'var(--primary-orange)' }} />
                  <span>{service.warranty}</span>
                </div>
                <div className="service-duration-badge">
                  <ClockIcon size={15} />
                  <span>{service.estimatedHours}</span>
                </div>
              </div>

              <button
                type="button"
                className="btn-card-book"
                onClick={() => onOpenBooking(service)}
              >
                <span>{t('services.bookProcedure', 'Book This Procedure')}</span>
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
