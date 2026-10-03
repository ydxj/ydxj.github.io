import { useEffect } from 'react';
import { SITE_URL } from '../data/site';

function setTag(selector, attr, key, content) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute(selector.startsWith('link') ? 'href' : 'content', content);
}

/** Keeps title, description, canonical and social tags in sync per route. */
export default function usePageMeta({ title, description, path = '/' }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setTag('meta[name="description"]', 'name', 'description', description);
    setTag('link[rel="canonical"]', 'rel', 'canonical', url);
    setTag('meta[property="og:title"]', 'property', 'og:title', title);
    setTag('meta[property="og:description"]', 'property', 'og:description', description);
    setTag('meta[property="og:url"]', 'property', 'og:url', url);
    setTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  }, [title, description, path]);
}
