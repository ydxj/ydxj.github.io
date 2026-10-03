import { useEffect } from 'react';

let locks = 0;

/** Prevents the page behind an overlay from scrolling, without layout jump. */
export default function useScrollLock(active) {
  useEffect(() => {
    if (!active) return undefined;

    const { body, documentElement } = document;
    if (locks === 0) {
      const scrollbar = window.innerWidth - documentElement.clientWidth;
      body.style.overflow = 'hidden';
      body.style.paddingRight = scrollbar ? `${scrollbar}px` : '';
    }
    locks += 1;

    return () => {
      locks -= 1;
      if (locks === 0) {
        body.style.overflow = '';
        body.style.paddingRight = '';
      }
    };
  }, [active]);
}
