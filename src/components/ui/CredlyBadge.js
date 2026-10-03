import { useEffect, useRef } from 'react';

const SCRIPT_SRC = 'https://cdn.credly.com/assets/utilities/embed.js';

let scriptPromise = null;
const badgeCache = new Map();

function loadEmbedScript() {
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }
  return scriptPromise;
}

/**
 * Official Credly embed. Credly's script replaces the placeholder <div> with
 * its iframe via outerHTML, so the placeholder lives outside React's tree.
 * The script is injected once; the resulting iframe is cached and re-attached
 * if the section remounts (e.g. navigating back to the home page).
 */
const CredlyBadge = ({ badgeId, width = 150, height = 270 }) => {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    const cached = badgeCache.get(badgeId);

    if (cached) {
      host.appendChild(cached);
      return () => cached.remove();
    }

    const placeholder = document.createElement('div');
    placeholder.dataset.iframeWidth = width;
    placeholder.dataset.iframeHeight = height;
    placeholder.dataset.shareBadgeId = badgeId;
    placeholder.dataset.shareBadgeHost = 'https://www.credly.com';
    host.appendChild(placeholder);

    let cancelled = false;
    const remember = () => {
      const iframe = host.querySelector('iframe');
      if (iframe) badgeCache.set(badgeId, iframe);
      return Boolean(iframe);
    };

    loadEmbedScript()
      .then(() => {
        if (cancelled || remember()) return;
        // The script already ran before this placeholder existed (the section
        // unmounted mid-load): let it scan the page once more.
        const rescan = document.createElement('script');
        rescan.src = SCRIPT_SRC;
        rescan.onload = remember;
        document.body.appendChild(rescan);
      })
      .catch(() => {
        if (!cancelled) host.dataset.failed = 'true';
      });

    return () => {
      cancelled = true;
      host.replaceChildren();
    };
  }, [badgeId, width, height]);

  return <div ref={hostRef} className="credly-badge" style={{ minWidth: width, minHeight: height }} />;
};

export default CredlyBadge;
