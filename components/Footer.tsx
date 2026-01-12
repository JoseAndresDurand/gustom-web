import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 px-6 border-t border-white/5">
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* LOGO FOOTER */}
          <div className="flex items-center gap-1 mb-4">
            <h2 className="text-2xl font-black tracking-tighter uppercase text-white">
              Gustom<span className="text-primary text-4xl leading-[0] mb-2 inline-block">.</span>
            </h2>
          </div>
        
        <div className="flex gap-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-primary transition-colors">Términos</a>
          <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
          <a href="#" className="hover:text-primary transition-colors">Contacto</a>
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-primary hover:border-primary hover:bg-white/5 transition-all">
            <span className="material-symbols-outlined text-xl">camera_alt</span>
          </a>
          <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-primary hover:border-primary hover:bg-white/5 transition-all">
            <span className="material-symbols-outlined text-xl">work</span>
          </a>
          <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-primary hover:border-primary hover:bg-white/5 transition-all">
            <span className="material-symbols-outlined text-xl">mail</span>
          </a>
        </div>
        
      </div>
      
      <div className="text-center mt-12 border-t border-white/5 pt-8">
        <p className="text-[10px] text-gray-700 tracking-widest uppercase">© 2024 Gustom Arequipa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};