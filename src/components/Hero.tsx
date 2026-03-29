import React from 'react';
import { Download, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative flex items-center min-h-screen overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-slate-950">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container grid md:grid-cols-2 gap-12 items-center pt-24">
        <div className="animate-slide-up">
          <span className="inline-block py-1 px-3 mb-6 text-xs font-bold tracking-widest uppercase border border-sky-400/30 text-sky-400 bg-sky-400/5 rounded-full">
            Disponible para trabajar
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hola, soy <span className="gradient-text">Esteban</span><br />
            Alvarado
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg">
            Ingeniero de Software especializado en crear experiencias digitales robustas y memorables.
            Apasionado por transformar problemas complejos en soluciones tecnológicas elegantes.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary">
              Ver proyectos <ChevronRight size={18} />
            </a>
            <a href="/legacy/assets/imgs/CV_Esteban.pdf" className="btn btn-outline">
              Descargar CV <Download size={18} />
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in delay-300">
          <div className="relative z-10 p-2 glass rotate-3 hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto shadow-2xl">
            <img 
              src={`${import.meta.env.BASE_URL}imgs/IMG_2621.jpg`} 
              alt="Esteban Alvarado" 
              className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Accent Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-500/20 blur-[60px] rounded-full -z-10"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
