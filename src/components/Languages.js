import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  javascript,
  css,
  express,
  git,
  reactjs,
  mysql,
  redux,
  nodejs,
  mongodb,
  html,
  gsape
} from '../assets/assets';

gsap.registerPlugin(ScrollTrigger);

const Languages = () => {
  const langRef = useRef(null);

  const languages = [
    { name: 'JavaScript', img: javascript },
    { name: 'React', img: reactjs },
    { name: 'Node.js', img: nodejs },
    { name: 'CSS3', img: css },
    { name: 'MongoDB', img: mongodb },
    { name: 'MySQL', img: mysql },
    { name: 'HTML5', img: html },
    { name: 'Express.js', img: express },
    { name: 'Redux', img: redux },
    { name: 'Git', img: git },
    { name: 'GSAP', img: gsape },
  ];

  useEffect(() => {
    const el = langRef.current;
    gsap.fromTo(
      el.querySelectorAll('.lang-item'),
      { y: 40, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section
      className="bg-dark text-white py-5"
      ref={langRef}
      id="languages"
    >
      <div className="container text-center">
        <h2 className="mb-5 fw-bold display-5">Languages & Technologies</h2>
        <div
          className="row g-4 justify-content-center"
          style={{ maxWidth: '1000px', margin: '0 auto' }}
        >
          {languages.map((lang, i) => (
            <div
              key={i}
              className="col-6 col-sm-4 col-md-3 col-lg-2 lang-item"
            >
              <div
                className="p-3 rounded shadow text-center lang-box"
                style={{
                  background: '#1e1e1e',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  border: '1px solid #333',
                }}
              >
                <img
                  src={lang.img}
                  alt={lang.name}
                  className="img-fluid"
                  style={{
                    height: '60px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                    filter: 'drop-shadow(0 0 5px rgba(0, 255, 255, 0.3))',
                  }}
                />
                <p style={{ fontSize: '0.85rem', margin: 0 }}>{lang.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .lang-box:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(0,255,255,0.3), 0 0 5px rgba(255,255,255,0.1) inset;
        }
      `}</style>
    </section>
  );
};

export default Languages;
