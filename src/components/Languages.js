import { useEffect, useRef, useState } from 'react';
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
  gsape,
  docker,
  postgree,
  laravel,
  python,
  php,
  bootstrap,
  jwt,
  // tailwind // save for later
} from '../assets/assets';

gsap.registerPlugin(ScrollTrigger);

const languageInfo = {
  JavaScript: "Dynamic scripting language. Makes the web alive. 🍌",
  React: "Component-based magic. Love hooks? You'll love React. ⚛️",
  'Node.js': "JavaScript on the server. Fast, event-driven. 🚀",
  CSS3: "Style wizardry. Box shadows and gradients galore. 🎨",
  MongoDB: "NoSQL, document-based, super flexible. 📦",
  MySQL: "Classic relational database. Solid & dependable. 🗃️",
  HTML5: "The structure of every web page. Like bones. 🦴",
  'Express.js': "Minimal backend with max performance. ⚙️",
  JWT: "Secure token-based authentication. Keep it secret, keep it safe. 🔐",
  Redux: "Global state control. Great power, great responsibility. 🧠",
  Git: "Version control savior. Mistakes? Rewind time. 🕰️",
  GSAP: "Smooth animations like butter. GreenSock rocks. 🐸",
  Docker: "Container everything. Consistent dev > prod. 📦",
  PostgreSQL: "Powerful open-source relational DB. 🐘",
  Laravel: "Elegant PHP framework. MVC heaven. 🧱",
  Python: "Readable, powerful, loved. From web to AI. 🐍",
  PHP: "Backend OG. Still powers WordPress. 💾",
  Bootstrap: "Quick styling. Grid + responsive = done. 📐",
  // Tailwind: "Utility-first CSS. Design in the markup. 🌬️" // save for later
};

const Languages = () => {
  const langRef = useRef(null);
  const [flipped, setFlipped] = useState({});

  const languages = [
    { name: 'JavaScript', img: javascript },
    { name: 'React', img: reactjs },
    { name: 'Node.js', img: nodejs },
    { name: 'CSS3', img: css },
    { name: 'MongoDB', img: mongodb },
    { name: 'MySQL', img: mysql },
    { name: 'HTML5', img: html },
    { name: 'Express.js', img: express },
    { name: 'JWT', img: jwt },
    { name: 'Redux', img: redux },
    { name: 'Git', img: git },
    { name: 'GSAP', img: gsape },
    { name: 'Docker', img: docker },
    { name: 'PostgreSQL', img: postgree },
    { name: 'Laravel', img: laravel },
    { name: 'Python', img: python },
    { name: 'PHP', img: php },
    { name: 'Bootstrap', img: bootstrap },
    // { name: 'Tailwind', img: tailwind }, // save for later
  ];

  useEffect(() => {
    const el = langRef.current;
    gsap.fromTo(
      el.querySelectorAll('.lang-card'),
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

  const toggleFlip = (name) => {
    setFlipped((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section className="section shell-dark py-5" ref={langRef} id="Languages">
      <div className="container-lg text-center">
        <p className="eyebrow">Toolkit</p>
        <h2 className="fw-bold text-gradient mb-4">Languages & Technologies</h2>

        <div className="row g-3 justify-content-center" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {languages.map((lang, i) => (
            <div
              key={i}
              className="col-6 col-sm-4 col-md-3 col-lg-2 lang-card"
              onClick={() => toggleFlip(lang.name)}
              style={{ perspective: '1000px', cursor: 'pointer' }}
            >
              <div className={`flip-box ${flipped[lang.name] ? 'flipped' : ''}`}>
                <div className="flip-inner">
                  <div className="flip-front p-3 rounded lang-box">
                    <img
                      src={lang.img}
                      alt={lang.name}
                      className="img-fluid"
                      style={{ height: '60px', objectFit: 'contain', marginBottom: '10px' }}
                    />
                    <p className="mb-0" style={{ fontSize: '0.9rem' }}>{lang.name}</p>
                  </div>
                  <div className="flip-back p-3 rounded">
                    <p className="mb-0" style={{ fontSize: '0.8rem' }}>
                      {languageInfo[lang.name]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .flip-box { width: 100%; height: 130px; position: relative; }
        .flip-inner { width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; position: relative; }
        .flip-box.flipped .flip-inner { transform: rotateY(180deg); }
        .flip-front, .flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
        }
        .flip-back { transform: rotateY(180deg); background: rgba(0,0,0,0.35); }
        .lang-box:hover { box-shadow: 0 0 20px rgba(96,165,250,0.4), 0 0 8px rgba(255,255,255,0.05) inset; }
      `}</style>
    </section>
  );
};

export default Languages;
