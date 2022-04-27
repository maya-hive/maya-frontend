/**
 * Next config options
 *
 * @type {import('next').NextConfig}
 */

const path = require('path');

const nextConfig = {
	reactStrictMode: true,
	basePath: null,
	trailingSlash: true,
};

/** 
 * Transpile modules from node_modules using the Next.js Babel configuration.

 * @uses next-transpile-modules
 */

const transpileModules = require('next-transpile-modules')(['gsap']);

module.exports = transpileModules({ nextConfig });
