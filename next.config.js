/**
 * Next config options
 *
 * @type {import('next').NextConfig}
 */
module.exports = {
	reactStrictMode: true,
	trailingSlash: true,
	basePath: process.env.NEXT_PUBLIC_BASE_PATH,
	transpilePackages: ['gsap'],
};
