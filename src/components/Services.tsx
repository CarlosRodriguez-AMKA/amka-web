// 1. Definimos la interfaz para tipar los servicios de AMKA
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  accentColor: 'cyan' | 'emerald' | 'purple';
}

// 2. Arreglo de datos oficial de los 6 pilares de AMKA
const servicesData: ServiceItem[] = [
  {
    id: 'mantenimiento',
    title: 'Mantenimiento Preventivo y Correctivo',
    description: 'Servicios en campo y taller para equipo y maquinaria pesada en el sector minero e industrial.',
    tag: 'Operativo',
    accentColor: 'cyan',
  },
  {
    id: 'hidraulica',
    title: 'Servicios Hidráulicos Especializados',
    description: 'Ensamble de mangueras, conexiones de alta presión y diagnóstico de sistemas hidráulicos.',
    tag: 'Especializado',
    accentColor: 'emerald',
  },
  {
    id: 'refacciones',
    title: 'Venta de Refacciones y Inyectores',
    description: 'Suministro de componentes con garantía y pruebas de laboratorio para sistemas de inyección.',
    tag: 'Proveeduría',
    accentColor: 'purple',
  },
  {
    id: 'asesoria',
    title: 'Asesoría Comercial',
    description: 'Gestión y acompañamiento en compra y venta de maquinaria nueva y seminueva.',
    tag: 'Comercial',
    accentColor: 'cyan',
  },
  {
    id: 'pnd',
    title: 'Pruebas No Destructivas (PND)',
    description: 'Inspección técnica de estructuras y componentes con estándares de calidad y seguridad.',
    tag: 'Certificación',
    accentColor: 'emerald',
  },
  {
    id: 'soporte',
    title: 'Soporte Técnico en Campo',
    description: 'Atención directa en Cananea y la región para resolución inmediata de fallas críticas.',
    tag: '24/7 Cobertura',
    accentColor: 'purple',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white border-t border-amka-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado de la Sección */}
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

        {/* Grid Responsivo de 3 Columnas (en escritorio) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="bg-amka-bg border border-amka-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Línea superior interactiva con el color del acento */}
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

              <div className="pt-4 border-t border-amka-border/60 flex items-center justify-between text-xs font-semibold text-amka-text">
                <span>AMKA Service</span>
                <span className="text-amka-cyan group-hover:translate-x-1 transition-transform">
                  Saber más &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}