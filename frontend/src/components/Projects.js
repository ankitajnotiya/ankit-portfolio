import React, { useState } from 'react';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const handleToggleProjects = () => {
    setShowAllProjects(prev => !prev);
  };

  const extraProjects = [
    {
      img: "assets/e-learning-platform.jpg",
      title: "E-Learning Platform",
      desc: "A simple E-Learning Platform built using HTML, CSS, and JavaScript that allows users to browse courses like HTML, CSS, and JavaScript, watch video lectures, and continue learning with basic progress tracking.",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      link: "https://e-learning-platform-updated.netlify.app/"
    },
    {
      img: 'assets/heart-defect.png',
      title: 'Heart Defect Monitoring System',
      desc: 'A real-time hardware-integrated web system to monitor and report heart defects using IoT sensors.',
      tags: ['IoT', 'Node.js', 'MongoDB', 'Hardware Integration'],
      video: 'assets/heart-defect.mp4',
    },
    {
      img: 'assets/vehicle-count.png',
      title: 'Vehicle count',
      desc: 'Vehicle count refers to the process of detecting and counting the number of vehicles in a given image, video, or data stream using computer vision or sensor-based methods in Python.',
      tags: ['Python'],
      video: 'assets/vihicle-count.mp4',
    },
    {
      img: "assets/bookvalut.png",
      title: " BookVault Inventory System",
      desc: "Developed a digital inventory management system with real-time book tracking, search functionality, and a secure data vault interface. Integrated REST APIs for dynamic data fetching and used Tailwind CSS to build a clean, mobile-responsive dashboard for seamless inventory control.",
      tags: ["React.js", "Tailwind CSS", "REST API"],
      link: "https://react-assignment-nexgensis.netlify.app/"
    },
    
  ];

  return (
    <section className="projectsection-section" id="projects">
      <div className="projectsection-container">
        <div className="projectsection-title">
          <h2>projects</h2>
          <div className="projectsection-line"></div>
        </div>

        <div className="projectsection-grid">
          {/* First 3 default visible */}
          {[
            {
              img: "assets/zomato.png",
              title: "Zomato Web",
              desc: "A responsive food ordering platform inspired by Zomato, offering dynamic menus, dish selection, real-time order processing, and integrated payment options for a seamless user experience.",
tags: ["React", "Tailwind CSS", "PHP", "Laravel", "MySQL"],
              link: "https://zomato-clone-web-2025.netlify.app/"
            },
            {
              img: "assets/myapp.png",
              title: "SmartServe RMS",
              desc: "Developed a multi-service super-app that integrates real-time food ordering, job listings, and business services into a single platform Built a highly responsive marketplace UI with Firebase authentication for secure user access and seamless  data synchronization across devices",
              tags: ["React Native", "Expo", "Tailwind CSS"],
              link: "https://smartserve-app.netlify.app/"
            },
            {
              img: "assets/resturant-management.png",
              title: "Restaurant Management",
              desc: "A React-based Restaurant Management Dashboard with user, order, and restaurant controls, charts, and responsive UI.",
              tags: ["React", "Tailwand CSS"],
              link: "https://restaurant-management-upadte.netlify.app/"
            },
            
            
          ].map((project, idx) => (
            <div className="projectsection-card" key={idx}>
              <div className="projectsection-image">
                <img src={project.img} alt={project.title} />
                <div className="projectsection-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              </div>
              <div className="projectsection-content">
                <h3 className="projectsection-title">{project.title}</h3>
                <p className="projectsection-description">{project.desc}</p>
                <div className="projectsection-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="projectsection-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Extra Projects (if any) */}
          {showAllProjects && extraProjects.map((project, idx) => (
            <div className="projectsection-card" key={`extra-${idx}`}>
              <div className="projectsection-image">
                {project.video ? (
                  activeVideo === idx ? (
                    <video
                      width="100%"
                      controls
                      autoPlay
                      muted
                      onEnded={() => setActiveVideo(null)}
                      style={{ borderRadius: '8px' }}
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <>
                      <img src={project.img} alt={project.title} />
                      <div className="projectsection-overlay">
                        <button onClick={() => setActiveVideo(idx)}>View Project</button>
                      </div>
                    </>
                  )
                ) : project.link ? (
                  <>
                    <img src={project.img} alt={project.title} />
                    <div className="projectsection-overlay">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                  </>
                ) : (
                  <img src={project.img} alt={project.title} />
                )}
              </div>
              <div className="projectsection-content">
                <h3 className="projectsection-title">{project.title}</h3>
                <p className="projectsection-description">{project.desc}</p>
                <div className="projectsection-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="projectsection-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="projectsection-btn" onClick={handleToggleProjects}>
            {showAllProjects ? "View Less" : "View All"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
