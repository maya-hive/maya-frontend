import { Container, Row, Col } from 'react-bootstrap';

import styles from './Introduction.module.scss';
import { ImgFrame, TextSlider } from '@components';

export const Introduction = ({ pageData }) => (
	<section className={styles.main} id={'introduction'}>
		<Container>
			<div className={styles.containerWrapper}>
				<Row>
					<Col md={12} lg={5}>
						<ImgFrame
							url={pageData.home_introduction_img}
							alt={`${pageData.home_introduction_bgtextleft} ${pageData.home_introduction_bgtextright}`}
							styles={styles.imgWrapper}
						/>
					</Col>
					<Col md={12} lg={7}>
						<div
							className={styles.content}
							dangerouslySetInnerHTML={{
								__html: `
				 					${pageData.home_introduction_body}`,
							}}></div>
					</Col>
				</Row>
			</div>
			<TextSlider
				sliderTrackStyle={styles.sliderTrack}
				leftSlideText={pageData.home_introduction_bgtextleft}
				leftSlideStyle={styles.textSliderLeft}
				rightSlideText={pageData.home_introduction_bgtextright}
				rightSlideStyle={styles.textSliderRight}
			/>
		</Container>
	</section>
);
