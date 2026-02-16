import { UniversityProject } from "../types/project";

export const projects : UniversityProject[] = [
    {
        id:'1',
        titulo: "MetaMapa",
        curso: "Diseño de Sistemas",
        descripcion: "Aplicación web escalable para centralizar eventos geolocalizados de múltiples fuentes. Implementé una arquitectura mantenible con detección de spam y paneles interactivos, optimizando el desarrollo mediante Pair Programming con IA y asegurando altos estándares de calidad.",
        techStack: ["Java" , "Spring Boot ", "Javascript", "CSS" , "MySQL"],
        githubUrl: "https://github.com/tu-usuario/repo",
        seCompleto: true
    },

    {
            id:'2',
            titulo: "Birbnb",
            curso: "Desarrollo de software",
            descripcion: "Plataforma web funcional inspirada en Airbnb. Incluye búsqueda con filtros, sistema de notificaciones y la posibilidad de realizar tanto publicaciones de propiedades como reservas",
            techStack: ["Express.js" , "React" , "Tailwind" , "Node.js" , "MongoDB" , "Render" , "Vercel"],
            githubUrl: "https://github.com/tu-usuario/repo",
            seCompleto: true
    }


];