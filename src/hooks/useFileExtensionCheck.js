import { useEffect, useState } from 'react';

export const useFileExtensionCheck = fetchUrl => {
	const [isVideo, setIsVideo] = useState('');
	const [isImg, setIsImg] = useState('');

	useEffect(() => {
		const images = ['jpg', 'jpeg', 'gif', 'png', 'webp', 'ico'];
		const videos = ['mp4', '3gp', 'ogg'];

		if (!fetchUrl) return;

		const url = new URL(fetchUrl);
		const extension = url.pathname.split('.')[1];

		if (images.includes(extension)) {
			setIsImg(prev => (prev += fetchUrl));
		} else if (videos.includes(extension)) {
			setIsVideo(prev => (prev += fetchUrl));
		}
	}, [fetchUrl]);

	return { isImg, isVideo };
};
