import React from 'react';

const problems = [
  {
    icon: 'no_photography',
    title: 'Fotos estáticas',
    description: 'Las imágenes planas no transmiten el aroma, el sonido ni la pasión que pones en cada plato. Aburren, no antojan.'
  },
  {
    icon: 'trending_down',
    title: 'Publicidad costosa',
    description: 'El gasto en plataformas saturadas es ineficiente. Los clicks no se convierten en comensales reales sentados en tu mesa.'
  },
  {
    icon: 'help_center',
    title: 'Indecisión total',
    description: 'Los clientes abandonan la reserva porque no pueden visualizar la experiencia completa. La duda mata la venta.'
  }
];

export const ProblemSection: React.FC = () => {
  return (
    <section id="problema" className="bg-card-dark py-24 px-6 border-y border-white/5 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      
      <div className="mx-auto max-w-[1200px] relative z-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 text-3xl font-black md:text-4xl text-white">¿Por qué el marketing tradicional ya no funciona?</h2>
          <p className="text-gray-400 text-lg">Las fotos frías y los anuncios costosos están alejando a tus clientes. Es hora de evolucionar.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((item, index) => (
            <div key={index} className="group flex flex-col gap-6 rounded-2xl border border-white/5 bg-background-dark/50 p-8 transition-all hover:border-primary/50 hover:bg-background-dark hover:-translate-y-1 duration-300">
              <div className="h-14 w-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-4xl text-gray-300 group-hover:text-primary transition-colors">{item.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};