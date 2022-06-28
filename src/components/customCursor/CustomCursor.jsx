import { useContext } from 'react';

import styles from './CustomCursor.module.scss';
import { useMousePosition, useTouchDetect } from '@hooks';
import { CursorContext } from '@contexts';

export const CustomCursor = () => {
	const { clientX, clientY } = useMousePosition();

	const [{ active }] = useContext(CursorContext);

	const isTouchDevice = useTouchDetect();

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
					opacity: 1,
				}}
			/>
		</div>
	);
};
