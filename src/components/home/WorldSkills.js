import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiAward, FiCode, FiShield } from 'react-icons/fi';
import { competition, credly, photos } from '../../data/worldskills';
import useReveal from '../../hooks/useReveal';
import CredlyBadge from '../ui/CredlyBadge';
import MoroccoFlag from '../ui/MoroccoFlag';
import './WorldSkills.css';

const facts = [
  { title: competition.skill, text: 'Official competition category', icon: <FiCode /> },
  { title: competition.country, text: 'National team member', icon: <MoroccoFlag className="ws-fact__flag" /> },
  { title: 'Shanghai 2026', text: 'Global skills competition', icon: <FiAward /> },
];

const WorldSkills = () => {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <section id="worldskills" className="section worldskills" ref={rootRef} aria-labelledby="worldskills-title" tabIndex={-1}>
      <div className="container worldskills__grid">
        <div className="worldskills__content">
          <p className="eyebrow" data-reveal>
            WorldSkills
          </p>
          <h2 className="worldskills__title" id="worldskills-title" data-reveal>
            WorldSkills <span className="text-accent">Shanghai 2026</span>
          </h2>
          <p className="worldskills__subtitle" data-reveal>
            Representing {competition.country} in {competition.skill}
          </p>
          <p className="worldskills__text" data-reveal>
            From {competition.dates}, I represented Morocco as the national competitor in Web Technologies at the{' '}
            {competition.edition}, after ranking first in the national selection. It meant building complete,
            real-world web projects against the clock, judged by international experts, alongside the best young
            developers in the world.
          </p>

          <ul className="ws-facts" data-reveal>
            {facts.map((fact) => (
              <li key={fact.title} className="ws-fact">
                <span className="ws-fact__icon" aria-hidden="true">
                  {fact.icon}
                </span>
                <strong>{fact.title}</strong>
                <span>{fact.text}</span>
              </li>
            ))}
          </ul>

          <Link to="/worldskills/gallery" className="text-link" data-reveal>
            Explore {photos.length} photos from Shanghai <FiArrowRight aria-hidden="true" />
          </Link>
        </div>

        <aside className="credential" aria-label="Verified WorldSkills credential" data-reveal>
          <div className="credential__head">
            <span className="credential__icon" aria-hidden="true">
              <FiShield />
            </span>
            <div>
              <p className="credential__label">Verified credential</p>
              <p className="credential__name">WorldSkills · {competition.skill}</p>
            </div>
          </div>

          <div className="credential__badge">
            <CredlyBadge badgeId={credly.badgeId} />
          </div>

          <a className="credential__link" href={credly.url} target="_blank" rel="noopener noreferrer">
            Official credential on Credly <FiArrowUpRight aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>
  );
};

export default WorldSkills;
