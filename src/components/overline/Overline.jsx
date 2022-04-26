import styles from './Overline.module.scss';

export const Overline = ({ styles: propStyles, white, children }) => (
	<h4
		className={`${propStyles || ''} ${styles.main}`}
		style={{ color: white ? 'white' : '' }}>
		{children}
	</h4>
);
