import React from 'react';

export const ContactForm: React.FC = () => {
  return (
    <section className="py-24 px-6 border-t border-white/5 bg-black">
      <div className="mx-auto max-w-[500px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-4 text-white">Únete a la Revolución</h2>
          <p className="text-gray-400">Déjanos tus datos y nos pondremos en contacto para una demo personalizada en tu restaurante.</p>
        </div>
        
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Nombre del Restaurante</label>
            <input 
                type="text" 
                className="w-full rounded-lg border-zinc-800 bg-zinc-900/50 p-4 text-white placeholder-zinc-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Ej. El Rocoto de Oro" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Tu Nombre</label>
            <input 
                type="text" 
                className="w-full rounded-lg border-zinc-800 bg-zinc-900/50 p-4 text-white placeholder-zinc-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Tu nombre y apellido" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">WhatsApp de Contacto</label>
            <input 
                type="tel" 
                className="w-full rounded-lg border-zinc-800 bg-zinc-900/50 p-4 text-white placeholder-zinc-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="+51 9XX XXX XXX" 
            />
          </div>
          
          <button 
            type="submit" 
            className="mt-6 w-full rounded-lg bg-primary p-4 text-lg font-black text-background-dark transition-all hover:bg-primary/90 hover:scale-[1.02] shadow-lg shadow-primary/20"
          >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </section>
  );
};