import { Container, Row, Col } from 'react-bootstrap';

import styles from './BannerHome.module.scss';
import { TextSpinner, FlexibleMedia, Anchor } from '@components';
import { useMediaQuery } from '@hooks';

export const BannerHome = ({ pageData, themeData }) => {
	const xsDevice = useMediaQuery('(max-width: 576px)');

	return (
		<section className={styles.main}>
			<Container className={styles.mainInner}>
				<Row mx={2}>
					<Col md={12} lg={7}>
						<div className={styles.contentContainer}>
							<div
								className={styles.overline}
								dangerouslySetInnerHTML={{
									__html: pageData.home_banner_overline,
								}}
							/>
							<div
								className={styles.headline}
								dangerouslySetInnerHTML={{
									__html: pageData.home_banner_headline,
								}}
							/>
							<h2 className={styles.subtitle}>
								{pageData.home_banner_subtitle}
							</h2>
						</div>
					</Col>
					<Col md={12} lg={5}>
						<FlexibleMedia
							url={pageData.home_banner_media}
							alt={pageData.home_banner_subtitle}
							styles={styles.mediaWrapper}
							autoPlay={true}
							loop={true}
						/>
					</Col>
				</Row>
				{!xsDevice && (
					<div className={styles.bottomWrapper}>
						<Row>
							<Col>
								<TextSpinner
									styles={styles.textSpinner}
									href={'#introduction'}
									primary>
									{pageData.home_banner_spinner}
								</TextSpinner>
							</Col>
							<Col>
								<div className={styles.socialsList}>
									<ul>
										{themeData.theme_general_socials
											.slice(0, 3)
											.map(({ name, url }, index) => (
												<li key={index}>
													<Anchor
														href={url}
														target={'_blank'}
														rel={'noreferrer'}>
														{name}
													</Anchor>
												</li>
											))}
									</ul>
								</div>
							</Col>
						</Row>
					</div>
				)}
			</Container>
		</section>
	);
};
