export default function Conocimientos() {
  const categories = [
    {
      title: "Lenguajes",
      skills: ["JavaScript", "Java", "Python", "C", "C++", "Haskell", "Prolog"]
    },
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "Tailwind", "Figma"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"]
    },
    {
      title: "Bases de datos",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Herramientas",
      skills: ["Git", "GitHub", "Docker", "Postman", "Linux"]
    },
    {
      title: "AI",
      skills: ["Copilot", "Gemini"]
    }
  ];

  return (
    <section id="conocimientos" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Conocimientos Técnicos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.title}
            className="p-6 rounded-lg bg-bg-card border border-white/5 hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-primary mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block px-3 py-1 rounded-full bg-white/5 text-text-muted text-sm hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
