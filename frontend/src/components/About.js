import React, { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="about" id="About">
      <div className="container">
        <h2 className="section-title">
          About Me
          <div className="section-line"></div>
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>ANKIT MALVIYA</h3>
            
            <div className="about-summary">
              <p>
                Hi! I'm Ankit, a passionate Computer Science Engineering student with a love for creating 
                beautiful and functional web applications. I specialize in frontend development and enjoy 
                turning ideas into reality through clean, efficient code.
              </p>
              
              {isExpanded && (
                <>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                    projects, or learning about the latest trends in web development. I believe in continuous 
                    learning and always strive to improve my skills.
                  </p>
                  <p>
                    My journey in tech started with curiosity about how things work on the internet, and it has 
                    evolved into a passion for creating user-centric digital experiences. I love the challenge of 
                    solving complex problems and the satisfaction of seeing my code come to life.
                  </p>
                  
                  <div className="personal-info">
                    <div className="info-item">
                      <i className="fas fa-code"></i>
                      <span>200+ GFG Problems Solved</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-graduation-cap"></i>
                      <span>CGPA: 7.41</span>
                    </div>
                  </div>
                </>
              )}
              
              <button 
                className="more-less-btn"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
