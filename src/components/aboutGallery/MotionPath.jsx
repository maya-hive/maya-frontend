import { useMediaQuery } from '@hooks';
import { useEffect } from 'react';
import { forwardRef, useState } from 'react';

export const MotionPath = forwardRef((props, ref) => {
	const desktopPath =
		'M -0.812 -69.817 C -0.812 -118.384 6.238 -158.334 18.771 -179.484 S 136.271 -298.551 271.744 -12.346 C 345.748 200.961 278.891 271.562 52.042 394.465 C -53.702 428.275 -97.229 683.219 -5 796 C 2 802 0 783 0 777';

	const mobilePath =
		'M -0.812 -69.817 C -0.812 -118.384 6.238 -158.334 18.771 -179.484 S 136.271 -298.551 271.744 -12.346 C 345.748 200.961 278.891 271.562 52.042 394.465 C -53.702 428.275 -97.229 683.219 -5 796 C 2 802 0 783 0 777';

	const [path, setPath] = useState(desktopPath);

	const mdDevice = useMediaQuery('(max-width: 1080px)');

	useEffect(
		() => (mdDevice ? setPath(mobilePath) : setPath(desktopPath)),
		[mdDevice]
	);

	return (
		<svg style={{ width: '0', height: '0' }}>
			<path ref={ref} d={path} {...props} />
		</svg>
	);
});
