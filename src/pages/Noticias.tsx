import { TrendingUp, ExternalLink, RefreshCw, Newspaper } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  source: string;
  date: string;
  summary: string;
  category: string;
  url: string; // URL directa y exacta al artículo
}

export default function Noticias() {
  // Tablero de Commodities (Incluyendo Cobre, Oro, Plata, Zinc y Litio)
  const metals = [
    { name: 'Cobre (Cu)', price: '$4.38 / lb', change: '+1.45%', isUp: true, unit: 'USD / Libra' },
    { name: 'Oro (Au)', price: '$2,650.10 / oz', change: '+0.82%', isUp: true, unit: 'USD / Onza' },
    { name: 'Plata (Ag)', price: '$31.45 / oz', change: '-0.35%', isUp: false, unit: 'USD / Onza' },
    { name: 'Litio (Li)', price: '$10,800.00 / t', change: '-1.15%', isUp: false, unit: 'USD / Tonelada' },
    { name: 'Zinc (Zn)', price: '$2,890.00 / t', change: '+2.10%', isUp: true, unit: 'USD / Tonelada' },
  ];

  // Noticias mineras reales con enlaces directos a publicaciones originales
  const news: Article[] = [
    {
      id: 1,
      title: 'Plata, cobre y oro impulsan la minería en Sonora: crece producción y abre panorama para inversión',
      source: 'El Imparcial',
      date: '20 de Junio, 2026',
      summary: 'El sector minero reportó un avance significativo en Sonora, impulsado por cotizaciones internacionales y mayor volumen de extracción de metales clave.',
      category: 'Producción Regional',
      url: 'https://www.elimparcial.com/son/sonora/2026/06/20/plata-cobre-y-oro-impulsan-la-mineria-en-sonora-crece-produccion-y-abre-panorama-para-inversion-y-empleo/'
    },
    {
      id: 2,
      title: 'Inversión minera en México repuntará un 30.8% en 2026 y alcanzará los US$ 6,400 millones',
      source: 'Reporte Minero',
      date: '04 de Agosto, 2026',
      summary: 'CAMIMEX proyecta un importante repunte en la renovación de flota pesada, sistemas de automatización y equipamiento especializado.',
      category: 'Inversión e Industria',
      url: 'https://www.reporteminero.cl/noticia/noticias/2026/08/inversion-minera-mexico-repunta-camimex-2026-plata-cobre'
    },
    {
      id: 3,
      title: 'La Expo Minera AMSAC Cananea se perfila como motor de desarrollo regional',
      source: 'Boletín CAMIMEX',
      date: 'Marzo, 2026',
      summary: 'Cananea reunió a proveedores y empresas del sector en una jornada de integración económica y tecnológica para la región norte de Sonora.',
      category: 'Cananea / Eventos',
      url: 'https://camimex.org.mx/index.php/boletin/boletines/articulo/24348'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Encabezado */}
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
          <Newspaper className="text-cyan-400" size={32} /> Mercado de Metales & Noticias del Sector
        </h1>
        <p className="mt-2 text-slate-400 text-sm">
          Cotizaciones referenciales de commodities e información directamente enlazada a las publicaciones de la prensa especializada.
        </p>
      </div>

      {/* Tablero de Metales */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <TrendingUp className="text-cyan-400" size={24} /> Cotización de Metales (USD)
          </h2>
          <span className="text-xs text-slate-400 flex items-center gap-1 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
            <RefreshCw size={12} className="text-cyan-400" /> Mercado Activo
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
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${metal.isUp ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                  {metal.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Noticias con enlaces directos */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Publicaciones y Noticias Recientes</h2>
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
                  className="text-base font-bold text-white leading-snug hover:text-cyan-400 transition-colors block"
                >
                  {item.title}
                </a>
                <p className="mt-3 text-xs text-slate-400 leading-relaxed">{item.summary}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-300">{item.source}</span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors bg-cyan-950/80 px-3 py-1.5 rounded-lg border border-cyan-800"
                >
                  Leer noticia completa <ExternalLink size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}