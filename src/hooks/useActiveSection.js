import { useEffect, useState } from 'react';

/**
 * Returns the id of the section whose top most recently passed 40% of the viewport,
 * so sections without a nav entry (e.g. the gallery) keep their parent active.
 */
export default function useActiveSection(ids, enabled = true) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    if (!enabled) return undefined;

    let frame = null;
    const update = () => {
      frame = null;
      const line = window.innerHeight * 0.4;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = ids[0];
      let closest = -Infinity;

      // Nav order differs from page order, so pick by position, not index.
      ids.forEach((id) => {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= line && top > closest) {
          closest = top;
          current = id;
        }
      });

      setActive(atBottom ? ids[ids.length - 1] : current);
    };

    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [ids, enabled]);

  return active;
}
