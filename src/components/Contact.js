import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const cardRef = useRef(null);
  const formRef = useRef();
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

    emailjs
      .sendForm(
        'service_7yh0zzb',  
        'template_vvzqrgo',  
        formRef.current,
        'F4CedTAn0F7HIccVu'    
      )
      .then(
        () => {
          setStatus('✅ Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus('❌ Failed to send message.');
        }
      );

    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <section id="contact" className="section shell-dark py-5">
      <div className="container-lg">
        <div className="text-center mb-4">
          <p className="eyebrow">Let’s Talk</p>
          <h2 className="fw-bold text-gradient">Build something together</h2>
          <p className="text-muted">Tell me about your product, team, or the problem you need solved.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div ref={cardRef} className="contact-card shadow-lg">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" name="user_name" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="user_email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea name="message" className="form-control" rows="5" required></textarea>
                </div>
                <button className="btn btn-primary w-100">Send Message</button>
                {status && <p className="mt-3 text-success text-center">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
