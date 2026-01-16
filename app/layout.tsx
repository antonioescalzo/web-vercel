import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Antonio Escalzo | Portfolio",
  description: "Portfolio profesional de Antonio Escalzo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#0A0A0A] text-white">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}

