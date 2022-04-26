/**
 * With this we can configure webpack without ejecting the default pre-configuration
 *
 * @requires alias configuration
 * @depends gsoft-inc/craco
 * @see https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md
 *
 */

const path = require(`path`);
const alias = require(`./src/utils/aliases.js`);

const SRC = `./src`;
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
	Object.entries(aliases).map(([key, value]) => [
		key,
		path.resolve(__dirname, value),
	])
);

module.exports = {
	webpack: {
		alias: resolvedAliases,
		configure: {
			module: {
				rules: [
					{
						type: 'javascript/auto',
						test: /\.mjs$/,
						include: /node_modules/,
					},
				],
			},
		},
	},
};
