import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="Skills">
      <div className="container">
        <h2 className="skills-title">
          Skills
          <div className="projectsection-line"></div>
        </h2>
        <div className="skills-grid">
          <div className="skill-item">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML" />
            <span>HTML</span>
          </div>
          <div className="skill-item">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS" />
            <span>CSS</span>
          </div>
          <div className="skill-item">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" />
            <span>React</span>
          </div>
          <div className="skill-item">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" />
            <span>MySQL</span>
          </div>
          <div className="skill-item">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="Next.js" />
            <span>Next.js</span>
          </div>
          <div className="skill-item">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="PHP" />
            <span>PHP</span>
          </div>
          <div className="skill-item">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React Native" />
            <span>React Native</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
