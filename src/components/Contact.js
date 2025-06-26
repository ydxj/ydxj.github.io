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
    <section id="contact" className="py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Let's Work Together</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div ref={cardRef} className="bg-light text-dark p-4 rounded shadow-lg">
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
                <button className="btn btn-dark w-100">Send Message</button>
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
