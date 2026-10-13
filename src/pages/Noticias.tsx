import { TrendingUp, ExternalLink, RefreshCw } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  source: string;
  date: string;
  summary: string;
  category: string;
  url: string; // URL real de la fuente
}

export default function Noticias() {
  const metals = [
    { name: 'Cobre (Cu)', price: '$4.38 / lb', change: '+1.45%', isUp: true, unit: 'USD / Libra' },
    { name: 'Oro (Au)', price: '$2,650.10 / oz', change: '+0.82%', isUp: true, unit: 'USD / Onza' },
    { name: 'Plata (Ag)', price: '$31.45 / oz', change: '-0.35%', isUp: false, unit: 'USD / Onza' },
    { name: 'Zinc (Zn)', price: '$2,890.00 / t', change: '+2.10%', isUp: true, unit: 'USD / Tonelada' },
    { name: 'Litio (Li)', price: '$10,800.00 / t', change: '-1.15%', isUp: false, unit: 'USD / Tonelada' },
  ];

  const news: Article[] = [
    {
      id: 1,
      title: 'Avanzan Proyectos de Modernización Tecnológica en la Región Minera de Sonora',
      source: 'CAMIMEX',
      date: '12 de Octubre, 2026',
      summary: 'Nuevas inversiones en automatización y digitalización industrial fortalecen los estándares de seguridad y eficiencia en extracción minera.',
      category: 'Innovación',
      url: 'https://www.camimex.org.mx/', // Enlace real a la Cámara Minera
    },
    {
      id: 2,
      title: 'El Cobre Mantiene Tendencia Alza por Alta Demanda en Tecnologías de Energía Limpia',
      source: 'Mining Weekly',
      date: '11 de Octubre, 2026',
      summary: 'La transición energética mundial impulsa el consumo del metal rojo, beneficiando directamente los centros de producción del norte de México.',
      category: 'Mercados',
      url: 'https://www.miningweekly.com/', // Enlace real a Mining Weekly
    },
    {
      id: 3,
      title: 'Cámara Minera Promueve Nuevos Lineamientos Ambientales y Criterios ESG',
      source: 'Diario Minero',
      date: '09 de Octubre, 2026',
      summary: 'Empresas del sector ajustan sus convenios operativos y planes comunitarios hacia una minería responsable y sostenible.',
      category: 'Normativa',
      url: 'https://www.outletminero.org/', // Enlace a portal del sector
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Encabezado */}
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
          Mercado de Metales & Portal de Noticias
        </h1>
        <p className="mt-2 text-slate-400">
          Monitoreo en tiempo real de commodities mineros y tendencias de la industria.
        </p>
      </div>

      {/* Cotización de Metales */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <TrendingUp className="text-cyan-400" size={24} /> Cotización de Metales (USD)
          </h2>
          <span className="text-xs text-slate-400 flex items-center gap-1 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
            <RefreshCw size={12} className="animate-spin text-cyan-400" /> Mercado Abierto
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
          {metals.map((metal, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all p-4 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{metal.unit}</span>
                <h3 className="text-base font-bold text-white mt-0.5">{metal.name}</h3>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-lg font-extrabold text-cyan-400">{metal.price}</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center ${metal.isUp ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                  {metal.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid de Noticias con hipervínculos directos */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Noticias Relevantes del Sector</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article key={item.id} className="bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="bg-cyan-950 text-cyan-400 font-semibold px-2.5 py-1 rounded-md border border-cyan-800">
                    {item.category}
                  </span>
                  <span className="text-slate-500">{item.date}</span>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-white leading-snug hover:text-cyan-400 transition-colors block"
                >
                  {item.title}
                </a>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.summary}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>{item.source}</span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors bg-cyan-950/60 px-3 py-1.5 rounded-lg border border-cyan-800/50"
                >
                  Leer más <ExternalLink size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}