/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages uses a subdirectory for project sites
  // If you're deploying to a custom domain or user site, you can remove this
  basePath: process.env.NODE_ENV === 'production' ? '/regispak-portfolio' : '',
  // This is needed for GitHub Pages
  trailingSlash: true,
};

export default nextConfig;

