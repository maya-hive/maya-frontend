import { useEffect, useRef, useCallback } from 'react';

import styles from './ProjectItem.module.scss';
import { FlexibleMedia, Anchor } from '@components';
import { animation } from './index';

export const ProjectItem = ({
	slug,
	title,
	color,
	thumbnail,
	categories_name,
}) => {
	const itemRef = useRef(null);
	const itemContentRef = useRef(null);

	let min = Math.ceil(400);
	let max = Math.floor(700);

	const getRandomInt = useCallback(
		() => Math.floor(Math.random() * (max - min) + min),
		[max, min]
	);

	useEffect(() => {
		itemRef.current.style.paddingTop = `${getRandomInt()}px`;
	}, [getRandomInt]);

	useEffect(
		() => animation(itemRef, itemContentRef),
		[itemRef, itemContentRef]
	);

	return (
		<div className={styles.main}>
			<Anchor to={slug} ref={itemRef}>
				{thumbnail && (
					<FlexibleMedia
						url={thumbnail}
						alt={title}
						styles={styles.thumbnail}
					/>
				)}
				<div className={styles.contentWrap} ref={itemContentRef}>
					<h5 className={styles.category}>{categories_name[0]}</h5>
					<h3 className={styles.title} style={color && { color: color }}>
						{title}
					</h3>
				</div>
			</Anchor>
		</div>
	);
};
