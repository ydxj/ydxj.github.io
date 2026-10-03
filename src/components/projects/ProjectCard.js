import { FiArrowUpRight } from 'react-icons/fi';
import { primaryLink } from '../../data/projects';
import './ProjectCard.css';

/** Compact card used on the home page: screenshot, title, summary, stack. */
const ProjectCard = ({ project }) => {
  const href = primaryLink(project);

  return (
    <article className="project-card" data-reveal>
      <div className="project-card__media">
        <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" decoding="async" width="1200" height="580" />
      </div>
      <div className="project-card__body">
        <p className="project-card__type">{project.type}</p>
        <h3 className="project-card__title">
          <a href={href} target="_blank" rel="noopener noreferrer" className="project-card__link">
            {project.title}
          </a>
        </h3>
        <p className="project-card__summary">{project.summary}</p>
        <ul className="tags" aria-label="Technologies">
          {project.tags.slice(0, 4).map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
        <span className="project-card__arrow" aria-hidden="true">
          <FiArrowUpRight />
        </span>
      </div>
    </article>
  );
};

export default ProjectCard;
