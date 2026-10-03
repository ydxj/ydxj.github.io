import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { FiArrowRight, FiArrowUpRight, FiDownload, FiPlay } from 'react-icons/fi';
import { profile } from '../../data/site';
import { featuredMedia } from '../../data/media';
import { shippedCount } from '../../data/projects';
import { competition, getPhoto, photos } from '../../data/worldskills';
import { useLightbox, useVideoPlayer } from '../../hooks/useOverlays';
import MoroccoFlag from '../ui/MoroccoFlag';
import Photo from '../ui/Photo';
import SectionLink from '../ui/SectionLink';
import './Hero.css';

const MAIN_PHOTO = 'competition-day';
const THUMBNAILS = ['competition-focus', 'web-technologies-competitors', 'opening-ceremony'];

const stats = [
  { value: 'Top 1', label: 'WorldSkills Morocco national ranking' },
  { value: String(shippedCount), label: 'Projects shipped' },
  { value: 'Open', label: 'To opportunities' },
];

const Hero = () => {
  const rootRef = useRef(null);
  const [openPhoto, lightbox] = useLightbox(photos);
  const [playVideo, player] = useVideoPlayer();

  const main = getPhoto(MAIN_PHOTO);
  const thumbnails = THUMBNAILS.map(getPhoto).filter(Boolean);
  const remaining = photos.length - thumbnails.length - 1;
  const video = featuredMedia.find((item) => item.type !== 'external');

  useLayoutEffect(() => {
    const mm = gsap.matchMedia(rootRef);
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-hero]', { autoAlpha: 0, y: 18, duration: 0.7, stagger: 0.08 })
        .from('.hero__photo', { autoAlpha: 0, scale: 0.98, duration: 0.9 }, 0.1)
        .from('.hero__card, .hero__video, .hero__thumb', { autoAlpha: 0, y: 12, duration: 0.5, stagger: 0.06 }, 0.45);
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="home" className="hero" ref={rootRef} aria-labelledby="hero-title" tabIndex={-1}>
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow" data-hero>
            WorldSkills competitor <span aria-hidden="true">•</span> {competition.country} <MoroccoFlag />
          </p>

          <h1 className="hero__title" id="hero-title" data-hero>
            Building digital <br className="hero__br" />
            solutions that <br className="hero__br" />
            create <span className="text-accent">real impact.</span>
          </h1>

          <p className="hero__lead" data-hero>
            I&apos;m {profile.name}, a full-stack developer from Morocco and a WorldSkills competitor in Web
            Technologies. I design and build modern, scalable web applications with a focus on clean code,
            performance and real-world value.
          </p>

          <div className="hero__actions" data-hero>
            <SectionLink section="projects" className="btn btn--primary">
              View my work <FiArrowRight aria-hidden="true" />
            </SectionLink>
            <a className="btn btn--outline" href={profile.resume} download={profile.resumeFileName}>
              <FiDownload aria-hidden="true" /> Download CV
            </a>
          </div>

          <dl className="hero__stats" data-hero>
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual">
          <figure className="hero__photo">
            {main && (
              <Photo
                photo={main}
                priority
                className="hero__image"
                sizes="(min-width: 1240px) 640px, (min-width: 1024px) 52vw, 100vw"
              />
            )}

            <SectionLink section="worldskills" className="hero__card">
              <MoroccoFlag className="hero__card-flag" />
              <span className="hero__card-text">
                <strong>{competition.name}</strong>
                <span>
                  {competition.skill} · {competition.country}
                </span>
              </span>
              <span className="hero__card-arrow" aria-hidden="true">
                <FiArrowUpRight />
              </span>
            </SectionLink>

            {video && (
              <button type="button" className="hero__video" onClick={() => playVideo(video)}>
                <span className="hero__video-icon" aria-hidden="true">
                  <FiPlay />
                </span>
                Watch video
              </button>
            )}
          </figure>

          <ul className="hero__thumbs" aria-label="More WorldSkills photos">
            {thumbnails.map((photo, i) => {
              const isLast = i === thumbnails.length - 1 && remaining > 0;
              const image = <Photo photo={photo} sizes="200px" className="hero__thumb-image" alt="" />;
              return (
                <li key={photo.slug} className="hero__thumb">
                  {isLast ? (
                    <Link to="/worldskills/gallery" className="hero__thumb-hit" aria-label={`View all ${photos.length} photos`}>
                      {image}
                      <span className="hero__thumb-more" aria-hidden="true">
                        +{remaining}
                      </span>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="hero__thumb-hit"
                      onClick={() => openPhoto(photos.indexOf(photo))}
                      aria-label={`Open photo: ${photo.caption}`}
                    >
                      {image}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {lightbox}
      {player}
    </section>
  );
};

export default Hero;
