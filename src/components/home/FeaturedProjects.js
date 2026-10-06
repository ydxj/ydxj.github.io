import { useRef } from 'react';
import { featuredProjects, projects } from '../../data/projects';
import useReveal from '../../hooks/useReveal';
import ProjectCard from '../projects/ProjectCard';
import SectionHeader from '../ui/SectionHeader';

const FeaturedProjects = () => {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <section id="projects" className="section" ref={rootRef} aria-labelledby="projects-title" tabIndex={-1}>
      <div className="container">
        <SectionHeader
          id="projects-title"
          title="Featured Projects"
          subtitle="A selection of recent work: products, client websites and full-stack platforms."
          action={{ to: '/projects', label: `View all ${projects.length} projects` }}
        />
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
