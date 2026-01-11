import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden px-6 py-20 bg-background-dark">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-8 z-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Lanzamiento Arequipa
          </div>
          
          <h1 className="text-5xl font-black leading-[1.1] tracking-tight md:text-7xl">
            Deja de vender platos. <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-200">Empieza a vender Experiencias.</span>
          </h1>
          
          <p className="max-w-lg text-lg leading-relaxed text-gray-400">
            Transforma tu menú estático en una experiencia inmersiva de video. Conecta con tus clientes en Arequipa a través del sabor visual y la tecnología.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="flex items-center justify-center rounded bg-primary px-8 py-4 text-base font-black text-background-dark shadow-[0_0_20px_rgba(244,157,37,0.3)] transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(244,157,37,0.5)] hover:-translate-y-1">
              Solicitar Acceso Anticipado
            </button>
            <button className="flex items-center justify-center gap-2 rounded border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/10 hover:border-white/20">
              <span className="material-symbols-outlined fill-1">play_circle</span>
              Ver Demo
            </button>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="relative flex justify-center z-10">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/20 blur-[120px] -z-10 animate-blob"></div>

            <div className="relative h-[640px] w-[320px] rounded-[3rem] border-[8px] border-zinc-800 bg-zinc-900 p-2 shadow-2xl ring-4 ring-zinc-700/50 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                {/* Dynamic Island Area */}
                <div className="absolute top-0 left-1/2 z-20 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-black"></div>
                
                <div className="h-full w-full overflow-hidden rounded-[2.2rem] bg-black relative">
                    <div 
                        className="relative h-full w-full bg-cover bg-center" 
                        style={{
                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhy5ry_V-8m14p6oJNd99a3Uis43yNQmAVDpYnfFeDr9FhSCRb6CW0f4ujrOU9a_uxf6b2yCUXz2yWBWkoFqg3yPlkcY6CWXjgbfAypPn-6XT0jdyr-lU4wz9SRWNgOt-I2EpZb0YAzgvJiz5G9H4AD6BfXyAViAXgy9Nz78J6wVjqeoxKqctlm1z9eDnrtNEEzy0JW7Fuvek_l5PujvA3V_VEbaQrAOrPEughYOIAdhEFSr7fT1Qt3vAwitZv0rO2oeMbkVlSiArG')"
                        }}
                    >
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        
                        {/* UI Elements on Phone */}
                        <div className="absolute bottom-6 left-4 right-4 flex flex-col gap-2">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="h-8 w-8 rounded-full border border-primary bg-primary/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-xs text-primary">restaurant</span>
                                </div>
                                <span className="text-sm font-bold text-white shadow-black drop-shadow-md">La Capitana</span>
                            </div>
                            <p className="text-xs text-white/90 line-clamp-2 drop-shadow-md">
                                La mejor burger ahumada de Arequipa 🌋. #FoodPorn #Arequipa #Burger
                            </p>
                        </div>
                        
                        <div className="absolute bottom-6 right-4 flex flex-col gap-6 items-center pb-2">
                            <div className="flex flex-col items-center gap-1">
                                <span className="material-symbols-outlined text-white text-3xl drop-shadow-md cursor-pointer hover:scale-110 transition-transform fill-1">favorite</span>
                                <span className="text-[10px] text-white font-bold">1.2k</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="material-symbols-outlined text-white text-3xl drop-shadow-md cursor-pointer hover:scale-110 transition-transform">share</span>
                                <span className="text-[10px] text-white font-bold">450</span>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 cursor-pointer hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-background-dark font-bold">confirmation_number</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};