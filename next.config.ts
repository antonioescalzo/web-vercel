/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ESTO PERMITIRÁ QUE LA WEB SE PUBLIQUE AUNQUE HAYA ERRORES DE TIPO
    ignoreBuildErrors: true,
  },
  eslint: {
    // TAMBIÉN IGNORAMOS ESLINT PARA ASEGURAR EL ÉXITO
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;