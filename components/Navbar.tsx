import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-background-dark shadow-[0_0_15px_rgba(244,157,37,0.5)]">
            <span className="material-symbols-outlined font-bold text-xl">restaurant</span>
          </div>
          <h2 className="text-xl font-black tracking-tight uppercase">Gustom</h2>
        </div>
        
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