import { useEffect, useState, useRef, useCallback } from 'react';
import { gsap, ScrollTrigger, MotionPathPlugin } from 'gsap/all';

import styles from './AboutGallery.module.scss';
import itemsPos from './GalleryItemsPositions';
import { FlexibleMedia, ImgFrame } from '@components';
import { useMediaQuery } from '@hooks';
import { MotionPath } from './index';

export const AboutGallery = ({ pageData }) => {
	const [inMotion, setInMotion] = useState(false);
	const [position, setPosition] = useState(0);
	const [isMounted, setIsMounted] = useState(true);

	const rocketRef = useRef(null);
	const motionPathRef = useRef(null);

	const mdDevice = useMediaQuery('(max-width: 1080px)');
	const smDevice = useMediaQuery('(max-width: 992px)');

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

		const tl = gsap.timeline();
		const rocketElem = rocketRef.current;
		const motionPathElem = motionPathRef.current;

		tl.fromTo(
			rocketElem,
			{
				transform: 'translate(0, 50%)',
			},
			{
				scrollTrigger: {
					trigger: rocketElem,
					scrub: true,
					start: mdDevice ? '+=500px +=400px' : 'top +=300px',
					end: '+=1100px +=800px',
					onUpdate: e => isMounted && setPosition(e.progress),
				},
				motionPath: {
					scrub: true,
					path: motionPathElem,
					align: motionPathElem,
					autoRotate: 90,
					alignOrigin: [0.5, 0.5],
				},
			}
		);

		return () => {
			tl.kill();
			setIsMounted(false);
		};
	}, [rocketRef, isMounted, motionPathRef, mdDevice]);

	const handleMotionState = useCallback(() => {
		setInMotion(true);
		setTimeout(() => setInMotion(false), 600);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleMotionState);
		return () => window.removeEventListener('scroll', handleMotionState);
	}, [handleMotionState]);

	return (
		<section className={styles.main}>
			<div className={styles.headerWrap}>
				{!smDevice && (
					<div
						ref={rocketRef}
						className={styles.animWrap}
						style={{
							width: `${
								position === 0
									? 50
									: position < 0.4
									? (position + 20) * 4
									: position < 0.8
									? position * 120
									: position * 100
							}px`,
							transform:
								position === 0 &&
								(!mdDevice ? 'translate(150px, 0px)' : 'translate(-100vw, 0)'),
						}}>
						<ImgFrame
							styles={styles.rocket}
							url={pageData.about_gallery_rocket.url}
							alt={pageData.about_gallery_rocket.alt}
						/>
						<ImgFrame
							styles={styles.particle}
							url={pageData.about_gallery_particle.url}
							alt={pageData.about_gallery_particle.alt}
							style={{
								opacity: inMotion ? '1' : '0',
							}}
						/>
					</div>
				)}
				<MotionPath ref={motionPathRef} />
				<div className={styles.headline}>
					{mdDevice ? (
						<div className={styles.mdWrap}>
							<h1>{'Say Hello'}</h1>
							<div className={styles.imgWrap}>
								<h1 style={{ right: '16px' }}>{'T'}</h1>
								<ImgFrame
									url={pageData.about_gallery_headlinemedia.url}
									alt={pageData.about_gallery_headlinemedia.alt}
									styles={styles.imgFrame}
								/>
							</div>
							<h1>{'Maya'}</h1>
						</div>
					) : (
						<>
							<h1>{'Say Hello T'}</h1>
							<ImgFrame
								url={pageData.about_gallery_headlinemedia.url}
								alt={pageData.about_gallery_headlinemedia.alt}
								styles={styles.imgFrame}
							/>
							<h1 style={{ left: '32px' }}>{'Maya'}</h1>
						</>
					)}
				</div>
			</div>
			<div className={styles.grid}>
				{smDevice && (
					<div
						className={`${styles.mobileGalleryItem} ${
							position === 1 ? styles.active : ''
						}`}>
						<span />
						<span />
						<span />
						<span />
						<span />
					</div>
				)}
				{!smDevice &&
					pageData.about_gallery_items.map(({ media }, index) => (
						<div
							key={index}
							className={styles.galleryItem}
							style={{
								transform:
									position === 1
										? `translate(${itemsPos[index].xAxis}vw, ${itemsPos[index].yAxis}vh) scale(${itemsPos[index].size})`
										: `translate(0, 100px) scale(1)`,
							}}>
							<FlexibleMedia
								key={index}
								url={media}
								styles={styles.media}
								alt={`gallery-media ${index}`}
								loop
							/>
						</div>
					))}
				<FlexibleMedia
					url={pageData.about_gallery_center.url}
					alt={pageData.about_gallery_center.alt}
					styles={styles.center}
				/>
			</div>
		</section>
	);
};
