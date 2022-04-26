import { useInView } from 'react-intersection-observer';
import { useCallback, useEffect, useRef } from 'react';

import styles from './FeaturedProjectItem.module.scss';
import { ReactComponent as Arrow } from './assets/fancy_arrow.svg';
import { animations } from './index';

import { Anchor, FlexibleMedia } from '@components';
import { useHover, useMediaQuery } from '@hooks';

export const FeaturedProjectItem = ({
	slug,
	title,
	index,
	poster,
	pageData,
	thumbnail,
	categories_name,
}) => {
	const titleRef = useRef(null);
	const mediaRef = useRef(null);

	const mdDevice = useMediaQuery('(max-width: 768px)');

	const [anchorRef, isHovering] = useHover();

	const [inViewRef, inView] = useInView({
		threshold: 0,
	});

	const setTitleRef = useCallback(
		node => {
			titleRef.current = node;
			inViewRef(node);
		},
		[inViewRef]
	);

	const setMediaRef = useCallback(
		node => {
			mediaRef.current = node;
			inViewRef(node);
		},
		[inViewRef]
	);

	useEffect(() => {
		let cursorElem = document.querySelector('.cursorInner');

		if (!cursorElem) return;

		if (isHovering) {
			cursorElem.innerHTML = '<i class="fas fa-eye"/>';
		} else {
			cursorElem.innerHTML = null;
		}
	}, [isHovering]);

	useEffect(() => {
		if (mdDevice) return;
		animations(inView, titleRef, mediaRef);
	}, [inView, titleRef, mediaRef, mdDevice]);

	return (
		<div key={index} className={styles.main}>
			<div className={styles.contentWrapper} ref={setTitleRef}>
				<h4 className={styles.category}>{categories_name[0]}</h4>
				<Anchor to={`portfolio/${slug}`} ref={anchorRef}>
					<h3 className={styles.title}>{title}</h3>
				</Anchor>
				<Anchor to={`portfolio/${slug}`} className={styles.link}>
					<p>{pageData.home_portfolio_postlinkname}</p>
					<Arrow className={styles.arrow} />
				</Anchor>
			</div>
			<div className={styles.mediaWrap} ref={setMediaRef}>
				{thumbnail && (
					<FlexibleMedia
						autoPlay={true}
						muted={true}
						loop={true}
						url={thumbnail}
						poster={poster}
						alt={title}
						styles={styles.flexibleMedia}
					/>
				)}
			</div>
		</div>
	);
};
