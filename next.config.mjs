// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true,
//   },
//   basePath: process.env.NODE_ENV === 'production' ? '/regispak-portfolio' : '',
//   assetPrefix: process.env.NODE_ENV === 'production' ? '/regispak-portfolio/' : '',
//   trailingSlash: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // No basePath needed for user site (regispak.github.io)
  // basePath would only be needed for project sites (regispak.github.io/project-name)
  trailingSlash: true,
};

export default nextConfig;
