import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';
import useScrollLock from '../../hooks/useScrollLock';
import './Modal.css';

const FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, select, iframe, video, [tabindex]:not([tabindex="-1"])';

/**
 * Accessible overlay: renders in a portal, traps focus, closes on Escape or
 * backdrop click, locks page scroll and restores focus to the trigger.
 */
const Modal = ({ label, onClose, onKeyDown, variant = 'panel', children }) => {
  const dialogRef = useRef(null);
  const onCloseRef = useRef(onClose);
  const onKeyDownRef = useRef(onKeyDown);
  onCloseRef.current = onClose;
  onKeyDownRef.current = onKeyDown;

  useScrollLock(true);

  useEffect(() => {
    const previous = document.activeElement;
    const dialog = dialogRef.current;
    (dialog.querySelector('[data-autofocus]') || dialog).focus({ preventScroll: true });

    const handleKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key === 'Tab') {
        const nodes = Array.from(dialog.querySelectorAll(FOCUSABLE));
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
      onKeyDownRef.current?.(event);
    };

    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      previous?.focus?.({ preventScroll: true });
    };
  }, []);

  return createPortal(
    <div
      className={`modal modal--${variant}`}
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div ref={dialogRef} className="modal__dialog" role="dialog" aria-modal="true" aria-label={label} tabIndex={-1}>
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
          <FiX aria-hidden="true" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
