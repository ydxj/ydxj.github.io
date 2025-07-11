import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaGithub } from 'react-icons/fa';
import {onetask,orgaspace,elearning,webEcommerce} from '../assets/assets.js'

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
  ];

  return (
    <section className="bg-dark text-white py-5" id="projects">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Projects</h2>
        <div className="row">
          {projectList.map((project, index) => (
            <div
              className="col-md-4 mb-4"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div
                className="card bg-secondary text-white border-0 shadow h-100 project-card"
                style={{ transition: 'transform 0.3s ease' }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="card-img-top"
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="tags mt-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="badge bg-dark me-2 mb-2"
                          style={{ fontSize: '0.8rem' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 text-end">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                      style={{ fontSize: '1.5rem' }}
                    >
                      <FaGithub className="github-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra styling */}
      <style>{`
        .project-card:hover {
          transform: perspective(1000px) rotateY(5deg) scale(1.03);
          box-shadow: 0 10px 20px rgba(0,0,0,0.4);
        }
        .github-icon:hover {
          color: #ccc;
          transform: scale(1.1);
          transition: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default Projects;
