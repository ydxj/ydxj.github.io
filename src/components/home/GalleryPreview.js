import { useRef } from 'react';
import { featuredPhotos, photos } from '../../data/worldskills';
import { useLightbox } from '../../hooks/useOverlays';
import useReveal from '../../hooks/useReveal';
import Photo from '../ui/Photo';
import SectionHeader from '../ui/SectionHeader';
import './GalleryPreview.css';

/** Editorial bento of featured photos; opens the full set in the lightbox. */
const GalleryPreview = () => {
  const rootRef = useRef(null);
  useReveal(rootRef);
  const [openPhoto, lightbox] = useLightbox(photos);

  return (
    <section className="section section--tight-top gallery-preview" ref={rootRef} aria-labelledby="gallery-title">
      <div className="container">
        <SectionHeader
          id="gallery-title"
          title="Competition Gallery"
          subtitle="Moments from WorldSkills Shanghai 2026: competition days, Team Morocco and the ceremonies."
          action={{ to: '/worldskills/gallery', label: `View all ${photos.length} photos` }}
        />

        <ul className="bento" data-reveal>
          {featuredPhotos.map((photo, i) => (
            <li key={photo.slug} className={`bento__item bento__item--${i + 1}`}>
              <button
                type="button"
                className="bento__hit"
                onClick={() => openPhoto(photos.indexOf(photo))}
                aria-label={`Open photo: ${photo.caption}`}
              >
                <Photo photo={photo} sizes="(min-width: 1024px) 34vw, 50vw" alt="" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      {lightbox}
    </section>
  );
};

export default GalleryPreview;
