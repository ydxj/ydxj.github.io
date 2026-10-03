import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiCheckCircle, FiSend } from 'react-icons/fi';
import { emailjsConfig, socials } from '../../data/site';
import Modal from './Modal';
import './ContactDialog.css';

/** Contact form (EmailJS) shown in an overlay from the contact CTA. */
const ContactDialog = ({ onClose }) => {
  const formRef = useRef(null);
  const [state, setState] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state === 'sending') return;
    setState('sending');

    emailjs
      .sendForm(emailjsConfig.serviceId, emailjsConfig.templateId, formRef.current, emailjsConfig.publicKey)
      .then(() => {
        formRef.current?.reset();
        setState('sent');
      })
      .catch(() => setState('error'));
  };

  return (
    <Modal label="Contact Omar Zerhouni" onClose={onClose}>
      <div className="contact-dialog">
        <p className="eyebrow">Get in touch</p>
        <h2 className="contact-dialog__title">Let&apos;s talk about your project</h2>

        {state === 'sent' ? (
          <div className="contact-dialog__success" role="status">
            <FiCheckCircle aria-hidden="true" />
            <p>Thanks, your message was sent. I&apos;ll get back to you shortly.</p>
            <button type="button" className="btn btn--primary" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <p className="contact-dialog__lead">
              Internship, full-time role, freelance project or collaboration: tell me what you have in mind.
            </p>
            <label className="field">
              <span>Full name</span>
              <input type="text" name="user_name" autoComplete="name" required data-autofocus />
            </label>
            <label className="field">
              <span>Email</span>
              <input type="email" name="user_email" autoComplete="email" required />
            </label>
            <label className="field">
              <span>Message</span>
              <textarea name="message" rows="5" required />
            </label>

            {state === 'error' && (
              <p className="contact-form__error" role="alert">
                Something went wrong. Please try again or reach me on LinkedIn.
              </p>
            )}

            <button type="submit" className="btn btn--primary btn--block" disabled={state === 'sending'} aria-busy={state === 'sending'}>
              {state === 'sending' ? 'Sending…' : 'Send message'} <FiSend aria-hidden="true" />
            </button>

            <p className="contact-dialog__alt">
              Prefer social?{' '}
              {socials.map((social, i) => (
                <span key={social.label}>
                  {i > 0 && ' · '}
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.label}
                  </a>
                </span>
              ))}
            </p>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default ContactDialog;
