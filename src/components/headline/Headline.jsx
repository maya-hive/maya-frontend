import styles from './Headline.module.scss';

export const Headline = ({ styles: propStyles, children, h1, div }) => {
	if (h1) {
		return (
			<h1 className={`${styles.main} ${propStyles || ''}`}>
				<span dangerouslySetInnerHTML={{ __html: children }} />
			</h1>
		);
	} else if (div) {
		return (
			<div className={`${styles.main} ${propStyles || ''}`}>
				<span dangerouslySetInnerHTML={{ __html: children }} />
			</div>
		);
	}

	return (
		<h2 className={`${styles.main} ${propStyles || ''}`}>
			<span dangerouslySetInnerHTML={{ __html: children }} />
		</h2>
	);
};
