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
              I’m a passionate frontend developer from Morocco . I specialize in building
              responsive, interactive, and visually appealing user interfaces using
              modern tools like React, Bootstrap, and GSAP.
            </p>
            <p>
              I love turning design ideas into real, usable web experiences — fast,
              smooth, and elegant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
