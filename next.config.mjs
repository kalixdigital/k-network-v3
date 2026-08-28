/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Reduce memory usage during build by limiting workers
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
