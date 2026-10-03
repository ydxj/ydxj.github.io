import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Fades/translates every `[data-reveal]` element inside `scopeRef` into view
 * as it enters the viewport. Skipped entirely when the user prefers reduced
 * motion, so content is never hidden without animation to reveal it.
 */
export default function useReveal(scopeRef) {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia(scopeRef);

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const items = gsap.utils.toArray('[data-reveal]', scopeRef.current);
      if (!items.length) return;

      gsap.set(items, { autoAlpha: 0, y: 20 });
      ScrollTrigger.batch(items, {
        start: 'top 90%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.07,
            overwrite: true,
          }),
      });
    });

    return () => mm.revert();
  }, [scopeRef]);
}
