import { Container, Row, Col } from 'react-bootstrap';

import styles from './InBritain.module.scss';
import { FlexibleMedia } from '@components';

export const InBritain = ({ pageData }) => (
	<section className={styles.main}>
		<Container>
			<Row>
				<Col lg={6}>
					<FlexibleMedia
						loop
						styles={styles.imageFrame}
						url={pageData.home_britain_media.url}
						alt={pageData.home_britain_media.alt}
						poster={pageData.home_britain_fallback}
					/>
				</Col>
				<Col lg={6}>
					<div
						className={styles.content}
						dangerouslySetInnerHTML={{
							__html: pageData.home_britain_body,
						}}
					/>
				</Col>
			</Row>
		</Container>
	</section>
);
