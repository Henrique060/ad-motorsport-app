import React, { useState, useEffect } from 'react';
import { CloseIcon, CheckIcon, CalendarIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import './BookingModal.css';

export default function BookingModal({ isOpen, onClose, initialData }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    licensePlate: '',
    serviceName: '',
    date: '',
    timeSlot: 'Morning (08:30 - 12:00)',
    ownerName: '',
    ownerPhone: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        vehicleMake: initialData.vehicleMake || prev.vehicleMake,
        vehicleModel: initialData.vehicleModel || prev.vehicleModel,
        vehicleYear: initialData.vehicleYear || prev.vehicleYear,
        serviceName: initialData.service || initialData.title || prev.serviceName,
        notes: initialData.notes || prev.notes
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const refCode = `AD-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleResetAndClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-header">
          <div className="modal-title">
            {isSubmitted ? t('modal.confirmedTitle', 'Service Reserved Successfully!') : t('modal.title', 'Book Workshop Service')}
          </div>
          <button className="btn-close-modal" onClick={handleResetAndClose}>
            <CloseIcon size={20} />
          </button>
        </div>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.2)',
              color: 'var(--success-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem'
            }}>
              <CheckIcon size={36} />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.5rem', color: '#FFFFFF' }}>
              {t('modal.confirmedTitle', 'Service Reserved Successfully!')}
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              {t('modal.refLabel', 'Your reservation reference code is:')}
            </p>

            <div style={{
              display: 'inline-block',
              background: '#000000',
              border: '2px solid var(--primary-orange)',
              padding: '0.6rem 1.5rem',
              borderRadius: '10px',
              fontSize: '1.5rem',
              fontWeight: 900,
              fontFamily: 'monospace',
              letterSpacing: '0.08em',
              color: 'var(--primary-orange)',
              marginBottom: '1.5rem'
            }}>
              {bookingRef}
            </div>

            <div style={{ 
              background: '#19283E', 
              borderRadius: '14px', 
              padding: '1.25rem', 
              textAlign: 'left',
              fontSize: '0.9rem',
              color: '#CBD5E1',
              marginBottom: '1.75rem',
              boxShadow: '0 6px 16px rgba(0,0,0,0.3)' 
            }}>
              <div><strong>{t('modal.serviceLabel', 'Service:')}</strong> {formData.serviceName || 'Custom Inspection'}</div>
              <div><strong>{t('modal.vehicleLabel', 'Vehicle:')}</strong> {formData.vehicleMake} {formData.vehicleModel} {formData.vehicleYear ? `(${formData.vehicleYear})` : ''}</div>
              {formData.licensePlate && <div><strong>{t('modal.plateLabel', 'Plate:')}</strong> {formData.licensePlate}</div>}
              <div><strong>{t('modal.dateWindowLabel', 'Date & Window:')}</strong> {formData.date || 'Earliest Available'} • {formData.timeSlot}</div>
              <div style={{ marginTop: '0.5rem', color: 'var(--success-green)', fontWeight: 600 }}>
                {t('modal.smsNotice', '✓ SMS & WhatsApp confirmation dispatched to your contact phone.')}
              </div>
            </div>

            <button
              type="button"
              className="btn-submit-booking"
              onClick={handleResetAndClose}
            >
              {t('modal.doneBtn', 'Done')}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">{t('modal.makeLabel', 'Vehicle Make / Brand')}</label>
                <input
                  type="text"
                  required
                  placeholder={t('modal.makePlaceholder', 'e.g. Porsche, BMW, VW')}
                  className="form-input"
                  value={formData.vehicleMake}
                  onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t('modal.modelLabel', 'Model & Year')}</label>
                <input
                  type="text"
                  required
                  placeholder={t('modal.modelPlaceholder', 'e.g. 911 GT3 (2023)')}
                  className="form-input"
                  value={formData.vehicleModel}
                  onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">{t('modal.licensePlateLabel', 'License Plate (Optional)')}</label>
                <input
                  type="text"
                  placeholder="e.g. 24-AD-88"
                  className="form-input"
                  style={{ textTransform: 'uppercase', fontFamily: 'monospace' }}
                  value={formData.licensePlate}
                  onChange={(e) => setFormData({ ...formData, licensePlate: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t('modal.dateLabel', 'Preferred Date')}</label>
                <input
                  type="date"
                  required
                  className="form-input"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">{t('modal.procedureLabel', 'Procedure Requested')}</label>
              <input
                type="text"
                required
                placeholder="e.g. Synthetic Oil Service, 3D Laser Alignment"
                className="form-input"
                value={formData.serviceName}
                onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">{t('modal.windowLabel', 'Drop-off Window')}</label>
              <select
                className="form-select"
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
              >
                <option value="Morning (08:30 - 12:00)">{t('modal.windowMorning', 'Morning Drop-off (08:30 - 12:00)')}</option>
                <option value="Midday (12:00 - 15:00)">{t('modal.windowMidday', 'Midday Slot (12:00 - 15:00)')}</option>
                <option value="Afternoon (15:00 - 18:30)">{t('modal.windowAfternoon', 'Afternoon Drop-off (15:00 - 18:30)')}</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">{t('modal.nameLabel', 'Your Name')}</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="form-input"
                  value={formData.ownerName}
                  onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t('modal.phoneLabel', 'Phone / WhatsApp')}</label>
                <input
                  type="tel"
                  required
                  placeholder="+351 912 345 678"
                  className="form-input"
                  value={formData.ownerPhone}
                  onChange={(e) => setFormData({ ...formData, ownerPhone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">{t('modal.notesLabel', 'Symptoms or Specific Instructions')}</label>
              <textarea
                rows="2"
                placeholder={t('modal.notesPlaceholder', 'Describe any vibrations, noises, warning indicators, or setup requests...')}
                className="form-textarea"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn-submit-booking">
              {t('modal.confirmBtn', 'Confirm Appointment Request')}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
