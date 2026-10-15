// Interfaces de TypeScript para definir el modelo de datos de un Comunicado
interface AnnouncementItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: 'General' | 'Novedad' | 'Operación';
  isImportant?: boolean;
}

const announcementsData: AnnouncementItem[] = [
  {
    id: 'com-01',
    date: '14 de Octubre, 2026',
    title: 'Actualización del Catálogo de Mangueras y Conexiones Hidráulicas',
    summary: 'Contamos con inventario renovado para atención inmediata en campo en Cananea y zonas mineras aledañas.',
    category: 'Novedad',
    isImportant: true,
  },
  {
    id: 'com-02',
    date: '28 de Septiembre, 2026',
    title: 'Consolidación de Alianzas Estratégicas con MAQYSIN y MÓVIL GARAGE',
    summary: 'Reforzamos nuestra capacidad de respuesta técnica y comercial para proyectos de mantenimiento pesado y logística.',
    category: 'General',
  },
  {
    id: 'com-03',
    date: '15 de Agosto, 2026',
    title: 'Ampliación de Cobertura para Pruebas No Destructivas (PND)',
    summary: 'Ofrecemos diagnóstico de seguridad e inspección técnica para estructuras y maquinaria pesada con certificación.',
    category: 'Operación',
  },
];

export default function Announcements() {
  return (
    <section id="comunicados" className="py-20 bg-amka-bg border-t border-amka-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado del Módulo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amka-emerald/10 text-amka-emerald text-xs font-bold uppercase tracking-wider mb-3">
              Canal Oficial
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-amka-text">
              Comunicados y <span className="text-amka-emerald">Avisos</span>
            </h2>
          </div>
          <p className="text-amka-muted text-sm max-w-md">
            Espacio exclusivo para actualizaciones operativas, noticias corporativas y avisos importantes de AMKA Sourcing AND Service.
          </p>
        </div>

        {/* Lista de Comunicados */}
        <div className="space-y-6">
          {announcementsData.map((item) => (
            <article 
              key={item.id}
              className="bg-white border border-amka-border rounded-2xl p-6 md:p-8 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <span className="text-amka-muted">{item.date}</span>
                  <span className="text-slate-300">•</span>
                  <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                    item.category === 'Novedad' ? 'bg-amka-cyan/10 text-amka-cyan' :
                    item.category === 'Operación' ? 'bg-amka-emerald/10 text-amka-emerald' : 'bg-amka-purple/10 text-amka-purple'
                  }`}>
                    {item.category}
                  </span>
                  {item.isImportant && (
                    <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase">
                      Destacado
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-amka-text hover:text-amka-cyan transition-colors cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-amka-muted text-sm leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="shrink-0">
                <button 
                  type="button" 
                  className="w-full md:w-auto px-5 py-2.5 rounded-xl border border-amka-border text-amka-text hover:bg-slate-50 font-semibold text-xs transition-colors"
                >
                  Leer comunicado
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}