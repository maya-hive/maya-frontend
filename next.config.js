/**
 * Next config options
 *
 * @type {import('next').NextConfig}
 */

/** 
 * Transpile modules from node_modules using the Next.js Babel configuration.

 * @uses next-transpile-modules
 */

const transpileModules = require('next-transpile-modules')(['gsap']);

module.exports = transpileModules({
	reactStrictMode: true,
	basePath: null,
	trailingSlash: true,
});
