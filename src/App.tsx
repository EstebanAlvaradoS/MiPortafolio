import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Contact, Footer } from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen selection:bg-sky-500/30">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
