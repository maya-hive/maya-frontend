import { useEffect, useRef, useCallback } from 'react';

import styles from './Studytem.module.scss';
import { FlexibleMedia, Anchor } from '@components';
import { animationStudyItem } from './index';

export const CaseStudyItem = ({
	slug,
	title,
	image,
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
		if (!itemRef.current) return;

		itemRef.current.style.paddingTop = `${getRandomInt()}px`;
	}, [getRandomInt]);

	useEffect(
		() => animationStudyItem(itemRef, itemContentRef),
		[itemRef, itemContentRef]
	);

	return (
		<div className={` ${styles.main}`}>
			<Anchor to={`/case-studies/${slug}`} ref={itemRef}>
				{image && (
					<FlexibleMedia
						url={image}
						alt={title}
						styles={styles.thumbnail}
					/>
				)}
				<div className={styles.contentWrap} ref={itemContentRef}>
					<h5 className={styles.category}>{categories_name[0]}</h5>
					<h3 className={styles.title}>
						{title}
					</h3>
				</div>
			</Anchor>
		</div>
	);
};
