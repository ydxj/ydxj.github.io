import { useRef } from 'react';
import { FiArrowRight, FiBookOpen, FiCode, FiTarget, FiTrendingUp } from 'react-icons/fi';
import { socials } from '../../data/site';
import { getPhoto } from '../../data/worldskills';
import useReveal from '../../hooks/useReveal';
import Photo from '../ui/Photo';
import './About.css';

const qualities = [
  { title: 'Problem Solving', text: 'I enjoy breaking down complex challenges into clear, shippable steps.', icon: FiTarget },
  { title: 'Clean Code', text: 'Readable, maintainable code that the next developer can trust.', icon: FiCode },
  { title: 'Continuous Learning', text: 'Always exploring new tools, and competing to raise the bar.', icon: FiBookOpen },
  { title: 'Real-World Impact', text: 'Building products that people and organisations actually use.', icon: FiTrendingUp },
];

const linkedin = socials.find((social) => social.label === 'LinkedIn');

const About = () => {
  const rootRef = useRef(null);
  useReveal(rootRef);
  const photo = getPhoto('competition-coding');

  return (
    <section id="about" className="section section--soft about" ref={rootRef} aria-labelledby="about-title" tabIndex={-1}>
      <div className="container about__grid">
        <div className="about__intro" data-reveal>
          <p className="eyebrow">About me</p>
          <h2 className="about__title" id="about-title">
            Passionate about building meaningful web experiences.
          </h2>
          <p className="about__text">
            I enjoy turning ideas into real products, from the interface down to the API and the database. I aim
            for clean, maintainable and scalable code, and I&apos;m motivated by learning new technologies and solving
            real problems. Competing at WorldSkills taught me to deliver that quality under pressure.
          </p>
          {linkedin && (
            <a className="btn btn--primary" href={linkedin.href} target="_blank" rel="noopener noreferrer">
              More about me on LinkedIn <FiArrowRight aria-hidden="true" />
            </a>
          )}
        </div>

        <ul className="about__qualities" data-reveal>
          {qualities.map(({ title, text, icon: Icon }) => (
            <li key={title} className="quality">
              <span className="quality__icon" aria-hidden="true">
                <Icon />
              </span>
              <span>
                <strong className="quality__title">{title}</strong>
                <span className="quality__text">{text}</span>
              </span>
            </li>
          ))}
        </ul>

        {photo && (
          <figure className="about__photo" data-reveal>
            <Photo photo={photo} sizes="(min-width: 1100px) 360px, (min-width: 700px) 45vw, 100vw" />
            <figcaption>WorldSkills Shanghai 2026 · Competition day</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
};

export default About;
