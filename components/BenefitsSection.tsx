import React from 'react';

const benefits = [
    {
        title: "0% de Comisión",
        subtitle: "Durante los primeros 6 meses de operación.",
    },
    {
        title: "Filmanciones Profesionales Gratis",
        subtitle: "Sesión de video 4K para tus mejores 5 platos.",
    },
    {
        title: "Perfil VIP Verificado",
        subtitle: "Posicionamiento prioritario en el feed.",
    },
    {
        title: "Soporte Estratégico",
        subtitle: "Asesoría mensual en marketing gastronómico.",
    }
];

export const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 px-6 bg-gradient-to-b from-background-dark to-black relative">
        <div className="mx-auto max-w-4xl text-center relative z-10">
            <div className="glass-card rounded-3xl p-8 md:p-16 text-left md:text-center">
                <h2 className="text-4xl font-black text-white mb-6 leading-tight">
                    Beneficios para <span className="text-primary">Restaurantes Fundadores</span>
                </h2>
                <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
                    Estamos seleccionando a los primeros 20 restaurantes de Arequipa para dominar la plataforma con condiciones inigualables.
                </p>
                
                <div className="grid gap-8 md:grid-cols-2 text-left mb-12">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                            <div className="flex-shrink-0 mt-1">
                                <span className="material-symbols-outlined text-primary font-bold text-2xl">check_circle</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">{benefit.title}</h4>
                                <p className="text-sm text-gray-500 mt-1">{benefit.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center">
                    <button 
                        onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full md:w-auto px-12 py-5 rounded-lg bg-primary text-background-dark font-black text-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(244,157,37,0.4)]">
                        ¡Quiero ser Fundador!
                    </button>
                    <p className="mt-6 text-xs text-primary/80 font-bold uppercase tracking-widest flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                        Quedan 11 cupos disponibles para Arequipa
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};