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
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center rounded bg-primary px-8 py-4 text-base font-black text-background-dark shadow-[0_0_20px_rgba(244,157,37,0.3)] transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(244,157,37,0.5)] hover:-translate-y-1">
              Solicitar Acceso Anticipado
            </button>
            {/* Botón Ver Demo MODIFICADO */}
            <button 
              onClick={() => window.open('/mvp/', '_blank')}
              className="flex items-center justify-center gap-2 rounded border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/10 hover:border-white/20"
            >
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
                            backgroundImage: "url('https://wvmwowfvmuoacxkuvtvi.supabase.co/storage/v1/object/public/public-assets/hero_mockup_1.png')"
                        }}
                    >
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};