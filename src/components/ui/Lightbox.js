import { useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Modal from './Modal';
import './Lightbox.css';

/** Full-screen photo viewer with keyboard, button and swipe navigation. */
const Lightbox = ({ photos, index, onIndexChange, onClose }) => {
  const touchStart = useRef(null);
  const photo = photos[index];
  const count = photos.length;

  const go = (step) => onIndexChange((index + step + count) % count);

  // Warm the cache for the neighbours so next/previous feels instant.
  useEffect(() => {
    [index - 1, index + 1].forEach((i) => {
      const neighbour = photos[(i + count) % count];
      if (neighbour) new Image().src = neighbour.full;
    });
  }, [index, photos, count]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') go(1);
    if (event.key === 'ArrowLeft') go(-1);
  };

  const closeOnBackdrop = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1);
    touchStart.current = null;
  };

  return (
    <Modal label="Photo viewer" variant="lightbox" onClose={onClose} onKeyDown={handleKeyDown}>
      <div
        className="lightbox"
        onTouchStart={(event) => (touchStart.current = event.touches[0].clientX)}
        onTouchEnd={handleTouchEnd}
        onClick={closeOnBackdrop}
      >
        <figure className="lightbox__figure" key={photo.slug} onClick={closeOnBackdrop}>
          <img
            className="lightbox__image"
            src={photo.full}
            srcSet={photo.srcSet}
            sizes="100vw"
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
          />
        </figure>

        {count > 1 && (
          <>
            <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => go(-1)} aria-label="Previous photo">
              <FiChevronLeft aria-hidden="true" />
            </button>
            <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => go(1)} aria-label="Next photo" data-autofocus>
              <FiChevronRight aria-hidden="true" />
            </button>
          </>
        )}

        <div className="lightbox__bar">
          <span className="lightbox__counter" aria-live="polite">
            {index + 1} / {count}
          </span>
          {photo.caption && <p className="lightbox__caption">{photo.caption}</p>}
        </div>
      </div>
    </Modal>
  );
};

export default Lightbox;
