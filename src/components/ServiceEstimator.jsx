import React, { useState } from 'react';
import { CAR_BRANDS, YEARS, WORKSHOP_SERVICES } from '../data/workshopData';
import { GaugeIcon, ClockIcon, ShieldCheckIcon, CheckIcon, ArrowRightIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import './ServiceEstimator.css';

export default function ServiceEstimator({ onBookWithEstimate }) {
  const { t } = useLanguage();
  const [selectedBrandIndex, setSelectedBrandIndex] = useState(0);
  const selectedBrand = CAR_BRANDS[selectedBrandIndex];
  
  const [selectedModel, setSelectedModel] = useState(selectedBrand.models[0]);
  const [selectedYear, setSelectedYear] = useState('2023');
  const [selectedServiceId, setSelectedServiceId] = useState(WORKSHOP_SERVICES[0].id);
  const [mileage, setMileage] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const selectedService = WORKSHOP_SERVICES.find(s => s.id === selectedServiceId) || WORKSHOP_SERVICES[0];

  const handleBrandChange = (e) => {
    const brandIdx = parseInt(e.target.value, 10);
    setSelectedBrandIndex(brandIdx);
    setSelectedModel(CAR_BRANDS[brandIdx].models[0]);
  };

  const handleProceedToBooking = () => {
    onBookWithEstimate({
      vehicleMake: selectedBrand.name,
      vehicleModel: selectedModel,
      vehicleYear: selectedYear,
      service: selectedService.title,
      mileage: mileage,
      notes: symptoms ? `Symptoms/Request: ${symptoms}` : ''
    });
  };

  return (
    <div className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <GaugeIcon size={16} />
          <span>{t('estimator.tag', 'Vehicle Consultation & Planning')}</span>
        </div>
        <h2 className="section-title">{t('estimator.title', 'Service & Turnaround Estimator')}</h2>
        <p className="section-desc">
          {t('estimator.desc', 'Select your vehicle brand, model, year, and requested procedure to calculate technical turnaround time and workshop bay assignment.')}
        </p>
      </div>

      <div className="estimator-card">
        <div className="estimator-grid">
          
          {/* Left Column: Dropdown Selectors */}
          <div className="estimator-controls">
            
            <div className="estimator-step-title">
              <span>1</span> {t('estimator.step1', '1. Vehicle Specifications')}
            </div>

            {/* Brand Dropdown */}
            <div className="form-group">
              <label className="form-label">{t('estimator.brandLabel', 'Vehicle Brand')}</label>
              <select
                className="service-selector-select"
                value={selectedBrandIndex}
                onChange={handleBrandChange}
              >
                {CAR_BRANDS.map((brand, idx) => (
                  <option key={brand.name} value={idx}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Model Dropdown */}
            <div className="form-group">
              <label className="form-label">{t('estimator.modelLabel', 'Car Model')}</label>
              <select
                className="service-selector-select"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
              >
                {selectedBrand.models.map((mod) => (
                  <option key={mod} value={mod}>
                    {mod}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Dropdown */}
            <div className="form-group">
              <label className="form-label">{t('estimator.yearLabel', 'Manufacturing Year')}</label>
              <select
                className="service-selector-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {YEARS.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>

            <div className="estimator-step-title" style={{ marginTop: '1.5rem' }}>
              <span>2</span> {t('estimator.step2', '2. Procedure & Technical Details')}
            </div>

            {/* Service Dropdown */}
            <div className="form-group">
              <label className="form-label">{t('estimator.serviceLabel', 'Required Procedure')}</label>
              <select 
                className="service-selector-select"
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
              >
                {WORKSHOP_SERVICES.map(srv => (
                  <option key={srv.id} value={srv.id}>
                    {srv.title} (~{srv.estimatedHours})
                  </option>
                ))}
              </select>
            </div>

            {/* Mileage & Symptoms */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">{t('estimator.mileageLabel', 'Current Odometer / Mileage (Optional)')}</label>
                <input
                  type="text"
                  placeholder={t('estimator.mileagePlaceholder', 'e.g. 45,000 km')}
                  className="form-input"
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">{t('estimator.symptomsLabel', 'Symptoms or Specific Requests (Optional)')}</label>
                <input
                  type="text"
                  placeholder={t('estimator.symptomsPlaceholder', 'e.g. Vibration under braking, track alignment setup...')}
                  className="form-input"
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                />
              </div>
            </div>

          </div>

          {/* Right Column: Turnaround & Scope Summary (NO PRICES) */}
          <div className="estimator-summary-box">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 700 }}>
                  {t('estimator.scopeTitle', 'Technical Scope Overview')}
                </span>
                <span style={{ 
                  background: 'rgba(234, 86, 46, 0.2)', 
                  color: 'var(--primary-orange)', 
                  padding: '4px 10px', 
                  borderRadius: '6px', 
                  fontSize: '0.75rem', 
                  fontWeight: 800 
                }}>
                  {selectedService.badge}
                </span>
              </div>

              {/* Vehicle Highlight Card */}
              <div className="estimator-vehicle-preview">
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--primary-orange)', fontWeight: 800 }}>
                  {t('estimator.selectedVehicle', 'Selected Vehicle')}
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#FFFFFF', marginTop: '2px' }}>
                  {selectedBrand.name} {selectedModel}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {t('estimator.modelYear', 'Model Year')}: {selectedYear} {mileage ? `• ${mileage}` : ''}
                </div>
              </div>

              {/* Turnaround & Warranty */}
              <div className="quote-highlight" style={{ paddingTop: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.4rem' }}>
                  <ClockIcon size={24} style={{ color: 'var(--primary-orange)' }} />
                  <span>{t('estimator.estTurnaround', 'Est. Turnaround')}: {selectedService.estimatedHours}</span>
                </div>
                <div className="quote-meta">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ShieldCheckIcon size={15} /> {selectedService.warranty}
                  </span>
                  <span>• OEM High-Grade Parts</span>
                </div>
              </div>

              <div style={{ marginBottom: '0.75rem', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: '#FFFFFF' }}>
                {t('estimator.includedTitle', 'Included in this procedure:')}
              </div>

              <ul className="quote-checklist">
                {selectedService.details.map((detail, idx) => (
                  <li key={idx}>
                    <CheckIcon size={16} style={{ color: 'var(--primary-orange)', flexShrink: 0 }} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              type="button"
              className="btn-lock-quote"
              onClick={handleProceedToBooking}
            >
              <span>{t('estimator.scheduleBtn', 'Schedule This Procedure')}</span>
              <ArrowRightIcon size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
