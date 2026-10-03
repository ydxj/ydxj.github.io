import { useRef } from 'react';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import PageIntro from '../components/layout/PageIntro';
import { projects } from '../data/projects';
import usePageMeta from '../hooks/usePageMeta';
import useReveal from '../hooks/useReveal';
import './ProjectsPage.css';

const details = [
  ['why', 'Why it exists'],
  ['role', 'My role'],
  ['result', 'Result'],
];

const ProjectsPage = () => {
  const rootRef = useRef(null);
  useReveal(rootRef);

  usePageMeta({
    title: 'Projects · Omar Zerhouni, Full-Stack Developer',
    description:
      'Full-stack projects by Omar Zerhouni: SaaS platforms, client e-commerce sites, APIs and an internship build for CHU Oujda, with React, Node.js, Laravel and WordPress.',
    path: '/projects',
  });

  return (
    <div ref={rootRef}>
      <PageIntro
        backTo="projects"
        eyebrow="Projects"
        title="Everything I've built"
        lead="What each project is, why it exists, what I did and where it stands today."
      />

      <section className="container projects-page" aria-label="All projects">
        {projects.map((project) => (
          <article key={project.slug} className="project-row" data-reveal>
            <div className="project-row__media">
              <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" decoding="async" width="1200" height="580" />
            </div>

            <div className="project-row__body">
              <p className="project-row__type">
                {project.type}
                {project.status === 'in-progress' && <span className="project-row__status">In progress</span>}
              </p>
              <h2 className="project-row__title">{project.title}</h2>
              <p className="project-row__summary">{project.summary}</p>

              <dl className="project-row__details">
                {details.map(([key, label]) => (
                  <div key={key}>
                    <dt>{label}</dt>
                    <dd>{project[key]}</dd>
                  </div>
                ))}
              </dl>

              <ul className="tags" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="project-row__links">
                {project.links.live && (
                  <a className="btn btn--primary btn--sm" href={project.links.live} target="_blank" rel="noopener noreferrer">
                    Visit live site <FiArrowUpRight aria-hidden="true" />
                  </a>
                )}
                {project.links.code && (
                  <a className="btn btn--outline btn--sm project-row__code" href={project.links.code} target="_blank" rel="noopener noreferrer">
                    <FiGithub aria-hidden="true" /> Source code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default ProjectsPage;
