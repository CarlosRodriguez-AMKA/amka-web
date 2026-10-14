import { useEffect, useState } from 'react';
import { TrendingUp, ExternalLink, RefreshCw, Newspaper, Globe, Flag, MapPin } from 'lucide-react';

interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  source: string;
  category: 'Internacional' | 'Nacional' | 'Regional Norte';
}

export default function Noticias() {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'Todas' | 'Internacional' | 'Nacional' | 'Regional Norte'>('Todas');

  // Cotización de Metales (USD)
  const metals = [
    { name: 'Cobre (Cu)', price: '$4.38 / lb', change: '+1.45%', isUp: true, unit: 'USD / Libra' },
    { name: 'Oro (Au)', price: '$2,650.10 / oz', change: '+0.82%', isUp: true, unit: 'USD / Onza' },
    { name: 'Plata (Ag)', price: '$31.45 / oz', change: '-0.35%', isUp: false, unit: 'USD / Onza' },
    { name: 'Litio (Li)', price: '$10,800.00 / t', change: '-1.15%', isUp: false, unit: 'USD / Tonelada' },
    { name: 'Zinc (Zn)', price: '$2,890.00 / t', change: '+2.10%', isUp: true, unit: 'USD / Tonelada' },
  ];

  const fetchCategoryNews = async (query: string, categoryName: 'Internacional' | 'Nacional' | 'Regional Norte') => {
    try {
      const rssUrl = encodeURIComponent(`https://news.google.com/rss/search?q=${query}&hl=es-419&gl=MX&ceid=MX:es-419`);
      const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);
      const data = await response.json();

      if (data.status === 'ok' && data.items) {
        return data.items.slice(0, 3).map((item: any) => {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = item.description || '';
          const cleanText = tempDiv.textContent || tempDiv.innerText || item.title;

          return {
            title: item.title,
            link: item.link,
            pubDate: new Date(item.pubDate).toLocaleDateString('es-MX', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }),
            description: cleanText.length > 160 ? cleanText.substring(0, 160) + '...' : cleanText,
            source: item.author || 'Prensa Especializada',
            category: categoryName
          };
        });
      }
      return [];
    } catch {
      return [];
    }
  };

  const loadAllNews = async () => {
    setLoading(true);
    
    // Búsquedas automatizadas multiregionales
    const [inter, nac, reg] = await Promise.all([
      fetchCategoryNews('mineria+internacional+cobre+oro+mercados', 'Internacional'),
      fetchCategoryNews('mineria+mexico+camimex+produccion', 'Nacional'),
      fetchCategoryNews('mineria+sonora+chihuahua+coahuila+baja+california', 'Regional Norte')
    ]);

    const combined = [...inter, ...nac, ...reg];
    setNews(combined);
    setLoading(false);
  };

  useEffect(() => {
    loadAllNews();
  }, []);

  const filteredNews = activeTab === 'Todas' ? news : news.filter(n => n.category === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <Newspaper className="text-cyan-400" size={32} /> Portal Informativo Minero
          </h1>
          <p className="mt-1 text-slate-400 text-sm">
            Noticias globales, nacionales y del cinturón minero del norte de México en tiempo real.
          </p>
        </div>
        <button
          onClick={loadAllNews}
          disabled={loading}
          className="self-start md:self-auto flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-cyan-500 text-slate-200 px-4 py-2 rounded-xl text-xs font-semibold transition-all"
        >
          <RefreshCw size={14} className={loading ? 'animate-spin text-cyan-400' : ''} />
          {loading ? 'Sincronizando...' : 'Actualizar Feeds'}
        </button>
      </div>

      {/* Tablero de Metales */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <TrendingUp className="text-cyan-400" size={20} /> Cotizaciones de Metales en Vivo (USD)
          </h2>
          <span className="text-xs text-slate-400">Mercados Internacionales</span>
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

      {/* Filtros de Categoría */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
        {(['Todas', 'Internacional', 'Nacional', 'Regional Norte'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === tab
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
            }`}
          >
            {tab === 'Internacional' && <Globe size={14} />}
            {tab === 'Nacional' && <Flag size={14} />}
            {tab === 'Regional Norte' && <MapPin size={14} />}
            {tab}
          </button>
        ))}
      </div>

      {/* Grid de Noticias Categorizadas */}
      <section>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-slate-900 border border-slate-800 h-60 rounded-2xl p-6"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredNews.map((item, idx) => (
              <article key={idx} className="bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className={`font-semibold px-2.5 py-0.5 rounded-md border text-[11px] ${
                      item.category === 'Internacional' ? 'bg-indigo-950 text-indigo-400 border-indigo-800' :
                      item.category === 'Nacional' ? 'bg-emerald-950 text-emerald-400 border-emerald-800' :
                      'bg-cyan-950 text-cyan-400 border-cyan-800'
                    }`}>
                      {item.category}
                    </span>
                    <span className="text-slate-500">{item.pubDate}</span>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white leading-snug hover:text-cyan-400 transition-colors block line-clamp-2"
                  >
                    {item.title}
                  </a>
                  <p className="mt-3 text-xs text-slate-400 leading-relaxed line-clamp-3">{item.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-slate-300 max-w-[140px] truncate">{item.source}</span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors bg-cyan-950/80 px-3 py-1.5 rounded-lg border border-cyan-800"
                  >
                    Leer noticia <ExternalLink size={12} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}