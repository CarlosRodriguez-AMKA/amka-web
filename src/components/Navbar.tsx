import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Gavel, Newspaper, Home } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <ShieldCheck className="text-amber-500" size={28} />
            <span className="text-xl font-black tracking-tight text-white">AMKA</span>
          </Link>

          <div className="flex space-x-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-all ${
                isActive('/') 
                  ? 'bg-amber-600 text-white' 
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Home size={16} /> Inicio
            </Link>

            <Link
              to="/subastas"
              className={`px-3 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-all ${
                isActive('/subastas') 
                  ? 'bg-amber-600 text-white' 
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Gavel size={16} /> Subastas
            </Link>

            <Link
              to="/noticias"
              className={`px-3 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-all ${
                isActive('/noticias') 
                  ? 'bg-amber-600 text-white' 
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Newspaper size={16} /> Noticias y Metales
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
