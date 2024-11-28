import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Create the Next Intl plugin
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    /* config options here */
    images: {
        // unoptimized: true,
        localPatterns: [
            {
                pathname: '/assets/images/**',
                search: '',
            },
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dev-api.freshmoe.com',
            },
        ],
    },
};

export default withNextIntl(nextConfig);
