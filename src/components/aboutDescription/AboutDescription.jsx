import { Col, Container, Row } from 'react-bootstrap';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap/all';

import styles from './AboutDescription.module.scss';
import { FlexibleMedia, Headline, Overline, Subtitle } from '@components';
import { useMediaQuery } from '@hooks';
import { animation } from './index';

export const AboutDescription = ({ pageData }) => {
	const animTitlesRef = useRef(null);

	const smDevice = useMediaQuery('(max-width: 768px)');

	useEffect(() => {
		let tl = gsap.timeline({ repeat: -1 });

		animation(smDevice, tl, animTitlesRef);

		return () => tl.kill();
	}, [animTitlesRef, smDevice]);

	return (
		<div className={styles.main}>
			<Container>
				<Row>
					<Col sm={12} md={12} lg={8}>
						<div className={styles.titleWrap}>
							<Overline styles={styles.overline}>
								{pageData.about_description_overline}
							</Overline>
							<Headline styles={styles.headline} h1={true}>
								{pageData.about_description_headline}
							</Headline>
							<div className={styles.animWrap}>
								<h3 className={styles.animPrefix}>
									{pageData.about_description_animprefix}
								</h3>
								<span className={styles.animatorContainer}>
									<div className={styles.animTitlesWrap} ref={animTitlesRef}>
										<h3
											dangerouslySetInnerHTML={{
												__html: pageData.about_description_animheadline_1,
											}}
											className={styles.title}
										/>
										<h3
											dangerouslySetInnerHTML={{
												__html: pageData.about_description_animheadline_2,
											}}
											className={styles.title}
										/>
										<h3
											dangerouslySetInnerHTML={{
												__html: pageData.about_description_animheadline_3,
											}}
											className={styles.title}
										/>
									</div>
								</span>
							</div>
							<Subtitle styles={styles.subtitle}>
								{pageData.about_description_subtitle}
							</Subtitle>
						</div>
					</Col>
					<Col sm={12} md={12} lg={4}>
						<FlexibleMedia
							url={pageData.about_description_media}
							alt={pageData.about_description_headline}
							styles={styles.mediaWrap}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
