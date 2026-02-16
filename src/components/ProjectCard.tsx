import { UniversityProject } from '@/types/project';

export default function ProjectCard({ project }: { project: UniversityProject }) {
  return (
    <div className="group p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-xs font-mono text-blue-400 mb-1">{project.curso}</p>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
            {project.titulo}
          </h3>
        </div>
      </div>
      
      <p className="text-slate-400 text-sm mb-6 line-clamp-3">
        {project.descripcion}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.techStack.map((tech) => (
          <span key={tech} className="text-[10px] px-2 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

