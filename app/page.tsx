"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { translations } from "./translations";
import { 
  TrendingUp, 
  Database, 
  Mic2, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail,
  ExternalLink,
  ChevronDown,
  ShieldCheck,
  PieChart,
  Terminal
} from "lucide-react";

export default function HomePage() {
  const [lang, setLang] = useState("es");
  const [showCVMenu, setShowCVMenu] = useState(false);
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30">
      
      {/* NAVEGACIÓN: LOGO AEM ARRIBA A LA IZQUIERDA */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/90 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black text-white italic tracking-tighter">AEM</span>
          <div className="h-4 w-px bg-white/20 mx-2" />
          <span className="text-sm font-medium text-slate-400 hidden sm:block">Antonio Escalzo</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-slate-400 font-medium text-sm">
          <a href="#" className="hover:text-cyan-400 transition-colors">{t.nav.inicio}</a>
          <Link href="/about" className="hover:text-cyan-400 transition-colors">{t.nav.sobreMi}</Link>
          <Link href="/projects" className="hover:text-cyan-400 transition-colors">{t.nav.proyectos}</Link>
          <Link href="/contact" className="hover:text-cyan-400 transition-colors">{t.nav.contacto}</Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-[10px] font-bold border border-white/10 rounded-lg p-1">
            <button 
              onClick={() => setLang("es")} 
              className={`px-2 py-1 rounded transition-colors ${lang === 'es' ? 'bg-cyan-600 text-white' : 'text-slate-500 hover:text-white'}`}
            >ES</button>
            <button 
              onClick={() => setLang("en")} 
              className={`px-2 py-1 rounded transition-colors ${lang === 'en' ? 'bg-cyan-600 text-white' : 'text-slate-500 hover:text-white'}`}
            >GB</button>
          </div>

          <div className="relative">
            <button 
              onMouseEnter={() => setShowCVMenu(true)}
              className="bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2 transition-all shadow-lg shadow-rose-900/20"
            >
              CV <ChevronDown size={12} />
            </button>
            {showCVMenu && (
              <div 
                onMouseLeave={() => setShowCVMenu(false)}
                className="absolute right-0 mt-2 w-40 bg-slate-900 border border-white/10 rounded-xl shadow-xl overflow-hidden z-[60]"
              >
                <a href="/cv-es.pdf" download className="block px-4 py-3 text-xs text-slate-300 hover:bg-cyan-600 hover:text-white transition-colors border-b border-white/5 font-medium">Español (ES)</a>
                <a href="/cv-en.pdf" download className="block px-4 py-3 text-xs text-slate-300 hover:bg-cyan-600 hover:text-white transition-colors font-medium">English (EN)</a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION: FOTO EN EL CENTRO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 pt-20"
        >
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-40 animate-pulse" />
            <Image
              src="/foto.jpg"
              width={180}
              height={180}
              alt="Antonio Escalzo"
              className="relative rounded-full border-2 border-white/10 object-cover shadow-2xl"
              priority
            />
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter text-white">
            {t.hero.title} <span className="text-cyan-400">Escalzo Morales</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects">
              <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl flex items-center gap-2 shadow-lg shadow-cyan-900/20 transition-all">
                {t.hero.btnProjects} <ArrowRight size={18} />
              </button>
            </Link>
            <Link href="/about">
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-sm transition-all">
                {t.hero.btnAbout}
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. RESUMEN DE EXPERIENCIA */}
      <section className="py-20 px-6 border-y border-white/5 bg-[#030816]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">{t.experience.title}</h2>
            <p className="text-slate-400 leading-relaxed mb-6 italic">{t.experience.description}</p>
            <ul className="space-y-3">
              {t.experience.items.map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5">
              <h4 className="text-3xl font-bold text-white mb-1">+4M€</h4>
              <p className="text-xs text-slate-500 uppercase tracking-widest">Cartera Gestionada</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5">
              <h4 className="text-3xl font-bold text-white mb-1">SQL</h4>
              <p className="text-xs text-slate-500 uppercase tracking-widest">Nivel Avanzado</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5">
              <h4 className="text-3xl font-bold text-white mb-1">Python</h4>
              <p className="text-xs text-slate-500 uppercase tracking-widest">Data Science / ML</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5">
              <h4 className="text-3xl font-bold text-white mb-1">Power BI</h4>
              <p className="text-xs text-slate-500 uppercase tracking-widest">Business Intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROYECTO: ANÁLISIS DE CARTERAS (RESTAURADO) */}
      <section className="py-24 px-6 bg-[#020617]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-white/5 shadow-2xl order-2 md:order-1">
            <Image src="/Gemini_Generated_Image_k9cggfk9cggfk9cg.png" alt="Carteras" fill className="object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <PieChart size={48} className="text-cyan-400" />
            </div>
          </motion.div>
          <div className="space-y-6 order-1 md:order-2">
            <div className="flex items-center gap-3 text-cyan-400 font-bold uppercase tracking-widest text-sm"><TrendingUp size={20} /> FinTech</div>
            <h2 className="text-4xl font-bold text-white tracking-tight">Estrategias de <span className="text-cyan-400">Indexación</span></h2>
            <p className="text-lg text-slate-400 leading-relaxed italic">Investigación sobre la eficiencia de carteras indexadas frente al riesgo de mercado (2010-2024). Un análisis profundo sobre rentabilidad institucional.</p>
          </div>
        </div>
      </section>

      {/* 4. PROYECTO: FRAUDE BANCARIO (RESTAURADO) */}
      <section className="py-24 px-6 bg-[#050B18]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-cyan-400 font-bold uppercase tracking-widest text-sm"><ShieldCheck size={20} /> Machine Learning</div>
            <h2 className="text-4xl font-bold text-white tracking-tight">Detección de <span className="text-cyan-400">Fraude</span></h2>
            <p className="text-lg text-slate-400 leading-relaxed italic">Desarrollo de modelos predictivos para identificar transacciones anómalas en tarjetas de crédito, optimizando la seguridad bancaria.</p>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <Image src="/Gemini_Generated_Image_vlk1eivlk1eivlk1.png" alt="Fraude ML" fill className="object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center"><Terminal size={48} className="text-cyan-400" /></div>
          </motion.div>
        </div>
      </section>

      {/* 5. SIRACHA PODCAST */}
      <section className="py-24 px-6 bg-[#020617]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
           <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1 }} className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-white/5 shadow-2xl order-2 md:order-1">
              <Image src="/siracha.png" alt="Podcast" fill className="object-cover opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center"><Mic2 size={48} className="text-cyan-400 animate-pulse" /></div>
            </motion.div>
            <div className="space-y-6 order-1 md:order-2 text-right md:text-left">
              <div className="flex items-center justify-end md:justify-start gap-3 text-cyan-400 font-bold uppercase tracking-widest text-sm"><Mic2 size={20} /> {t.siracha.tag}</div>
              <h2 className="text-4xl font-bold text-white tracking-tight">{t.siracha.title}</h2>
              <p className="text-lg text-slate-400 leading-relaxed italic">{t.siracha.description}</p>
              <a href="https://sirachapodcast.es/" target="_blank" className="inline-flex items-center gap-2 text-white font-bold hover:text-cyan-400 transition-all uppercase text-sm tracking-widest">{t.siracha.btn} <ExternalLink size={18} /></a>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 px-6 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://linkedin.com/in/antonioescalzo" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="https://github.com/antonioescalzo" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="mailto:aescalzomorales@gmail.com" className="text-slate-500 hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
        <p className="text-slate-600 text-sm font-light">© 2026 Antonio Escalzo Morales. Bailén, Jaén.</p>
      </footer>
    </div>
  );
}