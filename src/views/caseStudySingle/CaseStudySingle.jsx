import { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from './CaseStudySingle.module.scss';
import { useHover, useFancybox } from '@hooks';
import {
	Anchor,
	Button,
	ImgFrame,
	FlexibleMedia,
	BackgroundTransition,
	Layout,
} from '@components';

export const CaseStudySingle = ({
	themeData,
	caseStudies: {
		meta,
		title,
		image,
		banner,
		gallery,
		description,
		website,
		facebook,
		categories_name,
	},
}) => {

	const headWrapRef = useRef(null);
	const contentRef = useRef(null);

	const [containerRef, isHovered] = useHover();

	const [fancyboxRef] = useFancybox({
	});

	/* useEffect(() => {
		if (isTouchDevice) return;
		animations(active, mdDevice, videoRef, headWrapRef, contentRef);
	}, [active, mdDevice, videoRef, headWrapRef, contentRef, isTouchDevice]);

	useEffect(() => {
		const cursorElem = document.querySelector('.cursorInner');
		cursorElem && cursorElem.classList.remove('active');
	}, []);*/

	/* return (
		<Layout themeData={themeData} meta={meta}>
			<main className={styles.main}>
				<Container>
					<h1>{title}</h1>
				</Container>
			</main>
		</Layout>
	); */

	return (
		<Layout
			categories={categories_name}
			themeData={themeData}
			title={title}
			meta={meta}>
			<main className={styles.main}>
				<BackgroundTransition>
					<div
						className={styles.containerWrap}
						ref={containerRef}>
						<Container>
							<div ref={headWrapRef} className={styles.headerWrap}>
								<div>
									<h3 className={styles.categoryName}>
										{categories_name && categories_name[0]}
									</h3>
									<h1>{title}</h1>
								</div>
								<div className={styles.linksWrap}>
									{(website || facebook) && (
										<ul className={styles.socials}>
											{website && (
												<li>
													<Button
														href={website}
														title={'Website'}
														round={'true'}
														target={'_blank'}
														styles={styles.button}>
														<span>
															<i className="fas fa-globe" />
														</span>
													</Button>
												</li>
											)}

											{facebook && (
												<li>
													<Button
														href={facebook}
														title={'Facebook'}
														round={'true'}
														target={'_blank'}
														styles={styles.button}>
														<span>
															<i className="fab fa-facebook" />
														</span>
													</Button>
												</li>
											)}
										</ul>
									)}
								</div>
							</div>
							<FlexibleMedia
								url={banner}
								alt={title}
								poster={image || undefined}
								styles={styles.media}
							/>
						</Container>
					</div>
					<Container>
						<article ref={contentRef}>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{ __html: description }}
							/>
							{gallery && (
								<div className={styles.globalCat}>
									<Row ref={fancyboxRef}>
										{gallery.map(({ url, id, alt }) =>
											<Col sm={12} md={6} lg={4} key={id}>
												<Anchor
													key={id}
													href={url}
													data-fancybox="gallery"
													className={styles.item}>
													<ImgFrame
														url={url}
														alt={alt}
														styles={styles.imgFrame}
													/>
												</Anchor>
											</Col>
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
