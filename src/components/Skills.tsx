import React from 'react';

const Skills: React.FC = () => {
  const mainSkills = [
    { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  ];

  const exploring = [
    { name: 'Goland', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Machine Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Cybersecurity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  ];

  return (
    <section id="skills" className="bg-slate-900/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Herramientas & <span className="text-sky-400">Habilidades</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto italic">Tecnologías que utilizo para dar vida a mis proyectos y las herramientas que estoy explorando actualmente para expandir mis horizontes.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {mainSkills.map((skill) => (
            <div key={skill.name} className="glass glass-interactive skill-card group p-6 flex flex-col items-center gap-4 cursor-default">
              <div className="skill-icon-container w-20 h-20 flex items-center justify-center p-3 rounded-2xl bg-slate-900/50 group-hover:scale-110 transition-transform duration-300">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]" />
              </div>
              <span className="skill-icon-container font-bold text-sm tracking-widest text-slate-300 group-hover:text-white transition-colors uppercase">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-slate-800">
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-400 flex items-center justify-center gap-3">
            En Expansión & Aprendizaje
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {exploring.map((skill) => (
              <div key={skill.name} className="glass p-4 flex items-center gap-4 hover:border-purple-400/30 transition-all group">
                <div className="w-10 h-10 p-1 bg-slate-800 rounded group-hover:rotate-12 transition-transform">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-base font-bold tracking-wide uppercase text-slate-400 group-hover:text-sky-400 transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;
