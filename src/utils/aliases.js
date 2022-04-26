const aliases = (prefix = `src`) => ({
	'@components': `${prefix}/components`,
	'@contexts': `${prefix}/contexts`,
	'@services': `${prefix}/services`,
	'@helpers': `${prefix}/helpers`,
	'@styles': `${prefix}/styles`,
	'@router': `${prefix}/router`,
	'@assets': `${prefix}/assets`,
	'@hooks': `${prefix}/hooks`,
	'@views': `${prefix}/views`,
	'@utils': `${prefix}/utils`,
	'@app': `${prefix}/app`,
});

module.exports = aliases;
