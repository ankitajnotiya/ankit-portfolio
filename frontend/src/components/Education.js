import React from 'react';

const Education = () => {
  return (
    <section className="Education" id="Education">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            Education
            <div className="projectsection-line"></div>
          </h2>
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
                <p>B.Tech - CSE - Internet of Things</p>
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
  );
};

export default Education;
