import React from 'react';

const Experience = () => {
  return (
    <section className="experience" id="Experience">
      <div className="container">
        <h2 className="section-title">
          Experience
          <div className="section-line"></div>
        </h2>
        
        <div className="experience-content">
          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-role">
                <h3>Frontend Developer</h3>
                <span className="experience-type">Full-Time</span>
              </div>
              <div className="experience-details">
                <div className="company">
                  <i className="fas fa-building"></i>
                  <span>YoursCollege (Remote)</span>
                </div>
                <div className="duration">
                  <i className="fas fa-calendar"></i>
                  <span>Sep 2025 – Feb 2026</span>
                </div>
              </div>
            </div>
            
            <div className="experience-description">
              <ul>
                <li>
                  <strong>UI/UX & Performance:</strong> Developed responsive web interfaces and optimized performance using 
                  Next.js and Lazy Loading.
                </li>
                <li>
                  <strong>Cross-Browser Compatibility:</strong> Ensured seamless functionality across all major browsers and 
                  devices following best coding practices.
                </li>
                <li>
                  <strong>Collaboration:</strong> Worked closely with design and backend teams to implement functional 
                  web applications from UI/UX designs.
                </li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-role">
                <h3>Frontend Developer</h3>
                <span className="experience-type">Intern</span>
              </div>
              <div className="experience-details">
                <div className="company">
                  <i className="fas fa-building"></i>
                  <span>PlexiGenius Solutions Pvt Ltd (Remote)</span>
                </div>
                <div className="duration">
                  <i className="fas fa-calendar"></i>
                  <span>Nov 2024 – May 2025</span>
                </div>
              </div>
            </div>
            
            <div className="experience-description">
              <ul>
                <li>
                  Optimized website performance by improving load times and reducing errors.
                </li>
                <li>
                  Developed responsive web pages using HTML, CSS, and JavaScript to ensure seamless compatibility 
                  across mobile, tablet, and desktop devices.
                </li>
                <li>
                  Worked on modern UI components using React.js, enhancing code and improving user interface 
                  responsiveness.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
