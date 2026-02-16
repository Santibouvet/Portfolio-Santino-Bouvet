import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-12">
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Mis Proyectos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}