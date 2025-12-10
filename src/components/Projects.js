import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaGithub } from 'react-icons/fa';
import {onetask,orgaspace,elearning,webEcommerce,nourbannat} from '../assets/assets.js'

const Projects = () => {
  const cardsRef = useRef([]);

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

  const projectList = [
    {
      title: 'One-Task',
      description:
        'OneTask est un service simple d’envoi de tâches quotidiennes par email selon un domaine choisi par l’utilisateur (productivité, apprentissage, sport…).',
      link: 'https://github.com/ydxj/One-Task',
      tags: ['#React', '#Bootstrap', '#NodeJS', '#Express'],
      image: onetask,
    },
    {
      title: 'E-commerce UI',
      description:
        'Frontend for an online store with a cart and Product management with pictures etc.',
      link: 'https://github.com/ydxj/ecommerce-website',
      tags: ['#React', '#CSS'],
      image: orgaspace,
    },
    {
      title: 'e-learning website',
      description:
        'Website that make people request an information or cource destiner personnal of an hospital in morroco',
      link: 'https://github.com/ydxj/site-web-formation',
      tags: ['#React', '#CSS', '#Bootstrap', '#NodeJs', '#Express','#MySQL'],
      image: elearning,
    },
    {
      title: 'Web E-commerce',
      description:
        'A full-stack e-commerce web application for buyers and sellers built with React, Node.js, and MySQL, featuring product listings, shopping cart, orders, and role-based dashboards.',
      link: 'https://github.com/ydxj/webEcommerce',
      tags: ['#React', '#GSAP', '#ReactRouterDom', '#Axios', '#NodeJS', '#Express', '#JWT', '#Bcrypt', '#MySQL', '#OpenSource'],
      image: webEcommerce,
    },
    {
      title: 'Ecommerce Website',
      description:
        'E-commerce web application for buyers and sellers built with Wordpress, WooCommerce, and other plugins.',
      link: 'https://nourbannat.com/',
      tags: ['#Wordpress', '#WooCommerce', '#PHP', '#CSS', '#MySQL'],
      image: nourbannat,
    },
  ];

  return (
    <section className="section shell-dark py-5" id="projects">
      <div className="container-lg">
        <div className="text-center mb-5">
          <p className="eyebrow">Recent Work</p>
          <h2 className="fw-bold text-gradient">Projects</h2>
          <p className="text-muted">Production-minded builds with clean UIs, dependable APIs, and measurable impact.</p>
        </div>

        <div className="row g-4">
          {projectList.map((project, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="project-card h-100 shadow-lg">
                <div className="project-media" style={{ backgroundImage: `url(${project.image})` }} />
                <div className="p-3 d-flex flex-column h-100">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <h5 className="mb-0">{project.title}</h5>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                        style={{ fontSize: '1.3rem' }}
                      >
                        <FaGithub />
                      </a>
                    </div>
                    <p className="text-muted small mb-2">{project.description}</p>
                  </div>
                  <div className="mt-auto d-flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
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
