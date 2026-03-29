import React from 'react';
import { Mail, Send, MapPin } from 'lucide-react';

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: size, minHeight: size }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: size, minHeight: size }}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative pb-24 border-t border-slate-900">
      <div className="container grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="section-title text-left mb-6">¿Interesado en <span className="text-sky-400">Trabajar Juntos?</span></h2>
          <p className="text-slate-400 mb-10 text-lg">
            Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 glass p-4 border-slate-800/50">
              <div className="w-12 h-12 flex items-center justify-center bg-sky-500/10 text-sky-400 rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <span className="block text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Email</span>
                <span className="text-lg font-medium">esteban.alvarado@example.com</span>
              </div>
            </div>

            <div className="flex items-center gap-4 glass p-4 border-slate-800/50">
              <div className="w-12 h-12 flex items-center justify-center bg-sky-500/10 text-sky-400 rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <span className="block text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Ubicación</span>
                <span className="text-lg font-medium">Bogotá, Colombia</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-12 pt-12 border-t border-slate-900">
            <a href="https://www.linkedin.com/in/solis-esteban-alvarado-suarez-9831921a1/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-slate-800 text-slate-300 rounded-full hover:bg-sky-400 hover:text-slate-950 transition-all">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://github.com/EstebanAlvaradoS" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-slate-800 text-slate-300 rounded-full hover:bg-sky-400 hover:text-slate-950 transition-all">
              <GithubIcon size={20} />
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-slate-800 text-slate-300 rounded-full hover:bg-sky-400 hover:text-slate-950 transition-all">
              <Send size={20} />
            </a>
          </div>
        </div>

        <div className="glass p-10 border-slate-800/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/5 rounded-bl-[100px]"></div>
          <p className="font-bold text-xl mb-8 flex items-center gap-2">Déjame un mensaje</p>
          <div className="flex flex-col gap-6">
            <input type="text" placeholder="Tu nombre" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg p-4 focus:border-sky-400/50 focus:outline-none transition-colors" />
            <input type="email" placeholder="Tu correo" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg p-4 focus:border-sky-400/50 focus:outline-none transition-colors" />
            <textarea placeholder="Cuéntame sobre tu proyecto..." rows={4} className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg p-4 focus:border-sky-400/50 focus:outline-none transition-colors"></textarea>
            <button className="btn btn-primary w-full justify-center py-4">Enviar Mensaje</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950/50">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src="/imgs/Esteba_Logo.png" alt="Logo" className="w-8 h-8 opacity-50" />
            <span className="font-bold text-slate-400 uppercase tracking-widest text-sm">Esteban Alvarado</span>
          </div>
          <span className="text-xs text-slate-600">&copy; {new Date().getFullYear()} Todos los derechos reservados.</span>
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-sky-400 transition-colors">Política de Privacidad</a>
          <a href="#" className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-sky-400 transition-colors">Términos</a>
        </div>
      </div>
    </footer>
  );
};

export { Contact, Footer };
