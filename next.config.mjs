/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['picsum.photos'], // Dış görsel kaynaklarını ekleyin
    },
};

export default nextConfig;
