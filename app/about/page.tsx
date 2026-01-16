"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// Importaciones corregidas con iconos existentes en Lucide
import { 
  Briefcase, GraduationCap, Code, Banknote, LayoutDashboard, 
  TrendingUp, DollarSign, PieChart, FlaskConical,
  BookText, Scale, Landmark, BarChart3, ChevronLeft,
  Users, Mail, User2, MessageCircle, Monitor, Wallet, Shield, FileText,
  Terminal, FileJson, Database, Layers
} from "lucide-react"; 

const SkillBadge = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex items-center space-x-2 bg-slate-900/50 backdrop-blur-md border border-slate-700/50 px-4 py-2 rounded-full text-slate-300 text-sm font-medium transition-all hover:bg-cyan-500/20 hover:text-cyan-400">
    <Icon size={16} className="text-cyan-400" />
    <span>{text}</span>
  </div>
);

const SkillCard = ({ title, icon: Icon, description }: { title: string, icon: any, description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-center p-6 bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl text-center hover:border-cyan-500/50 transition-all group"
  >
    <div className="p-4 rounded-full bg-cyan-500/10 text-cyan-400 mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
    <p className="text-slate-400 text-sm">{description}</p>
  </motion.div>
);

export default function AboutPage() {
  const experiences = [
    {
      title: "Data Business Analyst ",
      company: "Grupo Petroprix",
      date: "2024 - Actualidad",
      description: "Análisis y modelado de datos para optimización de procesos contables y fiscales. Desarrollo de herramientas personalizadas para gestión de activos."
    },
    {
      title: "Data Scientist (Máster)",
      company: "The Bridge / Formación Avanzada",
      date: "2023 - 2024",
      description: "Especialización en Machine Learning aplicado a finanzas, Big Data y visualización avanzada."
    },
    {
      title: "Gestor de Patrimonios & Analista",
      company: "Family Office",
      date: "2022 - 2024",
      description: "Gestión directa de carteras superiores a +4M€, análisis de riesgo y fiscalidad de inversiones."
    },
    {
      title: "Analista Financiero Junior",
      company: "Grupo Petroprix",
      date: "2022-2024",
      description: "Conciliaciones bancarias, reporting financiero y análisis de flujos de caja."
    },
  ];

  const coreSkills = [
    { title: "Modelado Predictivo", icon: FlaskConical, description: "Construcción de modelos ML/DL para previsión de mercados." },
    { title: "Análisis Cuantitativo", icon: BarChart3, description: "Evaluación de inversiones y riesgo mediante métodos estadísticos." },
    { title: "Optimización de Cartera", icon: PieChart, description: "Diseño y gestión de portfolios eficientes." },
    { title: "Ingeniería de Datos", icon: Code, description: "Diseño de pipelines ETL, SQL y automatización." },
    { title: "Fiscalidad Financiera", icon: Scale, description: "Conocimiento de normativa fiscal para optimizar estrategias." },
    { title: "Business Intelligence", icon: LayoutDashboard, description: "Creación de dashboards interactivos con Power BI." },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans">
      <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
        {/* Usamos una imagen genérica o la que ya tienes en public */}
        <div className="absolute inset-0 bg-slate-900/80 z-0">
            <Image 
            src="/Gemini_Generated_Image_vlk1eivlk1eivlk1.png" 
            alt="Background"
            fill
            className="object-cover opacity-20"
            />
        </div>
        
        <div className="relative z-10 max-w-4xl px-6">
          <Link href="/" className="inline-flex items-center text-slate-400 hover:text-cyan-400 transition-colors mb-8 group">
            <ChevronLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
            Volver al Inicio
          </Link>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-amber-300 bg-clip-text text-transparent">Sobre Mí</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Especialista en fusionar la estrategia financiera con el análisis de datos avanzado.
          </p>
        </div>
      </section>

      <section className="relative -mt-20 z-20 pb-20 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900/60 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative group p-1 bg-gradient-to-br from-cyan-400 to-amber-300 rounded-full">
                <Image 
                  src="/foto.jpg" 
                  alt="Antonio"
                  width={180}
                  height={180}
                  className="rounded-full object-cover border-4 border-[#020617]"
                />
              </div>
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-4 italic">"Transformo datos complejos en decisiones estratégicas"</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Soy Antonio Escalzo, analista de datos especializado en Python, SQL y Machine Learning. Mi enfoque reside en la optimización algorítmica y la gestión eficiente de carteras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white tracking-tight">Mi Trayectoria</h2>
          <div className="relative border-l-2 border-slate-800 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 ml-8 relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#020617]" />
                <p className="text-xs font-bold text-slate-500 uppercase mb-1">{exp.date}</p>
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <p className="text-amber-300 text-sm mb-2">{exp.company}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Especialización Técnica</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {coreSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <SkillBadge icon={Terminal} text="Python (Pandas, Scikit-learn)" />
            <SkillBadge icon={Database} text="SQL (PostgreSQL, MySQL)" />
            <SkillBadge icon={Layers} text="Machine Learning & Deep Learning" />
            <SkillBadge icon={Monitor} text="Power BI & Visualización" />
            <SkillBadge icon={FileJson} text="JSON & APIs" />
            <SkillBadge icon={Shield} text="Gestión de Riesgos" />
          </div>
        </div>
      </section>
    </div>
  );
}