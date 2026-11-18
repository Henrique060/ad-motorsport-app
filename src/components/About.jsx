import React, { useState } from 'react';
import { PhoneIcon, MapPinIcon, ShieldCheckIcon, CheckIcon, ArrowRightIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

export default function About({ onOpenBooking }) {
  const { t } = useLanguage();
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const handleSendEmail = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:service@ad-motorsport.com?subject=${encodeURIComponent(emailSubject || 'Inquiry - AD Motorsport')}&body=${encodeURIComponent(emailBody || 'Hello AD Motorsport team,')}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <ShieldCheckIcon size={16} />
          <span>{t('about.tag', 'About AD Motorsport')}</span>
        </div>
        <h2 className="section-title">{t('about.title', 'Engineering Standards & Facility')}</h2>
        <p className="section-desc">
          {t('about.desc', 'High-tolerance motorsport preparation and reliable everyday automotive repair. Certified master technicians and specialized tooling.')}
        </p>
      </div>

      <div className="about-grid">
        {/* Story Card - Blue box with slight shadow for visual hierarchy */}
        <div className="about-card">
          <div>
            <h3 className="about-card-title">
              {t('about.storyTitle', 'The Workshop Standard')}
            </h3>
            <p className="about-card-text">
              {t('about.storyP1', 'At AD Motorsport, every vehicle is serviced with surgical precision. From a commuter hatchback undergoing routine synthetic oil service to a circuit-spec Porsche requiring corner balancing, our technicians adhere strictly to factory torque specs and digital multi-point checklists.')}
            </p>
            <p className="about-card-text">
              {t('about.storyP2', 'No guesswork, no unnecessary part replacement. Clean workshop bays, calibrated diagnostic equipment, and direct communication with the technician handling your car.')}
            </p>

            <div className="about-check-list">
              <div className="about-check-item">
                <CheckIcon size={16} style={{ color: 'var(--primary-orange)', flexShrink: 0 }} />
                <span>{t('about.equipment1', 'Hunter 3D Hawkeye Laser Alignment System')}</span>
              </div>
              <div className="about-check-item">
                <CheckIcon size={16} style={{ color: 'var(--primary-orange)', flexShrink: 0 }} />
                <span>{t('about.equipment2', 'Dynojet 4WD Synchronized Dynamometer')}</span>
              </div>
              <div className="about-check-item">
                <CheckIcon size={16} style={{ color: 'var(--primary-orange)', flexShrink: 0 }} />
                <span>{t('about.equipment3', 'Authorized OEM Dealer-Level Diagnostic Suites')}</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <button
              type="button"
              className="btn-hero-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => onOpenBooking()}
            >
              <span>{t('about.scheduleInspection', 'Schedule an Inspection')}</span>
              <ArrowRightIcon size={18} />
            </button>
          </div>
        </div>

        {/* Email & Contact Card - Blue box with slight shadow */}
        <div className="about-card">
          <div>
            <h3 className="about-card-title">
              {t('about.contactTitle', 'Contact & Technical Inquiry')}
            </h3>
            <p className="about-card-text">
              {t('about.contactDesc', 'Have a question regarding diagnostic fault codes, maintenance intervals, or circuit setup? Contact our technical team directly:')}
            </p>

            <form onSubmit={handleSendEmail} className="about-contact-form">
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">{t('about.subjectLabel', 'Subject')}</label>
                <input
                  type="text"
                  placeholder={t('about.subjectPlaceholder', 'e.g. Brake upgrade consultation / Fault code diagnosis')}
                  className="form-input"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">{t('about.messageLabel', 'Message / Details')}</label>
                <textarea
                  rows="3"
                  placeholder={t('about.messagePlaceholder', 'Describe your vehicle specifications and required assistance...')}
                  className="form-textarea"
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn-lock-quote" style={{ marginTop: '0.25rem' }}>
                <span>{t('about.sendEmailBtn', 'Send Direct Email')}</span>
                <ArrowRightIcon size={18} />
              </button>
            </form>
          </div>

          <div className="about-info-rows">
            <div className="about-info-row">
              <span className="about-info-label">{t('about.emailLabel', 'Email:')}</span>
              <a href="mailto:service@ad-motorsport.com" className="about-info-link">
                service@ad-motorsport.com
              </a>
            </div>
            <div className="about-info-row">
              <span className="about-info-label">{t('about.phoneLabel', 'Phone:')}</span>
              <a href="tel:+351912345678" className="about-info-link">
                +351 912 345 678
              </a>
            </div>
            <div className="about-info-row">
              <span className="about-info-label">{t('about.hoursLabel', 'Hours:')}</span>
              <span style={{ color: 'var(--text-secondary)' }}>{t('about.hoursVal', 'Mon – Fri: 08:00 – 19:00 | Sat: 08:30 – 13:30')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Location Component - Fully responsive with visible button on mobile */}
      <div className="maps-container-card">
        <div className="maps-header-row">
          <div className="maps-title-block">
            <div className="maps-title-row">
              <MapPinIcon size={20} style={{ color: 'var(--primary-orange)' }} />
              <h3 className="maps-title">
                {t('about.locationTitle', 'Workshop Location')}
              </h3>
            </div>
            <p className="maps-desc">
              {t('about.locationDesc', 'Av. Motorsport Tech Park, Bay 4-6, Industrial Park (Direct highway access, wide trailer turnaround)')}
            </p>
          </div>

          {/* Prominently visible and styled for mobile and desktop */}
          <a
            href="https://maps.google.com/?q=Lisbon+Motorsport"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-open-maps"
            title="Open in Google Maps"
          >
            <span>{t('about.openMapsBtn', 'Open in Google Maps ↗')}</span>
          </a>
        </div>

        {/* Responsive Google Maps Embed */}
        <div className="maps-iframe-wrapper">
          <iframe
            title="AD Motorsport Workshop Location"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'contrast(1.05)' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Lisbon+Motorsport+Park&t=&z=14&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
