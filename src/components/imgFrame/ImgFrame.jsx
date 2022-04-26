import { forwardRef } from 'react';
import styles from './ImgFrame.module.scss';

export const ImgFrame = forwardRef(
	({ url, alt, onClick, styles: propStyles, style }, ref) => (
		<>
			{url && (
				<div className={`${styles.main} ${propStyles || ''}`}>
					<img
						src={url}
						alt={alt}
						ref={ref}
						style={style}
						loading={'lazy'}
						onClick={onClick}
					/>
				</div>
			)}
		</>
	)
);
