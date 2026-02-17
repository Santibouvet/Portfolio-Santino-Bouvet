export interface UniversityProject {
  id: string;
  titulo: string;
  curso: string; // Ej: "Sistemas Operativos"
  descripcion: string;
  techStack: string[]; // Ej: ["Java", "SQL", "TypeScript"]
  githubUrl: string;
  frontUrl?: string; // Opcional, por si el proyecto tiene una demo desplegada
  seCompleto: boolean;
}