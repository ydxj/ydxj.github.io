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
      id="hero"
    >
      <div className="container">
        <h1 className="display-4 fw-bold gsap-text">Hi, I'm Omar 👋</h1>
        <p className="lead text-secondary gsap-text">
          A Full-Stack Developer crafting beautiful, seamless web experiences
        </p> 
        <div className="d-flex justify-content-center gap-3 flex-wrap gsap-text">
          <a
            href="#projects"
            className="btn btn-primary px-4 py-2 fw-semibold rounded-pill shadow-sm hero-btn"
          >
            🚀 View My Work
          </a>
          <a
            href={resume}
            download={true}
            className="btn btn-outline-light px-4 py-2 fw-semibold rounded-pill shadow-sm hero-btn"
          >
            📄 Download CV
          </a>
        </div>
      </div>

      {/* Extra styling for hover effects */}
      <style jsx>{`
        .hero-btn {
          transition: all 0.3s ease;
        }
        .hero-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.15);
        }
        .btn-primary {
          background: linear-gradient(135deg, #4e9af1, #2563eb);
          border: none;
        }
        .btn-primary:hover {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        }
      `}</style>
    </section>
  );
};

export default Hero;
