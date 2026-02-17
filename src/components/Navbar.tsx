export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-bg-dark/80 border-b border-white/5 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold text-white tracking-tight">
          Santi<span className="text-primary">.dev</span>
        </h1>
        <div className="flex gap-8 items-center">
          <a href="#proyectos" className="text-sm text-text-muted hover:text-white transition-colors duration-300">
            Proyectos
          </a>
          <a 
            href="/CV-Santino-Bouvet.pdf" 
            download="Santino_Bouvet_CV.pdf"
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-all duration-300"
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  );
}

