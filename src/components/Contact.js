import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const cardRef = useRef(null);
  const formRef = useRef();
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [burstId, setBurstId] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const resetFeedback = () => {
    if (status || success) {
      setStatus('');
      setSuccess(false);
    }
  };

  const confettiPieces = useMemo(() => (
    Array.from({ length: 18 }).map((_, i) => ({
      dx: (Math.random() * 140) - 70, // spread horizontally
      dy: (Math.random() * -120) + 20, // push upward mostly
      rot: Math.random() * 320 + 40,
      delay: i * 0.02,
      idx: i
    }))
  ), [burstId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submitting) return;
    setSubmitting(true);

    setSuccess(false);

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
          setSuccess(true);
          setBurstId((id) => id + 1);
        },
        (error) => {
          console.error(error);
          setStatus('❌ Failed to send message.');
          setSuccess(false);
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
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
                  <label className="form-label" htmlFor="contact-name">Full Name</label>
                  <input id="contact-name" type="text" name="user_name" className="form-control" required onChange={resetFeedback} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="contact-email">Email</label>
                  <input id="contact-email" type="email" name="user_email" className="form-control" required onChange={resetFeedback} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" className="form-control" rows="5" required onChange={resetFeedback}></textarea>
                </div>
                <button
                  type="submit"
                  className={`btn w-100 d-flex align-items-center justify-content-center gap-2 contact-btn ${success ? 'btn-success contact-btn-success' : 'btn-primary'}`}
                  disabled={submitting}
                  aria-busy={submitting}
                >
                  {submitting && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                  {submitting ? 'Sending…' : success ? 'Sent! 🎉' : 'Send Message'}
                </button>
                {success && (
                  <div className="confetti" aria-hidden="true">
                    {confettiPieces.map((piece) => (
                      <span
                        key={`${burstId}-${piece.idx}`}
                        className={`confetti-piece confetti-${piece.idx % 6}`}
                        style={{
                          '--dx': `${piece.dx}px`,
                          '--dy': `${piece.dy}px`,
                          '--rot': `${piece.rot}deg`,
                          animationDelay: `${piece.delay}s`
                        }}
                      />
                    ))}
                  </div>
                )}
                {status && <p className="mt-3 text-success text-center" aria-live="polite">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
