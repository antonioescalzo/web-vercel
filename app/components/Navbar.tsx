"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-lg">Antonio Escalzo</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <Link href="/" className="hover:text-[#00D8FF]">Inicio</Link>
          <Link href="/about" className="hover:text-[#00D8FF]">Sobre mí</Link>
          <Link href="/projects" className="hover:text-[#00D8FF]">Proyectos</Link>
          <Link href="/contact" className="hover:text-[#00D8FF]">Contacto</Link>

          {/* CV */}
          <a
            href="/cv.pdf"
            target="_blank"
            className="px-4 py-1.5 bg-gradient-to-r from-pink-600 to-red-600 rounded-full text-white font-semibold"
          >
            CV
          </a>

          {/* IDIOMAS */}
          <div className="flex items-center gap-2">
            <span>🇪🇸</span>
            <span>🇬🇧</span>
          </div>
        </div>

        {/* MOBILE BURGER */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl px-6 pb-4 flex flex-col gap-4 text-gray-300">
          <Link href="/" onClick={() => setOpen(false)}>Inicio</Link>
          <Link href="/about" onClick={() => setOpen(false)}>Sobre mí</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Proyectos</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contacto</Link>

          <a
            href="/cv.pdf"
            target="_blank"
            className="px-4 py-2 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg text-white font-semibold text-center"
          >
            CV
          </a>

          <div className="flex gap-4 text-lg">
            <span>🇪🇸</span>
            <span>🇬🇧</span>
          </div>
        </div>
      )}
    </nav>
  );
}
