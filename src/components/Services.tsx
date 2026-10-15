import { useState, useEffect } from 'react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  accentColor: 'cyan' | 'emerald' | 'purple';
  // Detalles adicionales para el Modal
  fullDetails: {
    overview: string;
    keyFeatures: string[];
    contactCTA: string;
  };
}

const servicesData: ServiceItem[] = [
  {
    id: 'mantenimiento',
    title: 'Mantenimiento Preventivo y Correctivo',
    description: 'Servicios en campo y taller para equipo y maquinaria pesada en el sector minero e industrial.',
    tag: 'Operativo',
    accentColor: 'cyan',
    fullDetails: {
      overview: 'Ofrecemos diagnósticos integrales y rutinas de mantenimiento técnico directo en sitio de operación o taller especializado, garantizando la reducción de tiempos muertos en maquinaria pesada.',
      keyFeatures: [
        'Inspección y diagnóstico de motores y transmisiones',
        'Mantenimiento preventivo programado por horas de operación',
        'Atención de fallas mecánicas de emergencia en mina',
        'Suministro de consumibles y reemplazo de componentes clave'
      ],
      contactCTA: 'Solicitar cotización de mantenimiento'
    }
  },
  {
    id: 'hidraulica',
    title: 'Servicios Hidráulicos Especializados',
    description: 'Ensamble de mangueras, conexiones de alta presión y diagnóstico de sistemas hidráulicos.',
    tag: 'Especializado',
    accentColor: 'emerald',
    fullDetails: {
      overview: 'Armado y ponchado de mangueras de alta y extrema presión, adaptación de conexiones industriales y reparación de cilindros e itinerarios hidráulicos.',
      keyFeatures: [
        'Ensamble inmediato de mangueras de 2, 4 y 6 mallas de acero',
        'Venta y adaptación de adaptadores, acoples y conexiones',
        'Pruebas de presión y estanqueidad hidráulica',
        'Revisión de bombas, válvulas y distribuidores hidráulicos'
      ],
      contactCTA: 'Cotizar servicio hidráulico'
    }
  },
  {
    id: 'refacciones',
    title: 'Venta de Refacciones e Inyectores',
    description: 'Suministro de componentes con garantía y pruebas de laboratorio para sistemas de inyección.',
    tag: 'Proveeduría',
    accentColor: 'purple',
    fullDetails: {
      overview: 'Proveeduría confiable de componentes de motor e inyección diésel de alta precisión. Suministramos refacciones originales y equivalentes garantizadas.',
      keyFeatures: [
        'Diagnóstico y calibración de inyectores diésel',
        'Kits de empaques, filtros y sellos industriales',
        'Suministro de piezas de reemplazo rápido',
        'Garantía de soporte y calidad en cada componente'
      ],
      contactCTA: 'Consultar inventario de refacciones'
    }
  },
  {
    id: 'asesoria',
    title: 'Asesoría Comercial',
    description: 'Gestión y acompañamiento en compra y venta de maquinaria nueva y seminueva.',
    tag: 'Comercial',
    accentColor: 'cyan',
    fullDetails: {
      overview: 'Acompañamos a su empresa en el proceso de adquisición, importación y colocación comercial de maquinaria y equipo pesado.',
      keyFeatures: [
        'Evaluación técnico-financiera de maquinaria seminueva',
        'Gestión de sourcing nacional e internacional',
        'Asesoría en valuación y traspaso de flota',
        'Soporte en contratos de suministro industrial'
      ],
      contactCTA: 'Agendar asesoría comercial'
    }
  },
  {
    id: 'pnd',
    title: 'Pruebas No Destructivas (PND)',
    description: 'Inspección técnica de estructuras y componentes con estándares de calidad y seguridad.',
    tag: 'Certificación',
    accentColor: 'emerald',
    fullDetails: {
      overview: 'Inspecciones técnicas especializadas para detectar discontinuidades o imperfecciones en soldaduras, estructuras y piezas críticas de maquinaria sin alterar su integridad.',
      keyFeatures: [
        'Inspección por Líquidos Penetrantes (PT)',
        'Inspección por Partículas Magnéticas (MT)',
        'Inspección Visual Técnica (VT)',
        'Dictámenes técnicos de seguridad operativa'
      ],
      contactCTA: 'Solicitar inspección PND'
    }
  },
  {
    id: 'soporte',
    title: 'Soporte Técnico en Campo',
    description: 'Atención directa en Cananea y la región para resolución inmediata de fallas críticas.',
    tag: '24/7 Cobertura',
    accentColor: 'purple',
    fullDetails: {
      overview: 'Unidades móviles de respuesta rápida con personal capacitado para desplazarse directamente a las instalaciones operativas o tramos de mina.',
      keyFeatures: [
        'Disponibilidad de atención en zona Cananea e Ímuris',
        'Diagnóstico computarizado móvil',
        'Soporte técnico directo con personal calificado',
        'Minimización de paros operativos'
      ],
      contactCTA: 'Contactar soporte en campo'
    }
  }
];

