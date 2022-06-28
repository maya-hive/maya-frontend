import { useContext, useEffect, useState } from 'react';

import styles from './CustomCursor.module.scss';
import { useMousePosition, useTouchDetect } from '@hooks';
import { CursorContext } from '@contexts';

export const CustomCursor = () => {
	const [isVisible, setIsVisible] = useState(false);

	const { clientX, clientY } = useMousePosition();

	const [{ active }] = useContext(CursorContext);

	const isTouchDevice = useTouchDetect();

	useEffect(() => {
		const handleMouseEnter = () => setIsVisible(true);
		const handleMouseLeave = () => setIsVisible(false);

		document.body.addEventListener('mouseenter', handleMouseEnter);
		document.body.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			document.body.removeEventListener('mouseenter', handleMouseEnter);
			document.body.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, []);

	if (isTouchDevice) return null;

	return (
		<div className={styles.main}>
			<div
				width={50}
				height={50}
				viewBox={'0 0 50 50'}
				className={`${styles.inner} ${active ? 'active' : ''} cursorInner`}
				style={{
					left: clientX,
					top: clientY,
					opacity: isVisible ? 1 : 0,
				}}
			/>
		</div>
	);
};
