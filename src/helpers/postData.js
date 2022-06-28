export const postData = async (url, title) => {
	if (!url || !title) return;

	const request = await fetch(url, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ title: title }),
	}).catch(error => console.error(error));

	try {
		let { response } = await request.json();

		return { response };
	} catch {
		console.error('post request error');
		return { error: true };
	}
};
