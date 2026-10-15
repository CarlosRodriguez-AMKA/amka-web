import { useState, useEffect } from 'react';

interface AnnouncementItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  content: string[]; // Parrafos completos para el modal
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
    content: [
      'AMKA Sourcing AND Service informa a todos sus clientes y contratistas que se ha renovado y ampliado el stock de mangueras hidráulicas de alta y extrema presión en nuestras instalaciones de Cananea, Sonora.',
      'Contamos con capacidad de ensamble inmediato para mangueras con mallas de acero de alto rendimiento, asegurando entregas en tiempo récord para evitar paros no programados en mina.',
      'Para solicitar cotizaciones o atenciones de emergencia en campo, comuníquese directamente a nuestras líneas de atención telefónica o correo electrónico oficial.'
    ]
  },
  {
    id: 'com-02',
    date: '28 de Septiembre, 2026',
    title: 'Consolidación de Alianzas Estratégicas con MAQYSIN y MÓVIL GARAGE',
    summary: 'Reforzamos nuestra capacidad de respuesta técnica y comercial para proyectos de mantenimiento pesado y logística.',
    category: 'General',
    content: [
      'Como parte de nuestro compromiso con la excelencia operativa, AMKA Sourcing AND Service formaliza la extensión de colaboración estratégica con las firmas MAQYSIN y MÓVIL GARAGE.',
      'Esta sinergia nos permite integrar soluciones logísticas avanzadas, diagnóstico especializado para flota pesada y soporte técnico en talleres autorizados.',
      'Reafirmamos nuestra visión de ser el aliado integral líder en la región norte de Sonora.'
    ]
  },
  {
    id: 'com-03',
    date: '15 de Agosto, 2026',
    title: 'Ampliación de Cobertura para Pruebas No Destructivas (PND)',
    summary: 'Ofrecemos diagnóstico de seguridad e inspección técnica para estructuras y maquinaria pesada con certificación.',
    category: 'Operación',
    content: [
      'Se abre de forma oficial el servicio de inspección estructural mediante Pruebas No Destructivas (PND) dirigidas al sector industrial y minero.',
      'Nuestros procedimientos aplican técnicas de Líquidos Penetrantes (PT), Partículas Magnéticas (MT) e Inspección Visual Técnica (VT) respaldadas por normativa de seguridad.',
      'Consulte la disponibilidad de agenda para inspecciones en campo con nuestro equipo técnico.'
    ]
  },
];

export default function Announcements() {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<AnnouncementItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedAnnouncement(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="comunicados" className="py-20 bg-amka-bg border-t border-amka-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado */}
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

        {/* Lista */}
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

                <h3 
                  onClick={() => setSelectedAnnouncement(item)}
                  className="text-xl font-bold text-amka-text hover:text-amka-cyan transition-colors cursor-pointer"
                >
                  {item.title}
                </h3>
                <p className="text-amka-muted text-sm leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="shrink-0">
                <button 
                  type="button" 
                  onClick={() => setSelectedAnnouncement(item)}
                  className="w-full md:w-auto px-5 py-2.5 rounded-xl border border-amka-border text-amka-text hover:bg-slate-50 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Leer comunicado
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* --- MODAL FLOTANTE DE COMUNICADO --- */}
      {selectedAnnouncement && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedAnnouncement(null)}
        >
          <div 
            className="bg-white border border-amka-border rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de Cierre */}
            <button
              type="button"
              onClick={() => setSelectedAnnouncement(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center justify-center transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Cabecera */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold mb-2">
                <span className="text-slate-400">{selectedAnnouncement.date}</span>
                <span className="text-slate-300">•</span>
                <span className="text-amka-emerald font-bold uppercase">{selectedAnnouncement.category}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-amka-text pr-8">
                {selectedAnnouncement.title}
              </h3>
            </div>

            {/* Cuerpo del Comunicado */}
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed border-t border-b border-amka-border py-6">
              {selectedAnnouncement.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Pie del Modal */}
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>Boletín Oficial AMKA</span>
              <button
                type="button"
                onClick={() => setSelectedAnnouncement(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Cerrar comunicado
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}