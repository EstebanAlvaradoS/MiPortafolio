import React from 'react';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: size, minHeight: size }}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Sistema ERP Omnicanal',
      category: 'Software Architecture',
      desc: 'Plataforma robusta para gestión de inventarios y logística, con un backend de alto rendimiento desarrollado en Go.',
      tags: ['Go', 'GORM', 'PostgreSQL', 'React'],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      link: '#',
      github: 'https://github.com/EstebanAlvaradoS'
    },
    {
      title: 'Manejo de Usuarios & Auditoría',
      category: 'Security & Auth',
      desc: 'Módulo integral para la gestión de accesos, edición de perfiles y trazabilidad de acciones mediante autenticación JWT y roles dinámicos.',
      tags: ['Go', 'JWT', 'PostgreSQL', 'React'],
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      link: '#',
      github: 'https://github.com/EstebanAlvaradoS'
    },
    {
      title: 'Logística & Seguimiento',
      category: 'En Desarrollo',
      desc: 'Interfaz optimizada para el rastreo y control de pedidos en tiempo real. Actualmente integrando servicios backend para el consumo de estados y rutas dinámicas.',
      tags: ['React', 'API Integration', 'Docker', 'Go'],
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      link: '#',
      github: 'https://github.com/EstebanAlvaradoS'
    }
  ];

  return (
    <section id="projects" className="relative">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="section-title text-left mb-4">Proyectos <span className="text-sky-400">Seleccionados</span></h2>
            <p className="text-slate-400">Una muestra de las soluciones que he diseñado e implementado, enfocadas en escalabilidad, rendimiento y experiencia de usuario.</p>
          </div>
          <a href="https://github.com/EstebanAlvaradoS" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-sm">
            Ver todo el repositorio <GithubIcon size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="glass glass-interactive flex flex-col group overflow-hidden border border-slate-800/50">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md border border-sky-400/30 text-sky-400 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-medium px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-800">
                  <a href={project.link} className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-sky-400 hover:text-white transition-colors">
                    Demo <ExternalLink size={14} />
                  </a>
                  <a href={project.github} className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                    Código <GithubIcon size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Private Projects Section */}
      <div className="container mt-24 pt-12 border-t border-slate-900">
        <h3 className="text-2xl font-bold mb-10 text-center text-slate-400 flex items-center justify-center gap-3">
          Otros Desarrollos & Experiencias
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "IA Identificador de Facturas",
              desc: "Procesamiento inteligente de documentos contables mediante visión artificial.",
              tech: ["Python", "Flask", "Vision IA"]
            },
            {
              title: "Automatización de Correos",
              desc: "Sistema de despacho masivo y personalizado con integración de reportes.",
              tech: ["Python", "SQLite", "SMTP"]
            },
            {
              title: "Plataforma de Mantenimiento",
              desc: "Portal web para gestión de tickets y base de conocimientos técnicos.",
              tech: ["HTML5", "CSS3", "JS"]
            },
            {
              title: "CRM de Gestión Comercial",
              desc: "Solución de administración local para control de agenda y servicios.",
              tech: ["React / JS", "CSS3", "Node.js"]
            }
          ].map((item, idx) => (
            <div key={idx} className="glass p-6 group hover:border-sky-400/30 transition-all flex flex-col items-center text-center">
              <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-3 block">{item.tech.join(' • ')}</span>
              <h4 className="font-bold text-lg mb-3 group-hover:text-white transition-colors">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed italic border-t border-slate-800 pt-4">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 w-full">
          <p className="text-[10px] text-slate-500 bg-slate-900/40 py-3 px-6 rounded-full inline-block border border-slate-800/50">
            * Estos proyectos son de carácter privado o bajo contrato de confidencialidad. Detalles técnicos disponibles bajo solicitud.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
