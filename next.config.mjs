/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // /galerialink lê public/images via fs no build (prerender). O file-tracer
  // empacotaria a pasta inteira (~900MB) na função → estoura o limite de 250MB.
  // As imagens já são servidas como assets estáticos, então excluímos do trace.
  outputFileTracingExcludes: {
    "*": ["public/images/**"],
  },
}

export default nextConfig
