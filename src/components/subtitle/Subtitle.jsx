import styles from './Subtitle.module.scss';

export const Subtitle = ({ styles: propStyles, children }) => (
	<h3 className={`${styles.main} ${propStyles || ''}`}>
		<span dangerouslySetInnerHTML={{ __html: children }} />
	</h3>
);
