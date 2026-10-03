import { useMemo, useState } from 'react';
import PageIntro from '../components/layout/PageIntro';
import Photo from '../components/ui/Photo';
import { categories, competition, photos } from '../data/worldskills';
import { useLightbox } from '../hooks/useOverlays';
import usePageMeta from '../hooks/usePageMeta';
import './GalleryPage.css';

const ALL = 'All';

const GalleryPage = () => {
  const [filter, setFilter] = useState(ALL);

  usePageMeta({
    title: 'WorldSkills Shanghai 2026 Gallery · Omar Zerhouni',
    description: `${photos.length} photos of Omar Zerhouni and Team Morocco at WorldSkills Shanghai 2026: Web Technologies competition days, ceremonies and Shanghai.`,
    path: '/worldskills/gallery',
  });

  const visible = useMemo(() => (filter === ALL ? photos : photos.filter((p) => p.category === filter)), [filter]);
  const [openPhoto, lightbox] = useLightbox(visible);

  const counts = useMemo(
    () => Object.fromEntries(categories.map((c) => [c, photos.filter((p) => p.category === c).length])),
    []
  );

  return (
    <>
      <PageIntro
        backTo="worldskills"
        backLabel="Back to WorldSkills"
        eyebrow={`${competition.name} · ${competition.skill}`}
        title="Competition Gallery"
        lead={`Moments from the ${competition.edition} in Shanghai (${competition.dates}): competition days in the Web Technologies workshop, Team Morocco and the ceremonies.`}
      >
        <div className="chips" role="group" aria-label="Filter photos">
          {[ALL, ...categories].map((category) => (
            <button
              key={category}
              type="button"
              className="chip"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
              <span className="chip__count">{category === ALL ? photos.length : counts[category]}</span>
            </button>
          ))}
        </div>
      </PageIntro>

      <section className="container gallery-page" aria-label={`${filter} photos`}>
        <ul className="masonry">
          {visible.map((photo, index) => (
            <li key={photo.slug} className="masonry__item">
              <button
                type="button"
                className="masonry__hit"
                onClick={() => openPhoto(index)}
                aria-label={`Open photo: ${photo.caption || photo.alt}`}
              >
                <Photo photo={photo} sizes="(min-width: 1100px) 400px, (min-width: 640px) 50vw, 100vw" alt="" />
              </button>
              {photo.caption && <p className="masonry__caption">{photo.caption}</p>}
            </li>
          ))}
        </ul>
      </section>
      {lightbox}
    </>
  );
};

export default GalleryPage;
