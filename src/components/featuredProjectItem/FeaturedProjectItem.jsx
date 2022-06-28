import { useInView } from 'react-intersection-observer';
import { useCallback, useEffect, useRef } from 'react';
import { gsap, Power4 } from 'gsap/all';

import styles from './FeaturedProjectItem.module.scss';
import { animations, ArrowSvg } from './index';

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
		let tl = gsap.timeline({ repeat: -1 });

		let cursorElem = document.querySelector('.cursorInner');

		if (!cursorElem) return;

		if (isHovering) {
			cursorElem.innerHTML = null;
		} else {
			cursorElem.classList.add('playerHovered');
			cursorElem.innerHTML = '<i class="arrowAnim fas fa-arrow-right"/>';
		}

		tl.fromTo(
			'.arrowAnim',
			{
				left: '0px',
			},
			{
				left: '30px',
				duration: 0.5,
				ease: Power4.easeIn,
			}
		).fromTo(
			'.arrowAnim',
			{
				left: '-30px',
			},
			{
				left: '0px',
				duration: 0.8,
				ease: Power4.easeOut,
			}
		);
	}, [isHovering]);

	useEffect(() => {
		if (mdDevice) return;
		animations(inView, titleRef, mediaRef);
	}, [inView, titleRef, mediaRef, mdDevice]);

	return (
		<div key={index} className={styles.main}>
			<div className={styles.contentWrapper} ref={setTitleRef && anchorRef}>
				<h4 className={styles.category}>{categories_name[0]}</h4>
				<Anchor to={`/portfolio/project/${slug}`}>
					<h3 className={styles.title}>{title}</h3>
				</Anchor>
				<Anchor to={`/portfolio/project/${slug}`} className={styles.link}>
					<div>
						<p>{pageData.home_portfolio_postlinkname}</p>
						<ArrowSvg className={styles.arrow} />
					</div>
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
