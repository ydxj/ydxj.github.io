import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { resume } from '../assets/assets';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;

    gsap.fromTo(
      el.querySelectorAll('.gsap-text'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="d-flex align-items-center justify-content-center min-vh-100 bg-dark text-white text-center"
      id='hero'
    >
      <div className="container">
        <h1 className="display-4 fw-bold gsap-text">Hi, I'm Omar 👋</h1>
        <p className="lead text-secondary gsap-text">
          A Full-Stack Developer crafting beautiful, seamless web experiences
        </p>
        <a href="#projects" className="btn btn-outline-light mt-4 gsap-text">
          View My Work
        </a>
        <a href={resume} className="btn btn-outline-light mt-4 gsap-text">
          Download my cv
        </a>
      </div>
    </section>
  );
};

export default Hero;
