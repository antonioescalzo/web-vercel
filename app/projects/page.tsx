import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Cpu, Database, TrendingUp, Github } from "lucide-react";

export default function ProjectsPage() {
  const proyectosData = [
    {
      id: 1,
      titulo: "Análisis Predictivo",
      desc: "Modelo de ML para previsión de activos financieros mediante redes neuronales recurrentes.",
      url: "https://github.com/antonioescalzo/tu-repo-1",
      imagen: "/Gemini_Generated_Image_vlk1eivlk1eivlk1.png",
      tags: ["Machine Learning", "Python"]
    },
    {
      id: 2,
      titulo: "Diversificación de Carteras",
      desc: "Optimización de carteras y validación de la eficiencia de indexación frente al riesgo (2010-2024).",
      url: "https://github.com/antonioescalzo/PROYECTO_EDA.git",
      imagen: "/Gemini_Generated_Image_k9cggfk9cggfk9cg.png",
      tags: ["Data Analysis", "Finance"]
    },
    {
      id: 3,
      titulo: "Detección de Fraude",
      desc: "Sistema inteligente para identificar movimientos fraudulentos en tarjetas de crédito con alta precisión.",
      url: "https://github.com/antonioescalzo/movimiento_fraudulentos_tarjetas.git",
      imagen: "/Gemini_Generated_Image_vlk1eivlk1eivlk1.png",
      tags: ["Deep Learning", "SQL"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30">
      
      {/* FONDO DECORATIVO DE ALTA GAMA */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-900/10 to-transparent -z-10" />
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        
        {/* NAVEGACIÓN SUPERIOR */}
        <div className="flex justify-start mb-16">
          <Link href="/" className="group flex items-center text-slate-500 hover:text-cyan-400 transition-all font-medium text-sm">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
            Volver al panel principal
          </Link>
        </div>
        
        {/* HEADER CENTRADO E IMPACTANTE */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter text-white">
            Proyectos <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Estratégicos</span>
          </h1>
          
          <div className="relative inline-block">
             <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
              Transformando la complejidad de los mercados en <span className="text-white font-medium">ventajas competitivas</span> mediante modelos de Machine Learning y análisis cuantitativo de alta precisión.
            </p>
            {/* Adorno visual sutil debajo del texto */}
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
          </div>
          
          {/* BADGES DE TECNOLOGÍA CENTRADOS */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
              <Cpu size={14} className="text-cyan-500" /> Machine Learning
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
              <Database size={14} className="text-cyan-500" /> Big Data
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
              <TrendingUp size={14} className="text-cyan-500" /> Quantitative Finance
            </div>
          </div>
        </div>

        {/* GRID DE PROYECTOS CON DISEÑO DE TARJETA MEJORADO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proyectosData.map((proyecto) => (
            <a 
              key={proyecto.id} 
              href={proyecto.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="h-full bg-slate-900/40 backdrop-blur-md rounded-3xl border border-white/5 transition-all duration-500 group-hover:border-cyan-500/30 group-hover:bg-slate-900/60 overflow-hidden flex flex-col shadow-2xl">
                
                {/* CONTENEDOR DE IMAGEN CON OVERLAY */}
                <div className="h-56 relative overflow-hidden">
                  <Image 
                    src={proyecto.imagen} 
                    alt={proyecto.titulo}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />
                  
                  {/* TAGS FLOTANTES */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {proyecto.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-bold bg-white/5 backdrop-blur-md text-white border border-white/10 px-2 py-1 rounded-full uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* CONTENIDO DE LA TARJETA */}
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-4 leading-tight">
                    {proyecto.titulo}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-light">
                    {proyecto.desc}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="flex items-center gap-2 text-[10px] font-black text-cyan-500 uppercase tracking-[0.15em]">
                      <Github size={14} /> Repositorio
                    </span>
                    <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                      <TrendingUp size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}