import React from 'react';

const solutions = [
  {
    id: '01',
    category: 'Descubrimiento',
    title: 'Feed de Video Inmersivo',
    description: 'Capturamos la esencia de tu cocina con videos verticales de alta calidad. Tus platos cobran vida y seducen a la audiencia local antes de que pisen tu local.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzMFYGvwE34Y2kSKqhQ07-Y5a22-uVgtNmBNginy5V-OAhsqEpg9V09Nnpb3cJpKxe2I15sqFDNjdyTws3gGQ3MErnU4tFCNGdwzq6-H1Rx23k9gm3P2KYxp2RBxcCvl7Sbr526edW76YMIwHnUElj1g5sWzh_JrsPahFix2irq4iVRH-6nlcF4TBTqB71EKUEShUAMxO3vXTikbUp0hFAeLmYhuEirIsOdEZ-XkbRcNjXTNp5ys8bno_MsjX58sqb9Q8J7Rsmpj2K',
    reverse: false
  },
  {
    id: '02',
    category: 'Conversión Directa',
    title: 'Venta de Tickets Exclusivos',
    description: 'No más reservas vacías. Vende accesos a menús degustación, eventos especiales o preventas directamente desde la plataforma sin intermediarios tradicionales.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCit5JWoPfTcWdF824a1i-6DheTsHxC2qJiNtdrD0x96wIFI1a99HcI5EVqUr-uKoVWerVKvJ_3VUhDiqsjmaNswHaGerHt7a2iWYGZ4suYuVfu2PLQDm1Wv3r1zHEtgYy5Vt-ZAIkiyp3IpcmMNDM_P8ArKS19bZQMR0EOGWIkysgvnIqwwSdUD1HkRDUvf-znFh7QTlZKKS_zTJpxzIkKproiR32NnvrsvrkQqsUF7yZFALpDdIqWbyp1plKTCCIaaIr18yNorY1B',
    reverse: true
  },
  {
    id: '03',
    category: 'Lealtad',
    title: 'Pasaporte de Fidelización',
    description: 'Crea una comunidad de fans reales. Gamifica la experiencia de tus clientes con un pasaporte digital que premia cada visita y los motiva a volver.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcZuMcIsnxfs9lGAsWNb_9V89Y2OCuy3Nby_b9QgP0tEQIHEreWTnllyxM01lUfSJ2a_uzcJjJHS8tfMqXnxWfP7rafVB4kBmaZ_3LCMTgaXJWMHXvWhEDVDFfkF7lbp0gM6uBjbVtGVeUyWkYZWXob2XMZ6fB3QMYV9MpsFO8IqMOvcRn9ElccbaOum0Dpd2A0ZV4V3cJBv0KQhQOVmMxAwXzNBtoN721QhifozZZYH0KsLDysp-TIWWrWOjLa7RDxxWZoV1l5YXn',
    reverse: false
  }
];

export const SolutionSection: React.FC = () => {
  return (
    <section id="solucion" className="py-24 px-6 bg-background-dark">
      <div className="mx-auto max-w-[1200px] space-y-32">
        {solutions.map((item) => (
          <div key={item.id} className={`flex flex-col items-center gap-12 lg:gap-20 ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className={`absolute -inset-4 rounded-xl bg-primary/20 opacity-30 blur-2xl transition-all duration-500 group-hover:opacity-50`}></div>
                <div 
                    className="relative h-[400px] md:h-[500px] w-full rounded-2xl bg-cover bg-center shadow-2xl border border-white/10 transition-transform duration-500 hover:scale-[1.01]" 
                    style={{ backgroundImage: `url('${item.image}')` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col items-start">
                <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4 border-b-2 border-primary/30 pb-1">
                    {item.id}. {item.category}
                </span>
                <h2 className="mb-6 text-4xl font-black text-white lg:text-5xl">{item.title}</h2>
                <p className="text-lg leading-relaxed text-gray-400">
                  {item.description}
                </p>
                <button className="mt-8 flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                    Saber más <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};