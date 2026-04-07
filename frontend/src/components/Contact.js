import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.mobile,
          subject: `Contact from ${formData.name}`,
          message: formData.message
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', mobile: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <section className="contact" id="Contact">
        <div class="container">
          <h1 class="section-heading">Contact Us<span></span></h1>
          <div class="card-wrapper">

            {/* <!-- Call Card --> */}
            <div class="card">
              <div class="contact-icon">
                <svg width="50" height="50" fill="#00B7FF" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24c1.12.37 2.33.57 3.54.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.21.2 2.42.57 3.54a1 1 0 0 1-.24 1.05l-2.2 2.2z" />
                </svg>
              </div>
              <h4>Call us On</h4>
              <h6>+91 7470540178</h6>
            </div>

            {/* <!-- Email Card --> */}
            <div class="card">
              <div class="contact-icon">
                <svg width="50" height="50" fill="#00B7FF" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h4>Email us On</h4>
              <h6>ankitajnotiya@gmail.com</h6>
            </div>

            {/* <!-- Address Card --> */}
            <div class="card">
              <div class="contact-icon">
                <svg width="50" height="50" fill="#00B7FF" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
                </svg>
              </div>
              <h4>Address</h4>
              <h6>Ashta Dist Sehore MP</h6>
            </div>

          </div>

          <form onSubmit={handleSubmit}>
            {status === 'success' && (
              <div style={{
                background: '#d4edda',
                color: '#155724',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px',
                border: '1px solid #c3e6cb'
              }}>
                ✅ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            
            {status === 'error' && (
              <div style={{
                background: '#f8d7da',
                color: '#721c24',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px',
                border: '1px solid #f5c6cb'
              }}>
                ❌ Error sending message. Please try again.
              </div>
            )}

            <div className="input-wrap">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="input-wrap-2">
              <input 
                type="text" 
                name="mobile" 
                placeholder="Your Mobile No." 
                value={formData.mobile}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="input-wrap-2">
              <input 
                type="text" 
                name="message" 
                placeholder="Your Message..." 
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="btn-wrapper">
              <button 
                className="btn btn-primary" 
                type="submit"
                disabled={isLoading}
                style={{
                  opacity: isLoading ? 0.7 : 1,
                  cursor: isLoading ? 'not-allowed' : 'pointer'
                }}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-socials">
          <a href="https://github.com/ankitajnotiya" target="_blank" rel="noreferrer" className="social-link">
            <i className="fab fa-github"></i> Github
          </a>
          <a href="https://www.linkedin.com/in/ankit-malviya-16650225b/" target="_blank" rel="noreferrer" className="social-link">
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
          <a href="https://www.instagram.com/ankit.ajnotiya/profilecard/?igsh=b3kzM2dhOGxsbGRw" target="_blank" rel="noreferrer" className="social-link">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.geeksforgeeks.org/user/ankitma/" target="_blank" rel="noreferrer" className="social-link">
            <i className="fab fa-gfg"></i> GFG
          </a>
        </div>
      </footer>
    </>
  );
};

export default Contact;
