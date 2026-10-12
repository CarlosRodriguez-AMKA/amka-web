import { ShieldCheck, Gavel, Calendar, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-lg w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-indigo-600/20 text-indigo-400 p-3 rounded-2xl border border-indigo-500/30">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white">AMKA</h1>
            <p className="text-slate-400 text-xs tracking-wider uppercase">Plataforma Integral</p>
          </div>
        </div>

        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
          Infraestructura digital configurada con TypeScript, React y Tailwind CSS para la administración de la empresa.
        </p>

        <div className="space-y-3">
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-5 rounded-2xl transition-all flex items-center justify-between group shadow-lg shadow-indigo-600/25">
            <span className="flex items-center gap-2">
              <Gavel size={18} /> Plataforma de Subastas
            </span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-3 px-5 rounded-2xl transition-all flex items-center justify-between group border border-slate-700">
            <span className="flex items-center gap-2">
              <Calendar size={18} /> Agenda y Convenios
            </span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}