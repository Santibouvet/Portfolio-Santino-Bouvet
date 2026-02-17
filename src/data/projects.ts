import { UniversityProject } from "../types/project";

export const projects : UniversityProject[] = [
    {
        id:'1',
        titulo: "MetaMapa",
        curso: "Diseño de Sistemas",
        descripcion: "Aplicación web escalable para centralizar eventos geolocalizados de múltiples fuentes. Implementé una arquitectura mantenible con detección de spam y paneles interactivos, optimizando el desarrollo mediante Pair Programming con IA y asegurando altos estándares de calidad.",
        techStack: ["Java" , "Spring Boot ", "Javascript", "CSS" , "MySQL"],
        githubUrl: "https://github.com/Santibouvet/MetaMapa",
        frontUrl: "https://github.com/Santibouvet/MetaMapa-Front",
        seCompleto: true
    },

    {
        id:'2',
        titulo: "Birbnb",
        curso: "Desarrollo de software",
        descripcion: "Plataforma web funcional inspirada en Airbnb. Incluye búsqueda con filtros, sistema de notificaciones y la posibilidad de realizar tanto publicaciones de propiedades como reservas",
        techStack: ["Express.js" , "React" , "Tailwind" , "Node.js" , "MongoDB" , "Render" , "Vercel"],
        githubUrl: "https://github.com/Santibouvet/Proyecto-BirBnb",
        seCompleto: true
    },

    {
        id:'3',
        titulo: "Sistema operativo en entorno linux con C",
        curso: "Sistemas Operativos",
        descripcion: "plataforma distribuida que simula el funcionamiento de un sistema operativo, enfocándose en la planificación de procesos, gestión de memoria virtual y un sistema de archivos persistente. ",
        techStack: ["Express.js" , "React" , "Tailwind" , "Node.js" , "MongoDB" , "Render" , "Vercel"],
        githubUrl: "https://github.com/Santibouvet/Master-of-Files",
        seCompleto: true
    },

    {
        id:'4',
        titulo: "Chess Royale",
        curso: "Paradigmas de la Programación",
        descripcion: "Juego desarrollado en wollok donde aplicamos varios conceptos del paradigma orientado a objetos, como el polimorfismo entre distintas clases u objetos, la idea de que todo es un objeto, incluidas las funciones, y la herencia entre clases. ",
        techStack: ["C" , "Linux"],
        githubUrl: "https://github.com/Santibouvet/Juego-en-Wollok",
        seCompleto: true
    }


];