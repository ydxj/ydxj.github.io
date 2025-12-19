import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaGithub } from 'react-icons/fa';
import {
  onetask,
  orgaspace,
  elearning,
  webEcommerce,
  nourbannat,
  rentohub,
  monCentre
} from '../assets/assets.js';

const projectList = [
  {
    title: 'One-Task',
    description:
      'OneTask est un service simple d’envoi de tâches quotidiennes par email selon un domaine choisi par l’utilisateur (productivité, apprentissage, sport…).',
    link: 'https://github.com/ydxj/One-Task',
    tags: ['#React', '#Bootstrap', '#NodeJS', '#Express'],
    image: onetask,
    status: 'completed',
    progress: 100,
  },
  {
    title: 'E-commerce UI',
    description:
      'Frontend for an online store with a cart and Product management with pictures etc.',
    link: 'https://github.com/ydxj/ecommerce-website',
    tags: ['#React', '#CSS'],
    image: orgaspace,
    status: 'completed',
    progress: 100,
  },
  {
    title: 'e-learning website',
    description:
      'Website that make people request an information or cource destiner personnal of an hospital in morroco',
    link: 'https://github.com/ydxj/site-web-formation',
    tags: ['#React', '#CSS', '#Bootstrap', '#NodeJs', '#Express','#MySQL'],
    image: elearning,
    status: 'completed',
    progress: 100,
  },
  {
    title: 'Web E-commerce',
    description:
      'A full-stack e-commerce web application for buyers and sellers built with React, Node.js, and MySQL, featuring product listings, shopping cart, orders, and role-based dashboards.',
    link: 'https://github.com/ydxj/webEcommerce',
    tags: ['#React', '#GSAP', '#ReactRouterDom', '#Axios', '#NodeJS', '#Express', '#JWT', '#Bcrypt', '#MySQL', '#OpenSource'],
    image: webEcommerce,
    status: 'completed',
    progress: 100,
  },
  {
    title: 'Ecommerce Website',
    description:
      'E-commerce web application for buyers and sellers built with Wordpress, WooCommerce, and other plugins.',
    link: 'https://nourbannat.com/',
    tags: ['#Wordpress', '#WooCommerce', '#PHP', '#CSS', '#MySQL'],
    image: nourbannat,
    status: 'completed',
    progress: 100,
  },
  {
    id: 5,
    title: "RentoHub",
    description: "Saas-based property rental management platform. Car rental listings, booking system, and payment processing integrated.",
    tags: ["React Vite", "Node.js", "Sequelize", "MySQL","JWT","Bcrypt"],
    image: rentohub,
    link: "https://rentohub.app",
    progress: 49,
    status: "in-progress",
  },
  {
    id: 6,
    title: "MonCentre",
    desc: "SaaS platform for managing Centers and students. Features include center profiles, student enrollment, and progress tracking.",
    license: "React - Django",
    tech: ["React", "Django", "Chart.js", "PostgreSQL", "REST API"],
    image: monCentre,
    alt: "MonCentre Project",
    link: "https://moncentre.app",
    github: "#",
    rating: 4.6,
    featured: false,
    progress: 27,
    status: "in-progress",
  },
];

const Projects = () => {
  const cardsRef = useRef([]);

  const normalizedProjects = projectList.map((p) => ({
    ...p,
    _description: p.description || p.desc || '',
    _tags: p.tags || p.tech || [],
    _status: p.status || (p.progress && p.progress < 100 ? 'in-progress' : 'completed'),
    _progress: typeof p.progress === 'number' ? p.progress : 100,
  }));

  // const inProgress = normalizedProjects.filter((p) => p._status === 'in-progress');

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50, rotateY: -10 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
      }
    );
  }, []);


  return (
    <section className="section shell-dark py-5" id="projects">
      <div className="container-lg">
        <div className="text-center mb-5">
          <p className="eyebrow">Recent Work</p>
          <h2 className="fw-bold text-gradient">Projects</h2>
          <p className="text-muted">Production-minded builds with clean UIs, dependable APIs, and measurable impact.</p>
        </div>

        <div className="row g-4">
          {normalizedProjects.map((project, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div
                className="project-card h-100 shadow-lg position-relative overflow-hidden"
                style={{
                  background: 'linear-gradient(140deg, rgba(16,24,40,0.9), rgba(15,23,42,0.95))',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 25px 70px rgba(0,0,0,0.35)';
                  e.currentTarget.style.borderColor = 'rgba(96,165,250,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.25)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                }}
              >
                <div className="project-media" style={{ backgroundImage: `url(${project.image})`, position: 'relative' }}>
                  {project._status === 'in-progress' && (
                    <div
                      className="position-absolute top-0 start-0 m-3"
                      style={{
                        background: 'linear-gradient(120deg, #a855f7, #6366f1)',
                        padding: '6px 12px',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        boxShadow: '0 10px 30px rgba(99,102,241,0.35)'
                      }}
                    >
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 12px rgba(255,255,255,0.9)', animation: 'pulse 2s infinite' }} />
                      <span>In Progress · {project._progress}%</span>
                    </div>
                  )}
                </div>

                <div className="d-flex flex-column h-100 p-3">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="mb-0" style={{ fontSize: '1.05rem', fontWeight: 700 }}>{project.title}</h5>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                      style={{ fontSize: '1.15rem', flexShrink: 0, marginLeft: '8px', opacity: 0.85 }}
                    >
                      <FaGithub />
                    </a>
                  </div>

                  <p className="text-muted mb-3" style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>{project._description}</p>

                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {(project._tags || []).map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>

                  {typeof project._progress === 'number' && project._progress < 100 && (
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-muted" style={{ fontSize: '0.85rem' }}>{project._status === 'in-progress' ? 'Progress' : 'Completed'}</span>
                        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: project._status === 'in-progress' ? '#c4b5fd' : '#34d399' }}>{project._progress}%</span>
                      </div>
                      <div className="progress" style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px' }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-valuenow={project._progress}
                          style={{
                            width: `${project._progress}%`,
                            background: project._status === 'in-progress'
                              ? 'linear-gradient(90deg, #a855f7, #6366f1)'
                              : 'linear-gradient(90deg, #34d399, #10b981)',
                            boxShadow: project._status === 'in-progress' ? '0 0 12px rgba(99,102,241,0.5)' : '0 0 12px rgba(16,185,129,0.45)'
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
