/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — produces an `out/` folder you can upload to any host
  // (shared hosting, Netlify, Vercel, GitHub Pages, etc.) for aatech.pk
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
