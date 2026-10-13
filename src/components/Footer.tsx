import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Identidad AMKA */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-cyan-400" size={32} />
              <span className="text-2xl font-black text-white tracking-tight">AMKA</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sourcing AND Service. Conectando soluciones, impulsando negocios. Asesoría comercial especializada y soluciones industriales confiables.
            </p>
          </div>

          {/* Servicios Rápidos */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Servicios Especializados</h4>
            <ul className="space-y-2 text-xs">
              <li>Mantenimiento Preventivo y Correctivo</li>
              <li>Refacciones con Garantía e Inyectores</li>
              <li>Servicios e Instalaciones Hidráulicas</li>
              <li>Compra y Venta de Maquinaria Pesada</li>
              <li>Pruebas No Destructivas (PND)</li>
            </ul>
          </div>

          {/* Contacto Cananea */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contacto & Ubicación</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Carretera Cananea - Imuris KM1, Col. Barrilito, C.P. 84622, Cananea, Sonora.</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-cyan-400 shrink-0" />
                <span>645 110 9501 / 645 107 3624</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-cyan-400 shrink-0" />
                <span>asesoriaamka@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Empresas Aliadas / Socios */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Socios Estratégicos</h4>
            <div className="flex flex-col gap-3">
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center justify-between">
                <span className="font-extrabold text-white text-base tracking-wider">MAQYSIN</span>
                <span className="text-[10px] bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800">Maquinaria</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center justify-between">
                <span className="font-extrabold text-blue-500 text-base tracking-wide">MOVIL GARAGE</span>
                <span className="text-[10px] bg-blue-950 text-blue-400 px-2 py-0.5 rounded border border-blue-800">Servicio Mecánico</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} AMKA Sourcing AND Service. Todos los derechos reservados. Cananea, Sonora.
        </div>
      </div>
    </footer>
  );
}