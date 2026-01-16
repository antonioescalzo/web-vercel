import "./globals.css";
import Navbar from "./Navbar";

export const metadata = {
  title: "Antonio Escalzo | Portfolio",
  description: "Portfolio profesional de Antonio Escalzo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#0A0A0A] text-white">

        {/* NAVBAR FIJO ARRIBA */}
        <Navbar />

        {/* CONTENIDO PRINCIPAL (CON ESPACIO PARA EL NAVBAR) */}
        <main className="pt-20">
          {children}
        </main>

      </body>
    </html>
  );
}
