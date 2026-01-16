"use client";

import { Mail, Linkedin, Github, Send, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* CABECERA CENTRADA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            ¿Hablamos de <span className="text-cyan-400">Negocio?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Estoy disponible para proyectos de consultoría financiera, análisis de datos complejos y colaboraciones estratégicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN Y REDES */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">Datos de Contacto</h3>
              
              <div className="space-y-6">
                <a href="mailto:aescalzomorales@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email</p>
                    <p className="text-slate-200 font-medium">aescalzomorales@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Ubicación</p>
                    <p className="text-slate-200 font-medium">España (Disponible Remoto)</p>
                  </div>
                </div>
              </div>

              {/* LOGOS SOCIALES OFICIALES */}
              <div className="mt-10 pt-8 border-t border-white/5 flex gap-4">
                <a 
                  href="https://linkedin.com/in/tu-usuario" 
                  target="_blank"
                  className="w-12 h-12 bg-[#0A66C2]/10 text-[#0A66C2] rounded-xl flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="https://github.com/antonioescalzo" 
                  target="_blank"
                  className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Github size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: FORMULARIO REAL */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm"
          >
            {/* REEMPLAZA 'tu-id-de-formspree' por el código que te den */}
            <form action="https://formspree.io/f/tu-id-de-formspree" method="POST" className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Nombre Completo</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Ej. Warren Buffett" 
                  required
                  className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Correo Electrónico</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="nombre@empresa.com" 
                  required
                  className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Mensaje</label>
                <textarea 
                  name="message"
                  rows={4} 
                  placeholder="¿En qué puedo ayudarte?" 
                  required
                  className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-900/20"
              >
                Enviar Mensaje <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}