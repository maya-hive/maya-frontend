import { forwardRef } from 'react';
import styles from './ImgFrame.module.scss';

export const ImgFrame = forwardRef(
	({ url, alt, onClick, styles: propStyles, style, loading }, ref) => (
		<>
			{url && (
				<div className={`${styles.main} ${propStyles || ''}`}>
					<img
						src={url}
						alt={alt}
						ref={ref}
						style={style}
						loading={loading ? loading : 'lazy'}
						onClick={onClick}
					/>
				</div>
			)}
		</>
	)
);
