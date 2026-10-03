import { useRef, useState } from 'react';
import { FiArrowRight, FiCheck, FiDownload } from 'react-icons/fi';
import { profile } from '../../data/site';
import { getPhoto } from '../../data/worldskills';
import useReveal from '../../hooks/useReveal';
import ContactDialog from '../ui/ContactDialog';
import Photo from '../ui/Photo';
import './ContactCta.css';

const openTo = ['Internships', 'Full-time opportunities', 'Freelance projects', 'Interesting collaborations'];

const ContactCta = () => {
  const rootRef = useRef(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  useReveal(rootRef);
  const photo = getPhoto('huangpu-river-skyline');

  return (
    <section id="contact" className="contact-cta" ref={rootRef} aria-labelledby="contact-title" tabIndex={-1}>
      <div className="container contact-cta__grid">
        <div className="contact-cta__content" data-reveal>
          <p className="eyebrow">Let&apos;s work together</p>
          <h2 className="contact-cta__title" id="contact-title">
            Ready to build something great?
          </h2>
          <p className="contact-cta__text">
            If you have an interesting opportunity or just want to connect, I&apos;d love to hear from you. I&apos;m open to:
          </p>
          <ul className="contact-cta__list">
            {openTo.map((item) => (
              <li key={item}>
                <FiCheck aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>
          <div className="contact-cta__actions">
            <button type="button" className="btn btn--primary" onClick={() => setDialogOpen(true)}>
              Get in touch <FiArrowRight aria-hidden="true" />
            </button>
            <a className="btn btn--outline" href={profile.resume} download={profile.resumeFileName}>
              <FiDownload aria-hidden="true" /> Download CV
            </a>
          </div>
        </div>

        {photo && (
          <figure className="contact-cta__photo" data-reveal>
            <Photo photo={photo} sizes="(min-width: 900px) 480px, 100vw" />
          </figure>
        )}
      </div>
      {dialogOpen && <ContactDialog onClose={() => setDialogOpen(false)} />}
    </section>
  );
};

export default ContactCta;
