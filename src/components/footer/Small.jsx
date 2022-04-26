import styles from './Small.module.scss';

export const Small = ({ themeData }) => {
	return (
		<small className={styles.main}>
			<time dateTime={new Date()}>
				{themeData.theme_footer_copyrights.replace(
					'[year]',
					new Date().getFullYear()
				)}
			</time>
			<p
				dangerouslySetInnerHTML={{
					__html: `${themeData.theme_footer_author}`,
				}}
			/>
		</small>
	);
};
