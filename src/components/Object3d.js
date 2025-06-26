import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Contact3D = () => {
  const ballRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 25;
      const y = (e.clientY - window.innerHeight / 2) / 25;

      gsap.to(ballRef.current, {
        x,
        y,
        rotationY: x,
        rotationX: -y,
        ease: 'power2.out',
        duration: 0.5,
      });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="position-absolute top-0 end-0 me-5 mt-5 z-0">
      <div
        ref={ballRef}
        style={{
          width: '100px',
          height: '100px',
          background: 'linear-gradient(145deg, #555, #999)',
          borderRadius: '50%',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          transformStyle: 'preserve-3d',
        }}
      ></div>
    </div>
  );
};

export default Contact3D;
