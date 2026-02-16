export interface UniversityProject {
  id: string;
  titulo: string;
  curso: string; // Ej: "Sistemas Operativos"
  descripcion: string;
  techStack: string[]; // Ej: ["Java", "SQL", "TypeScript"]
  githubUrl: string;
  seCompleto: boolean;
}