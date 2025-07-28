import React, { useEffect, useState } from 'react';
import '../styles/home.css';

export default function App() {
  const pdfUrl = '/Ankit-Malviya-Upated.pdf';
  const [showIframe, setShowIframe] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const handleToggleProjects = () => {
    setShowAllProjects(prev => !prev);
  };
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const handleMouseMove = (e) => {
      const icons = document.querySelectorAll('.floating-icon');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      icons.forEach((icon, index) => {
        const depth = (index + 1) * 10;
        const moveX = (mouseX - 0.5) * depth;
        const moveY = (mouseY - 0.5) * depth;
        icon.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.5}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  
const extraProjects = [
  {
    img: 'assets/heart-defect.png',
    title: 'Heart Defect Monitoring System',
    desc: 'A real-time hardware-integrated web system to monitor and report heart defects using IoT sensors.',
    tags: ['IoT', 'Node.js', 'MongoDB', 'Hardware Integration'],
    video: 'assets/heart-defect.mp4', // add actual video path here
  },
  {
    img: 'assets/vehicle-count.png',
    title: 'Vehicle count',
    desc: 'Vehicle count refers to the process of detecting and counting the number of vehicles in a given image, video, or data stream using computer vision or sensor-based methods in Python.',
    tags: ['Python'],
    video: 'assets/vihicle-count.mp4', // add actual video path here
  },
  {
          img: "assets/e-commerce.jpg",
          title: "E-Commerce",
          desc: "An online shopping platform for browsing, purchasing, and managing products with secure checkout.",
          tags: ["HTML", "CSS", "JAVASCRIPT"],
          link: "https://e-commerce-ankitajnotiya.netlify.app/"
        },
        {
          img: "assets/netflix1.jpg",
          title: "Netflix Clone",
          desc: "A video streaming platform replica with user authentication, movie browsing, and playback features.",
          tags: ["HTML", "CSS", "JAVASCRIPT"],
          link: "https://netlifxclone-ankitajnotiya.netlify.app/"
        },
];

  return (
    <>
      {/* Header */}
<div className="container">
      <header>
        <div className="logo">
          <div className="logo-circle">
            <img src="/assets/ankit.jpeg" alt="Ankit" className="logo-image" />
          </div>
          <span style={{ color: '#00B7FF' }}>Ankit</span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#Education">Education</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            &#9776;
        </div>

        {/* Mobile Popup Nav */}
        {isOpen && (
          <div className="mobile-nav-popup">
            <ul>
              <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
              <li><a href="#Education" onClick={() => setIsOpen(false)}>Education</a></li>
              <li><a href="#Skills" onClick={() => setIsOpen(false)}>Skills</a></li>
              <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
              <li><a href="#Contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </header>
    </div>
      {/* Hero Section */}
      <section className="hero">
        <div className="floating-icons">
          {[1, 2, 3, 4, 5].map((_, idx) => (
            <svg key={idx} className={`floating-icon icon-${idx + 1}`} width="80" height="80">
              <circle cx="40" cy="40" r="35" stroke="#00B7FF" strokeWidth="2" fill="none" />
            </svg>
          ))}
        </div>

        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '4px solid #00B7FF',
            margin: '0 auto 20px',
            overflow: 'hidden'
          }}>
            <img src="/assets/ankit.jpeg" alt="Ankit" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <h2>Hi! I Am Ankit Malviya</h2>
          <h2 className="typing-text">
            <span className="text white">MERN Stack </span>
            <span className="text blue">Developer</span>
          </h2>
          <p className="hero-description">
            A passionate B.Tech student specializing in Internet of Things (IoT). With a strong foundation in programming and web development,
            I am dedicated to creating innovative and efficient solutions that cater to modern-day challenges.
          </p>

<div style={{ marginBottom: 20, display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
  <a
    href="/Ankit-Malviya-Upated.pdf"
    download="Ankit Resume .pdf"
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
        color :'#fffff',
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

      {/* Education Section */}
      <section className="Education" id="Education">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Education</h2>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="/assets/sc.jpg" alt="10th" height="100px" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2021-2025</h4>
                  <h6 className="subheading">SISTec-E, Bhopal</h6>
                  <p>B.Tech - Internet of Things</p>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Specialized in IoT with solid programming and embedded systems knowledge.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="/assets/sc.jpg" alt="12th" height="100px" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2020-2021</h4>
                  <h6 className="subheading">12th Grade</h6>
                  <p>Shastri Smariti Vidhya Mandir, Ashta</p>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Completed Higher Secondary (PCM stream).</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="/assets/sc.jpg" alt="10th" height="100px" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2018-2019</h4>
                  <h6 className="subheading">10th Grade</h6>
                  <p>Shastri Smariti Vidhya Mandir, Ashta</p>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Completed Secondary Education.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Section (Moved after Education) */}
<section className="skills" id="Skills">
  <div className="container">
    <h2 className="skills-title">
      Skills
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
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="NodeJS" />
        <span>NodeJS</span>
      </div>
      <div className="skill-item">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" />
        <span>Python</span>
      </div>
      <div className="skill-item">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="C++" />
        <span>C++</span>
      </div>
    </div>
  </div>
</section>


      {/* Projects Section */}
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
          tags: ["React","Tailwand CSS","Firebase"],
          link: "https://react-zomato.netlify.app/"
        },
        {
          img: "assets/resturant-management.png",
          title: "Restaurant Management",
          desc: "A React-based Restaurant Management Dashboard with user, order, and restaurant controls, charts, and responsive UI.",
          tags: ["React", "Tailwand CSS"],
          link: "https://restaurant-management-upadte.netlify.app/"
        },
        {
          img: "assets/aa2.jpg",
          title: "E-Learning Platform",
          desc: "A web-based application for interactive online courses and skill development.",
          tags: ["HTML", "CSS", "JAVASCRIPT"],
          link: "https://e-learnig-platform.netlify.app/"
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
            {activeVideo === idx ? (
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



      {/* Contact section */}
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

<form action="" method="post">
  <div className="input-wrap">
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
  </div>
  <div className="input-wrap-2">
    <input type="text" name="mobile" placeholder="Your Mobile No." required />
  </div>
    <div className="input-wrap-2">
    <input type="text" name="message" placeholder="Your Message..." required />
  </div>

  <div className="btn-wrapper">
    <button className="btn btn-primary" type="submit">Send Message</button>
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
}
