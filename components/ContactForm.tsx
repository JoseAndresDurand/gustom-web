import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js'

// 👇 PEGA AQUÍ TU "Project URL"
const supabaseUrl = 'https://wvmwowfvmuoacxkuvtvi.supabase.co' 

// 👇 PEGA AQUÍ TU "anon / public key"
const supabaseKey = 'sb_publishable_q0b_S2BgoquMyGW3Xsz9zw_DsH2HhNu'

export const supabase = createClient(supabaseUrl, supabaseKey)


export const ContactForm: React.FC = () => {
  // 1. ESTADOS: Para guardar los datos mientras escriben y saber si está cargando
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    restaurant_name: '',
    contact_name: '',
    phone: ''
  });

  // 2. DETECTAR CAMBIOS: Actualiza el estado letra por letra
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 3. ENVIAR A SUPABASE: La función que se activa con el botón
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue
    setLoading(true);

    try {
      // Insertamos los datos en la tabla 'leads' que creaste
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            restaurant_name: formData.restaurant_name, 
            contact_name: formData.contact_name,
            phone: formData.phone
          },
        ]);

      if (error) throw error;

      // ¡Éxito! Mostramos el mensaje verde
      setSent(true);
      setFormData({ restaurant_name: '', contact_name: '', phone: '' }); // Limpiamos el form

    } catch (error) {
      console.error('Error enviando:', error);
      alert('Ocurrió un error. Verifica tu conexión o intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 px-6 border-t border-white/5 bg-black">
      <div className="mx-auto max-w-[500px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-4 text-white">Únete a la Revolución</h2>
          <p className="text-gray-400">Déjanos tus datos y nos pondremos en contacto para una demo personalizada en tu restaurante.</p>
        </div>
        
        {/* CONDICIONAL: Si ya se envió (sent === true), muestra mensaje de éxito */}
        {sent ? (
          <div className="rounded-xl bg-green-500/10 p-8 text-center border border-green-500/20 animate-fade-in">
            <span className="material-symbols-outlined text-4xl text-green-500 mb-2">check_circle</span>
            <h3 className="text-xl font-bold text-white mb-2">¡Solicitud Recibida!</h3>
            <p className="text-gray-400">Gracias {formData.contact_name}. Tu restaurante pronto será Video-First.</p>
            <button 
                onClick={() => setSent(false)} 
                className="mt-6 text-sm font-bold text-green-500 hover:text-green-400 underline"
            >
                Enviar otro registro
            </button>
          </div>
        ) : (
          /* SI NO SE HA ENVIADO, MUESTRA EL FORMULARIO */
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Nombre del Restaurante</label>
              <input 
                  /* 👇 CONEXIÓN IMPORTANTE 1 */
                  name="restaurant_name"
                  value={formData.restaurant_name}
                  onChange={handleChange}
                  required
                  /* 👆 FIN CONEXIÓN */
                  type="text" 
                  className="w-full rounded-lg border-zinc-800 bg-zinc-900/50 p-4 text-white placeholder-zinc-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Ej. El Rocoto de Oro" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Tu Nombre</label>
              <input 
                  /* 👇 CONEXIÓN IMPORTANTE 2 */
                  name="contact_name"
                  value={formData.contact_name}
                  onChange={handleChange}
                  required
                  /* 👆 FIN CONEXIÓN */
                  type="text" 
                  className="w-full rounded-lg border-zinc-800 bg-zinc-900/50 p-4 text-white placeholder-zinc-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Tu nombre y apellido" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">WhatsApp de Contacto</label>
              <input 
                  /* 👇 CONEXIÓN IMPORTANTE 3 */
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  /* 👆 FIN CONEXIÓN */
                  type="tel" 
                  className="w-full rounded-lg border-zinc-800 bg-zinc-900/50 p-4 text-white placeholder-zinc-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="+51 9XX XXX XXX" 
              />
            </div>
            
            <button 
              type="submit" 
              disabled={loading} // Deshabilita el botón si está cargando
              className={`mt-6 w-full rounded-lg bg-primary p-4 text-lg font-black text-background-dark transition-all hover:bg-primary/90 hover:scale-[1.02] shadow-lg shadow-primary/20 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-wait' : ''}`}
            >
              {loading ? 'Enviando...' : 'Enviar Solicitud'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};