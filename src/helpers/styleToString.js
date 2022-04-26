export const styleToString = style =>
	Object.keys(style).reduce(
		(acc, key) =>
			acc +
			key
				.split(/(?=[A-Z])/)
				.join('-')
				.toLowerCase() +
			':' +
			style[key] +
			';',
		''
	);
