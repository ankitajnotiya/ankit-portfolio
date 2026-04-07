import React, { useState } from 'react';

const Hero = () => {
  const pdfUrl = '/assets/Ankit Resume.pdf';
  const [showIframe] = useState(false);

  return (
    <section className="hero">
      {/* <div className="floating-icons">
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <svg key={idx} className={`floating-icon icon-${idx + 1}`} width="80" height="80">
            <circle cx="40" cy="40" r="35" stroke="#00B7FF" strokeWidth="2" fill="none" />
          </svg>
        ))}
      </div> */}

      <div className="container hero-container" style={{ textAlign: 'center', position: 'relative', zIndex: '1', transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: '4px solid #00B7FF',
          margin: '-30px auto 20px',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 183, 255, 0.5)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          <img src="/assets/ankit.jpeg" alt="Ankit" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.3s ease' }} />
        </div>

        <h2>Hi! I Am Ankit Malviya</h2>
        <h2 className="typing-text">
          <span className="text white">MERN</span>
          <span className="text blue"> Stack </span>
          <span className="text white">Developer</span>
        </h2>
        <p className="hero-description">
          A passionate B.Tech student specializing in Internet of Things (IoT). With a strong foundation in programming and web development,
          I am dedicated to creating innovative and efficient solutions that cater to modern-day challenges.
        </p>

        <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a
            href="/assets/Ankit Resume.pdf"
            download="Ankit Resume.pdf"
            style={{ textDecoration: 'none' }}
          >
            <button
              style={{
                padding: '8px 16px',
                cursor: 'pointer',
                borderRadius: '10px',
                border: '2px solid #00B7FF',
                color: '#00B7FF',
                fontWeight: 'bold',
                // transition: 'background-color 0.3s ease',
                height: '40px',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ffff'}
              // onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Download Resume
            </button>
          </a>
        </div>

        {showIframe && (
          <div style={{ border: '1px solid #ccc', height: 600, marginTop: 20 }}>
            <iframe
              src={pdfUrl}
              title="Resume PDF"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
