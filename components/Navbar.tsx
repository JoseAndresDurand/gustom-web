import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        
        {/* LOGO GUSTOM CON PUNTO NARANJA */}
        <a href="#" className="flex items-center gap-1 group">
          <h2 className="text-2xl font-black tracking-tighter text-white transition-colors group-hover:text-gray-200">
            Gustom<span className="text-primary text-4xl leading-[0] mb-2 inline-block">.</span>
          </h2>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-gray-400 hover:text-primary transition-colors" href="#problema">Problema</a>
          <a className="text-sm font-medium text-gray-400 hover:text-primary transition-colors" href="#solucion">Solución</a>
          <a className="text-sm font-medium text-gray-400 hover:text-primary transition-colors" href="#beneficios">Beneficios</a>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded bg-primary px-5 py-2 text-sm font-bold text-background-dark transition-transform hover:scale-105 shadow-lg shadow-primary/20">
            Acceso Anticipado
          </button>
        </nav>

        {/* Mobile Menu Icon (Placeholder) */}
        <button className="md:hidden text-gray-300 hover:text-primary">
            <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};