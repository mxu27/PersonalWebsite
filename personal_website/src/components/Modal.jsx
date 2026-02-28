import { useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-slate-800 p-6 shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white"
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
