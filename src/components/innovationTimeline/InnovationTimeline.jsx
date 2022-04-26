import { useRef } from 'react';
import { Container } from 'react-bootstrap';

import styles from './InnovationTimeline.module.scss';
import { Headline } from '@components';
import { Screen } from './index';

export const InnovationTimeline = ({ pageData }) => {
	const containerRef = useRef(null);
	const timestampLogoArr = useRef([]);
	const timestampLogoStripeArr = useRef([]);

	return (
		<section ref={containerRef} className={styles.main}>
			<Container>
				<Headline styles={styles.headline}>
					{pageData.about_timeline_headline}
				</Headline>

				<div className={styles.row}>
					{pageData.about_timeline_timestamp.map(
						({ year, logo, image_position }, index, items) => (
							<Screen
								key={index}
								year={year}
								logo={logo}
								index={index}
								items={items}
								containerRef={containerRef}
								imagePosition={image_position}
								timestampLogoArr={timestampLogoArr}
								timestampLogoStripeArr={timestampLogoStripeArr}
							/>
						)
					)}
				</div>
			</Container>
		</section>
	);
};
