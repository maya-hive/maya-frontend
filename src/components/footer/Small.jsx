import { useEffect, useState } from 'react';

import styles from './Small.module.scss';

export const Small = ({ themeData }) => {
	const [date, setDate] = useState('');

	useEffect(() => {
		setDate(new Date().getFullYear());
	}, []);

	return (
		<small className={styles.main}>
			<time dateTime={date}>
				{themeData.theme_footer_copyrights.replace('[year]', date)}
			</time>
			<div
				dangerouslySetInnerHTML={{
					__html: themeData.theme_footer_author,
				}}
			/>
		</small>
	);
};
