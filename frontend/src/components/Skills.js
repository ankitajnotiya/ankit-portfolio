import React from 'react';

const icon = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-${variant}.svg`;

const GROUPS = [
  {
    title: 'Frontend',
    note: 'Interfaces & state',
    wide: true,
    items: [
      { name: 'HTML', src: icon('html5') },
      { name: 'CSS', src: icon('css3') },
      { name: 'JavaScript', src: icon('javascript') },
      { name: 'React', src: icon('react') },
      { name: 'Next.js', src: icon('nextjs'), invert: true },
      { name: 'Tailwind CSS', src: icon('tailwindcss') },
      { name: 'Redux Toolkit', src: icon('redux') },
    ],
  },
  {
    title: 'Backend & Database',
    note: 'APIs & data',
    items: [
      { name: 'PHP', src: icon('php') },
      { name: 'Laravel', src: icon('laravel') },
      { name: 'MySQL', src: icon('mysql') },
    ],
  },
  {
    title: 'Mobile',
    note: 'Android & iOS',
    items: [{ name: 'React Native', src: icon('react') }],
  },
  {
    title: 'Workflow',
    note: 'Version control & hosting',
    wide: true,
    items: [
      { name: 'Git', src: icon('git') },
      { name: 'GitHub', src: icon('github'), invert: true },
      { name: 'Netlify', src: icon('netlify') },
    ],
  },
];

const Skills = () => (
  <section className="skills" id="Skills">
    <div className="skills-inner">
      <header className="skills-head">
        <h2 className="skills-title">Skills</h2>
      </header>

      <div className="skills-board">
        {GROUPS.map((group, i) => (
          <article
            key={group.title}
            className={`skills-panel${group.wide ? ' skills-panel--wide' : ''}`}
            style={{ '--i': i }}
          >
            <div className="skills-panel-head">
              <h3>{group.title}</h3>
              <span>{group.note}</span>
            </div>
            <ul className="skills-list">
              {group.items.map((skill) => (
                <li className="skills-chip" key={skill.name}>
                  <img
                    src={skill.src}
                    alt=""
                    loading="lazy"
                    className={skill.invert ? 'is-invert' : undefined}
                  />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;