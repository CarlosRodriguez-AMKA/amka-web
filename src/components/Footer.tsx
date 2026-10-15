export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Columna 1: Identidad AMKA, Redes y Socios */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo-amka.png" 
                alt="AMKA Sourcing AND Service" 
                className="h-12 w-auto object-contain brightness-0 invert" 
                onError={(e) => { (e.target as HTMLImageElement).src = '/assets/logo-amka.png'; }}
              />
              <span className="font-extrabold text-lg text-white">
                AMKA <span className="text-amka-cyan text-xs font-semibold block">Sourcing AND Service</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Soluciones integrales para la industria y minería. Asesoría comercial, mantenimiento técnico especializado y suministro de refacciones en Cananea, Sonora.
            </p>

            {/* Redes Sociales */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                Síguenos en Redes Sociales
              </span>
              <div className="flex items-center gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 hover:border-amka-cyan hover:bg-slate-700 text-slate-300 hover:text-amka-cyan text-xs font-semibold transition-all flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>

                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 hover:border-amka-purple hover:bg-slate-700 text-slate-300 hover:text-amka-purple text-xs font-semibold transition-all flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Socios con altura destacada h-14 / max-w-[140px] */}
            <div className="space-y-2 pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">
                Socios Estratégicos
              </span>
              <div className="flex items-center gap-6 pt-1 flex-wrap">
                <img 
                  src="/logo-maqysin.png" 
                  alt="MAQYSIN" 
                  className="h-14 max-width-[150px] w-auto object-contain brightness-0 invert opacity-85 hover:opacity-100 transition-opacity" 
                  onError={(e) => { (e.target as HTMLImageElement).src = '/assets/logo-maqysin.png'; }}
                />
                <img 
                  src="/logo-movilgarage.png" 
                  alt="MÓVIL GARAGE" 
                  className="h-14 max-width-[150px] w-auto object-contain brightness-0 invert opacity-85 hover:opacity-100 transition-opacity" 
                  onError={(e) => { (e.target as HTMLImageElement).src = '/assets/logo-movilgarage.png'; }}
                />
              </div>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amka-cyan">Navegación</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios Industriales</a></li>
              <li><a href="#comunicados" className="hover:text-white transition-colors">Comunicados Oficiales</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto Directo */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amka-emerald">Contacto Directo</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <span className="text-amka-emerald font-bold">📍</span>
                <span>Carretera Cananea - Ímuris KM1, Col. Barrilito, C.P. 84622, Cananea, Sonora.</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amka-emerald font-bold">📞</span>
                <a href="tel:6451109501" className="hover:text-white transition-colors">645 110 9501</a> | 
                <a href="tel:6451073624" className="hover:text-white transition-colors">645 107 3624</a>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-amka-emerald font-bold mt-0.5">✉️</span>
                <span className="flex flex-col gap-0.5">
                  <a href="mailto:serviceamka@gmail.com" className="hover:text-white transition-colors">
                    serviceamka@gmail.com
                  </a>
                  <a href="mailto:asesoriaamka@gmail.com" className="hover:text-white transition-colors">
                    asesoriaamka@gmail.com
                  </a>
                </span>
              </p>
            </div>
          </div>

        </div>

        {/* Pie de derechos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} AMKA Sourcing AND Service. Todos los derechos reservados.</p>
          <p className="text-slate-600">Cananea, Sonora, México</p>
        </div>

      </div>
    </footer>
  );
}