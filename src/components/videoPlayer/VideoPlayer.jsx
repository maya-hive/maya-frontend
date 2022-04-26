import styles from './VideoPlayer.module.scss';
import { forwardRef } from 'react';

export const VideoPlayer = forwardRef((props, ref) => (
	<>
		{props.url && (
			<div ref={ref} className={`${styles.main} ${props.styles || ''}`}>
				<video src={props.url} preload={'true'} autoPlay muted {...props} />
			</div>
		)}
	</>
));
