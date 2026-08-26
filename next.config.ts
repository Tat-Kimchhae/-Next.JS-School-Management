import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/admin',
            }
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
        ],
    }
};

export default nextConfig;
