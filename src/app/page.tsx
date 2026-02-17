import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-bg-dark to-bg-dark text-white pt-24">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Hola, soy <span className="text-primary">Santino</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
            Estudiante de Ingeniería en Sistemas en la UTN. Especializado en desarrollo de software y arquitectura de sistemas. Apasionado por resolver problemas complejos y crear soluciones escalables.
          </p>
          <div className="flex gap-4 pt-4">
            <a 
              href="#proyectos" 
              className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-all duration-300"
            >
              Ver proyectos
            </a>
            <a 
              href="/CV-Santino-Bouvet.pdf" 
              download="Santino_Bouvet_CV.pdf"
              className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Proyectos destacados</h2>
        <p className="text-text-muted mb-12 text-lg">Algunos de los proyectos que he realizado en mi carrera académica.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-white/5 bg-bg-card/50 mt-20 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-text-muted">
          <p>© 2026 Santino Bouvet.</p>
        </div>
      </section>
    </main>
  );
}