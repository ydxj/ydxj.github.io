import { useRef } from 'react';
import { experience } from '../../data/experience';
import useReveal from '../../hooks/useReveal';
import SectionHeader from '../ui/SectionHeader';
import './Experience.css';

const Experience = () => {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <section id="experience" className="section section--soft" ref={rootRef} aria-labelledby="experience-title" tabIndex={-1}>
      <div className="container">
        <SectionHeader eyebrow="Experience" id="experience-title" title="My journey so far" />

        <ol className="timeline">
          {experience.map(({ period, title, role, description, icon: Icon, highlight }) => (
            <li key={title} className={`timeline__item${highlight ? ' is-highlight' : ''}`} data-reveal>
              <p className="timeline__period">{period}</p>
              <span className="timeline__dot" aria-hidden="true" />
              <article className="timeline__card">
                <span className="timeline__icon" aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <h3 className="timeline__title">{title}</h3>
                  <p className="timeline__role">{role}</p>
                  <p className="timeline__text">{description}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
