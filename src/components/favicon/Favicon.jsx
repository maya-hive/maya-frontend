import { useEffect } from 'react';

export const Favicon = ({ themeData }) => {
	useEffect(() => {
		const setFavicon = () => {
			if (!themeData.theme_metadata_favicon) return;
			document.getElementById('favicon').href =
				themeData.theme_metadata_favicon;
		};

		document.addEventListener('loadstart', setFavicon());
		return () => document.removeEventListener('loadstart', setFavicon());
	}, [themeData]);

	return null;
};
