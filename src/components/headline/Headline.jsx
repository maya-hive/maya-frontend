import styles from './Headline.module.scss';

export const Headline = ({ styles: propStyles, children }) => (
	<h2 className={`${styles.main} ${propStyles || ''}`}>
		<span dangerouslySetInnerHTML={{ __html: children }} />
	</h2>
);
