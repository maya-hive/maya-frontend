export const fetchData = async url => {
	if (!url) return;

	try {
		const request = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!request.ok) {
			console.error(`HTTP error! status: ${request.status}`);
			return { error: true };
		}

		let response = await request.json();
		return { response };
	} catch (error) {
		console.error('error fetching data', error);
		return { error: true };
	}
};
