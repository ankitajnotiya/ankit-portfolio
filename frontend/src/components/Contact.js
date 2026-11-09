import React, { useState } from 'react';

const API_URL = process.env.REACT_APP_CONTACT_API_URL || 'http://127.0.0.1:8000/api/contact';

const EMPTY_FORM = { name: '', email: '', mobile: '', message: '' };

const CONTACTS = [
  {
    label: 'Call us On',
    value: '+91 7470540178',
    href: 'tel:+917470540178',
    path: 'M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24c1.12.37 2.33.57 3.54.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.21.2 2.42.57 3.54a1 1 0 0 1-.24 1.05l-2.2 2.2z',
  },
  {
    label: 'Email us On',
    value: 'ankitajnotiya@gmail.com',
    href: 'mailto:ankitajnotiya@gmail.com',
    path: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
  },
  {
    label: 'Address',
    value: 'Ashta, Dist. Sehore, MP',
    href: null,
    path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z',
  },
];

const SOCIALS = [
  { name: 'GitHub', href: 'https://github.com/ankitajnotiya', icon: 'fab fa-github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ankit-malviya-16650225b/', icon: 'fab fa-linkedin-in' },
  { name: 'Instagram', href: 'https://www.instagram.com/ankit.ajnotiya/profilecard/?igsh=b3kzM2dhOGxsbGRw', icon: 'fab fa-instagram' },
  { name: 'GFG', href: 'https://www.geeksforgeeks.org/user/ankitma/', icon: 'fas fa-code' },
];

const Contact = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState(''); // '' | 'success' | 'error'
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.mobile,
          subject: `Contact from ${formData.name}`,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Contact request failed');
      }

      setStatus('success');
      setFormData(EMPTY_FORM);
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="contact" id="Contact">
        <div className="contact-inner">
          <header className="contact-head">
            <h2 className="contact-title">Contact Us</h2>
          </header>

          <div className="contact-cards">
            {CONTACTS.map(({ label, value, href, path }) => {
              const Tag = href ? 'a' : 'div';
              return (
                <Tag
                  key={label}
                  className={`contact-card${href ? ' contact-card--link' : ''}`}
                  {...(href ? { href } : {})}
                >
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d={path} />
                    </svg>
                  </span>
                  <span className="contact-card-text">
                    <span className="contact-card-label">{label}</span>
                    <span className="contact-card-value">{value}</span>
                  </span>
                </Tag>
              );
            })}
          </div>

          <form className="contact-form" onSubmit={handleSubmit} aria-busy={isLoading}>
            <div className="contact-row">
              <div className="contact-field">
                <label className="contact-visually-hidden" htmlFor="c-name">Name</label>
                <input
                  id="c-name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-field">
                <label className="contact-visually-hidden" htmlFor="c-email">Email</label>
                <input
                  id="c-email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label className="contact-visually-hidden" htmlFor="c-mobile">Mobile number (optional)</label>
              <input
                id="c-mobile"
                type="tel"
                name="mobile"
                placeholder="Your Mobile No."
                autoComplete="tel"
                inputMode="tel"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="contact-field">
              <label className="contact-visually-hidden" htmlFor="c-message">Message</label>
              <textarea
                id="c-message"
                name="message"
                rows="2"
                placeholder="Your Message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-actions">
              <button className="contact-submit" type="submit" disabled={isLoading}>
                {isLoading ? 'Sending…' : 'Send Message'}
              </button>

              <p
                className={`contact-status${status ? ` contact-status--${status}` : ''}`}
                role="status"
                aria-live="polite"
              >
                {status === 'success' && 'Message sent. I’ll reply soon.'}
                {status === 'error' && 'Couldn’t send your message. Please try again, or email me directly.'}
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer className="contact-footer">
        <div className="footer-socials">
          {SOCIALS.map(({ name, href, icon }) => (
            <a key={name} href={href} target="_blank" rel="noreferrer" className="social-link">
              <i className={icon} aria-hidden="true"></i> {name}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Contact;