export const fetchData = async url => {
	if (!url) return;

	const request = await fetch(url, {
		headers: {
			'Content-Type': 'application/json',
		},
	}).catch(error => console.error(error));

	const response = await request.json();

	return { response };
};
