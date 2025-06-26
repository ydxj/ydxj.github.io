import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
// import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const cardRef = useRef(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent! (demo)');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section id="contact" className="py-5 bg-dark text-light position-relative">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Let's Work Together</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div ref={cardRef} className="bg-light text-dark p-4 rounded shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="5" required></textarea>
                </div>
                <button className="btn btn-dark w-100">Send Message</button>
                {status && <p className="mt-3 text-success">{status}</p>}
              </form>
              <div className="mt-4 d-flex justify-content-center gap-4 fs-4">
                {/*<a href="mailto:youremail@example.com" className="text-dark">
                  <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/zerhouni-omar/" target="_blank" rel="noreferrer" className="text-dark">
                  <FaLinkedin />
                </a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
