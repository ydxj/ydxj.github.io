import { technologies } from '../../data/technologies';
import './TechStrip.css';

const TechStrip = () => (
  <section className="tech-strip" aria-labelledby="tech-strip-title">
    <div className="container tech-strip__inner">
      <h2 className="eyebrow tech-strip__title" id="tech-strip-title">
        Tech stack
      </h2>
      <ul className="tech-strip__list">
        {technologies.map(({ name, icon: Icon, color }) => (
          <li key={name} className="tech-strip__item">
            <Icon className="tech-strip__icon" style={{ color }} aria-hidden="true" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TechStrip;
