export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-amka-card/90 backdrop-blur-md border-b border-amka-border shadow-xs">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logotipo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-true from-amka-purple to-amka-cyan flex items-center justify-center font-black text-white text-xl shadow-md shadow-amka-purple/20">
            A
          </div>
          <span className="font-bold text-lg tracking-wide text-amka-text">
            AMKA <span className="text-amka-cyan font-semibold text-xs block -mt-1">Sourcing AND Service</span>
          </span>
        </div>

        {/* Menú de Navegación */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a href="#inicio" className="text-amka-cyan border-b-2 border-amka-cyan pb-1">
            Inicio
          </a>
          <a href="#servicios" className="text-amka-muted hover:text-amka-text transition-colors">
            Servicios
          </a>
          <a href="#comunicados" className="text-amka-muted hover:text-amka-text transition-colors">
            Comunicados
          </a>
        </nav>

        {/* Botón de Contacto Directo */}
        <a 
          href="https://wa.me/526451109501" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-amka-emerald hover:bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-amka-emerald/20 flex items-center gap-2"
        >
          <span>Contactar</span>
          <span className="text-xs bg-black/10 px-2 py-0.5 rounded-md">645 110 9501</span>
        </a>

      </div>
    </header>
  );
}