export default function Hero() {
  return (
    <section id="inicio" className="relative py-24 md:py-32 overflow-hidden bg-amka-bg">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 width-[600px] height-[350px] bg-gradient-to-true from-amka-purple/10 to-amka-cyan/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Columna Izquierda */}
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amka-emerald/10 border border-amka-emerald/30 text-amka-emerald text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-amka-emerald animate-pulse" />
            Cananea, Sonora — Soluciones Industriales & Minería
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-amka-text leading-tight tracking-tight">
            Conectando Soluciones, <br />
            <span className="bg-gradient-to-right from-amka-cyan via-amka-emerald to-amka-purple bg-clip-text text-transparent">
              Impulsando Negocios.
            </span>
          </h1>

          <p className="text-amka-muted text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            Asesoría comercial especializada, mantenimiento técnico de alta precisión y proveeduría de soluciones para el sector industrial y minero.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#servicios" 
              className="bg-amka-cyan hover:bg-teal-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-amka-cyan/25 text-center"
            >
              Explorar Servicios
            </a>
            <a 
              href="#comunicados" 
              className="border border-amka-purple/30 hover:border-amka-purple text-amka-text font-semibold px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 transition-all shadow-sm text-center"
            >
              Ver Comunicados
            </a>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta Corporativa y Logos de Socios */}
        <div className="md:col-span-5">
          <div className="bg-amka-card border border-amka-border p-8 rounded-3xl shadow-xl shadow-slate-200 relative">
            
            <div className="h-1 w-20 bg-gradient-to-right from-amka-cyan to-amka-purple rounded-full mb-6" />

            {/* Logo de AMKA en la tarjeta */}
            <div className="mb-4">
              <img 
                src="/logo-amka.png" 
                alt="AMKA" 
                className="h-9 w-auto object-contain" 
                onError={(e) => { (e.target as HTMLImageElement).src = '/assets/logo-amka.png'; }}
              />
            </div>

            <p className="text-amka-muted text-sm mb-6 leading-relaxed">
              Aliados estratégicos en mantenimiento pesado, sistemas hidráulicos, refacciones con garantía y pruebas no destructivas.
            </p>

            {/* Logos de Socios Estratégicos */}
            <div className="border-t border-amka-border pt-6 space-y-3">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">Socios Estratégicos</div>
              <div className="flex items-center gap-6 pt-1">
                <img 
                  src="/logo-maqysin.png" 
                  alt="MAQYSIN" 
                  className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100" 
                  onError={(e) => { (e.target as HTMLImageElement).src = '/assets/logo-maqysin.png'; }}
                />
                <img 
                  src="/logo-movilgarage.png" 
                  alt="MÓVIL GARAGE" 
                  className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100" 
                  onError={(e) => { (e.target as HTMLImageElement).src = '/assets/logo-movilgarage.png'; }}
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}