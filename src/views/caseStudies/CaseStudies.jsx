import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import Sparticles from 'sparticles';

import { particleConfig } from './particleConfig';
import { useMediaQuery } from '@hooks';
import {
	AnimateWrap,
	BackgroundTransition,
	CaseStudyItem,
	Layout,
} from '@components';

export const CaseStudies = ({
	pageData,
	themeData,
	caseStudiesData,
}) => {

	const mdDevice = useMediaQuery('(max-width: 768px)');

	useEffect(() => {
		particleConfig.imageUrl = pageData.casestudy_bg_img;
		particleConfig.color = pageData.casestudy_bg_color;

		if (!mdDevice) {
			new Sparticles(particleConfig, 1920, 1080);
		}

		return () => {
			const elem = document.querySelector('.sparticles');
			elem && elem.remove();
		};
	}, [mdDevice, pageData]);

	return (
		<Layout themeData={themeData} meta={pageData.meta}>
			<main>
				{caseStudiesData?.data?.length > 0 && (
					<BackgroundTransition>
						<AnimateWrap>
							<Container>
								<Row>
									{caseStudiesData?.data?.map((item, index) => (
										<Col lg={4} key={item.id || item.slug || index}>
											<CaseStudyItem {...item} />
										</Col>
									))}
								</Row>
							</Container>
						</AnimateWrap>
					</BackgroundTransition>
				)}
			</main>
		</Layout>
	);
};
