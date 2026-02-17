import { UniversityProject } from '@/types/project';

export default function ProjectCard({ project }: { project: UniversityProject }) {
  const isMetaMapa = project.id === '1';

  return (
    <div className="group h-full p-6 rounded-xl border border-white/10 bg-bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col">
      <div className="mb-6">
        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">{project.curso}</p>         
        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
          {project.titulo}
        </h3>
      </div>      
      <p className="text-text-muted text-sm mb-6 leading-relaxed flex-grow">
        {project.descripcion}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/5 text-primary border border-primary/20 font-medium">
            {tech}
          </span>
        ))}
      </div>
      {isMetaMapa ? (
        <div className="flex gap-3">
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-300 group/link"
          >
            Ver back
            <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a 
            href={project.frontUrl || ''}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-300 group/link"
          >
            Ver front
            <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      ) : (
        <a 
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-300 group/link"
        >
          Ver repositorio
          <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
        </a>
      )}
    </div>
  );
}