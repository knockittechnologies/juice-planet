'use client';

import { useEffect, useRef } from 'react';
import styles from './MerchModal.module.css';

export default function MerchModal({ open, onClose }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);

    // lock background scroll while open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Merch store coming soon"
    >
      <div className={styles.card} ref={cardRef} onClick={(e) => e.stopPropagation()}>
        <img src="/images/merch-coming-soon.png" alt="Our merch store is coming soon! Get ready for exclusive drops, fresh styles, and Juice Planet vibes." />
        <button className={styles.close} onClick={onClose} aria-label="Close">
          ×
        </button>
      </div>
    </div>
  );
}
