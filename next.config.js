/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_CMS_URI: process.env.NEXT_CMS_URI,
        NEXT_HOME_LANDING: process.env.NEXT_HOME_LANDING,
        NEXT_SERVICES_LANDING: process.env.NEXT_SERVICES_LANDING,
        NEXT_PROD: process.env.NEXT_PROD,
    },
    images: {
        domains: [
            'localhost'
        ],
    },
};

module.exports = nextConfig;
