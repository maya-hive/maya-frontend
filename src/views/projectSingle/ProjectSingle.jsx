import { useRef, useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from './ProjectSingle.module.scss';
import { useHover, useMediaQuery, useTouchDetect } from '@hooks';
import {
	Anchor,
	Button,
	ImgFrame,
	VideoPlayer,
	FlexibleMedia,
	BackgroundTransition,
	Layout,
} from '@components';
import { animations } from './animations';

export const ProjectSingle = ({
	projectsTechnologiesData,
	ogImagePath,
	themeData,
	projectData: {
		meta,
		title,
		color,
		thumbnail,
		banner,
		poster,
		link,
		video,
		content,
		categories_name,
		digital,
		technologies,
	},
}) => {
	const [active, setActive] = useState(false);

	const videoRef = useRef(null);
	const headWrapRef = useRef(null);
	const contentRef = useRef(null);

	const [containerRef, isHovered] = useHover();

	const mdDevice = useMediaQuery('(max-width: 992px)');
	const isTouchDevice = useTouchDetect();

	useEffect(() => {
		if (isTouchDevice) return;
		animations(active, mdDevice, videoRef, headWrapRef, contentRef);
	}, [active, mdDevice, videoRef, headWrapRef, contentRef, isTouchDevice]);

	useEffect(() => {
		const cursorElem = document.querySelector('.cursorInner');
		cursorElem && cursorElem.classList.remove('active');
	}, []);

	useEffect(() => {
		const cursorElem = document.querySelector('.cursorInner');

		if (!cursorElem) return;

		if (isHovered && video) {
			cursorElem.classList.add('playerHovered');
			active
				? (cursorElem.innerHTML = '<i class="fas fa-stop"/>')
				: (cursorElem.innerHTML = '<i class="fas fa-play"/>');
		} else {
			cursorElem.classList.remove('playerHovered');
			cursorElem.innerHTML = null;
		}
	}, [active, isHovered, video]);

	return (
		<Layout
			ogImagePath={ogImagePath}
			themeData={themeData}
			title={title}
			meta={meta}>
			<main className={styles.main}>
				<BackgroundTransition>
					<div
						className={styles.containerWrap}
						onClick={() => video && setActive(state => !state)}
						ref={containerRef}>
						<Container>
							<div ref={headWrapRef} className={styles.headerWrap}>
								<h3 className={styles.categoryName}>
									{categories_name && categories_name[0]}
								</h3>
								<h1 style={color ? { color: color } : null}>{title}</h1>
								<div className={styles.iconRowWrap}>
									{projectsTechnologiesData?.data &&
										projectsTechnologiesData.data.map(
											({ term_id: ID, title, image }) =>
												technologies?.includes(ID) &&
												image && (
													<ImgFrame
														key={ID}
														url={image}
														alt={title}
														styles={styles.icon}
														style={
															color === 'black' ? { filter: 'invert(1)' } : null
														}
													/>
												)
										)}
								</div>
								{link?.title && (
									<Button
										styles={styles.link}
										href={link.url}
										target={link.target}>
										{link.title}
									</Button>
								)}
							</div>
							{isTouchDevice && video ? (
								<VideoPlayer
									url={video}
									alt={title}
									poster={poster || undefined}
									styles={`${styles.video} ${styles.isTouch}`}
									loop={true}
								/>
							) : (
								<FlexibleMedia
									url={banner || thumbnail}
									alt={title}
									poster={poster || undefined}
									styles={styles.media}
									style={{ opacity: active ? '0' : '1' }}
								/>
							)}
							{!isTouchDevice && video && (
								<VideoPlayer
									url={video}
									alt={title}
									ref={videoRef}
									styles={styles.video}
									loop={true}
								/>
							)}
						</Container>
					</div>
					<Container>
						<article ref={contentRef}>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{ __html: content }}
							/>
							{digital && (
								<div className={styles.globalCat}>
									<h2>{themeData?.theme_filtering_headline}</h2>
									<Row>
										{digital.map(
											({ image, link }, index) =>
												link.title && (
													<Col sm={12} md={6} lg={4} key={index}>
														<Anchor
															key={index}
															href={link.url}
															target={link.target}
															className={styles.item}>
															<p>{link.title}</p>
															<ImgFrame
																url={image}
																alt={link.title}
																styles={styles.imgFrame}
															/>
														</Anchor>
													</Col>
												)
										)}
									</Row>
								</div>
							)}
						</article>
					</Container>
				</BackgroundTransition>
			</main>
		</Layout>
	);
};
