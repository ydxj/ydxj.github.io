import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <section
      ref={aboutRef}
      className="bg-light text-dark py-5"
      id="about"
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-4">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p>
              I’m a passionate full-stack developer from Morocco, specializing in building responsive,
              interactive, and visually engaging web applications.
              With a solid command of both frontend and backend technologies,
              I craft seamless digital experiences from concept to deployment.
            </p>
            <p>
              On the frontend, I work extensively with React, Bootstrap, GSAP,
              and other modern libraries to create fast, elegant, and user-friendly interfaces.
              On the backend, I build scalable, secure, and efficient APIs and services using technologies like Node.js,
              Express.js, MongoDB, MySQL, and PostgreSQL.
            </p>
            <p>
              I love bringing design ideas to life and ensuring they’re backed by robust,
              well-architected systems. Whether I’m refining UI animations or optimizing backend performance, 
              I take pride in writing clean, maintainable code and staying current with the latest in web development.
            </p>
            <p>
              Always learning, always building — my goal is to deliver experiences that are not just functional, 
              but memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