export default function Services() {
  // Estado para el modal del servicio activo
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Cerrar modal al presionar la tecla Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="servicios" className="py-20 bg-white border-t border-amka-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amka-purple/10 text-amka-purple text-xs font-bold uppercase tracking-wider">
            Soluciones Integrales
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amka-text">
            Nuestros Servicios <span className="text-amka-cyan">Especializados</span>
          </h2>
          <p className="text-amka-muted text-base leading-relaxed">
            Ofrecemos soporte técnico, comercial y operativo para optimizar el rendimiento y la continuidad de sus operaciones.
          </p>
        </div>

        {/* Grid de 3 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="bg-amka-bg border border-amka-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-between"
            >
              <div 
                className={`h-1.5 w-12 rounded-full mb-6 transition-all duration-300 group-hover:w-full ${
                  service.accentColor === 'cyan' ? 'bg-amka-cyan' :
                  service.accentColor === 'emerald' ? 'bg-amka-emerald' : 'bg-amka-purple'
                }`} 
              />

              <div>
                <span className="text-xs font-bold text-amka-muted uppercase tracking-wider block mb-2">
                  {service.tag}
                </span>
                <h3 className="text-xl font-bold text-amka-text mb-3 group-hover:text-amka-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-amka-muted text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Botón interactivo "Saber más" */}
              <div className="pt-4 border-t border-amka-border/60 flex items-center justify-between text-xs font-semibold text-amka-text">
                <span>AMKA Service</span>
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-amka-cyan hover:underline group-hover:translate-x-1 transition-transform flex items-center gap-1 cursor-pointer"
                >
                  Saber más &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- MODAL FLOTANTE DE SERVICIO --- */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white border border-amka-border rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro
          >
            {/* Botón de Cierre */}
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center justify-center transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Cabecera del Modal */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amka-cyan block mb-1">
                {selectedService.tag}
              </span>
              <h3 className="text-2xl font-extrabold text-amka-text pr-8">
                {selectedService.title}
              </h3>
            </div>

            {/* Resumen */}
            <p className="text-slate-600 text-sm leading-relaxed border-l-4 border-amka-cyan pl-4 bg-slate-50 py-3 rounded-r-lg">
              {selectedService.fullDetails.overview}
            </p>

            {/* Puntos clave */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-amka-text uppercase tracking-wider">
                Alcance del servicio:
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                {selectedService.fullDetails.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amka-emerald font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botón de Acción Directo a WhatsApp */}
            <div className="pt-4 border-t border-amka-border flex flex-col sm:flex-row gap-3 justify-end">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-xl border border-amka-border text-slate-600 hover:bg-slate-100 font-semibold text-xs transition-colors"
              >
                Cerrar
              </button>
              <a
                href={`https://wa.me/526451109501?text=${encodeURIComponent(`Hola AMKA, me interesa solicitar información sobre: ${selectedService.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-amka-emerald hover:bg-emerald-600 text-white font-bold text-xs transition-all shadow-md shadow-amka-emerald/20 text-center"
              >
                {selectedService.fullDetails.contactCTA}
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}