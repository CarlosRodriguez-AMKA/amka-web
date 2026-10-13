import { ShieldCheck, Wrench, Settings, Cpu, Truck, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  const servicios = [
    { title: 'Asesoría Comercial', desc: 'Acompañamiento en la toma de decisiones estratégicas para generar oportunidades y alianzas de valor.', icon: ShieldCheck },
    { title: 'Mantenimiento y Reparación', desc: 'Servicio especializado en maquinaria y equipo pesado (Preventivo y Correctivo en campo).', icon: Wrench },
    { title: 'Servicios Hidráulicos', desc: 'Soluciones y diagnósticos hidráulicos eficientes y confiables para tu operación minera.', icon: Settings },
    { title: 'Refacciones e Inyectores', desc: 'Comercialización de motores, pistones, engranes e inyectores con precisión alemana y garantía.', icon: Cpu },
    { title: 'Compra y Venta de Maquinaria', desc: 'Venta de equipo pesado nuevo y seminuevo con asesoría profesional.', icon: Truck },
    { title: 'Pruebas No Destructivas (PND)', desc: 'Garantía de calidad y seguridad operacional a través de aliados certificados.', icon: CheckCircle2 },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-bottom from-slate-900 via-slate-950 to-slate-950 pt-12 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            AMKA Sourcing AND Service
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            CONECTANDO SOLUCIONES, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-right from-cyan-400 via-blue-500 to-indigo-400">
              IMPULSANDO NEGOCIOS
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
            Asesoría comercial especializada y soluciones industriales confiables para optimizar tus procesos y potenciar tu empresa en el sector minero.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="tel:6451109501" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20">
              Contactar Ahora
            </a>
            <a href="#servicios" className="px-6 py-3 bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-medium rounded-xl transition-all">
              Ver Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Nuestros Servicios Industriales</h2>
          <p className="text-slate-400 text-sm">Cobertura técnica y comercial integral para Cananea y la región minera.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all space-y-3">
                <div className="w-12 h-12 bg-cyan-950 border border-cyan-800 rounded-xl flex items-center justify-center text-cyan-400">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ¿Quiénes Somos & Compromiso? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-right from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">¿Quiénes Somos?</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Somos un enlace estratégico entre proveedores y clientes, ofreciendo soluciones integrales que impulsan la eficiencia, productividad y crecimiento de tu empresa minera.
            </p>
          </div>
          <div className="space-y-4 border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-8">
            <h3 className="text-2xl font-bold text-cyan-400">Nuestro Compromiso</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Brindar soluciones adaptadas a tus necesidades, con calidad, confianza y un claro enfoque en resultados operacionales positivos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}