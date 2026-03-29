import React from 'react';

const Skills: React.FC = () => {
  const mainSkills = [
    { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    { name: 'Python', icon: `${import.meta.env.BASE_URL}imgs/Icon_python.png` },
    { name: 'React', icon: `${import.meta.env.BASE_URL}imgs/Icon_React.png` },
    { name: 'Angular', icon: `${import.meta.env.BASE_URL}imgs/Icon_angular.png` },
    { name: 'Node.js', icon: `${import.meta.env.BASE_URL}imgs/Icon_node.png` },
    { name: 'JavaScript', icon: `${import.meta.env.BASE_URL}imgs/Icon_javascript.png` },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'HTML5', icon: `${import.meta.env.BASE_URL}imgs/Icon_Html.png` },
    { name: 'CSS3', icon: `${import.meta.env.BASE_URL}imgs/Icon_css.png` },
    { name: 'Git', icon: `${import.meta.env.BASE_URL}imgs/Icon_git.png` },
    { name: 'SQL', icon: `${import.meta.env.BASE_URL}imgs/Icon_sql.png` },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  ];

  const exploring = [
    { name: 'Goland', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Machine Learning', icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png' },
    { name: 'Cybersecurity', icon: 'https://cdn-icons-png.flaticon.com/512/2092/2092663.png' },
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
            <div key={skill.name} className="glass group hover:border-sky-400/50 transition-all p-6 flex flex-col items-center gap-4 hover:bg-slate-800/60 cursor-default">
              <div className="w-16 h-16 flex items-center justify-center p-2 rounded-2xl bg-slate-900/50 group-hover:scale-110 transition-transform duration-300">
                <img src={skill.icon} alt={skill.name} className="max-w-full max-h-full object-contain" />
              </div>
              <span className="font-semibold text-sm tracking-wide text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
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
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;
