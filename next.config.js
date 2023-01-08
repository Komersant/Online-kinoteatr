/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	poweredByHeader: false,
	images: { domains: ['localhost'] },
	images: { domains: ['kinogo.biz'] },
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
	},
}

module.exports = nextConfig
