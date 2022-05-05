import styles from './ProjectsFilter.module.scss';
import { Container, Col, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { Button, Headline, Overline, Subtitle } from '@components';
import mascotFreeStyle from './assets/mascotFreeStyle.png';
import floatingSaturn from './assets/floatingSaturn.png';
import { useState } from 'react';

export const ProjectsFilter = ({
	pageData,
	setFilter,
	projectCategoriesData,
}) => {
	const [isActive, setIsActive] = useState(false);
	const [color, setColor] = useState('');

	const setActiveStyles = (name, isActive) =>
		Object.keys(isActive)[0] === name
			? { color: color.onPrimaryColor, backgroundColor: color.primaryColor }
			: null;

	const handleOnActive = e => setIsActive({ [e.target.name]: true });

	useEffect(() => setIsActive({ all: true }), []);

	useEffect(() => {
		setColor({
			primaryColor: document.body.style.getPropertyValue('--primary-color'),
			onPrimaryColor:
				document.body.style.getPropertyValue('--on-primary-color'),
		});
	}, []);

	return (
		<section className={styles.main}>
			<Container>
				<Row>
					<Col sm={12} md={12} lg={3}>
						<div className={styles.mediaWrap}>
							{pageData.portfolio_filtering_animation === 'anim' ? (
								<>
									<img
										src={floatingSaturn.src}
										alt={pageData.portfolio_filtering_overline}
										className={styles.saturnImg}
									/>
									<img
										src={mascotFreeStyle.src}
										alt={pageData.portfolio_filtering_overline}
										className={styles.mascotImg}
									/>
								</>
							) : (
								<img
									src={pageData.portfolio_filtering_img}
									alt={pageData.portfolio_filtering_overline}
									className={styles.customImg}
								/>
							)}
						</div>
					</Col>
					<Col sm={12} md={12} lg={9}>
						<div className={styles.typesetWrapper}>
							<Overline>{pageData.portfolio_filtering_overline}</Overline>
							<Headline styles={styles.headline}>
								{pageData.portfolio_filtering_headline}
							</Headline>
							<Subtitle styles={styles.subtitle}>
								{pageData.portfolio_filtering_subtitle}
							</Subtitle>
						</div>
						<div className={styles.buttonRow}>
							<Button
								name={'all'}
								styles={styles.button}
								secondary={'true'}
								style={setActiveStyles('all', isActive)}
								onClick={e => {
									setFilter('all');
									handleOnActive(e);
								}}>
								{'All'}
							</Button>
							{projectCategoriesData.data &&
								projectCategoriesData.data.map(
									({ term_id, name, slug, count }) =>
										count >= 1 && (
											<Button
												name={name}
												key={term_id}
												secondary={'true'}
												styles={styles.button}
												style={setActiveStyles(name, isActive)}
												onClick={e => {
													setFilter(slug);
													handleOnActive(e);
												}}>
												{name}
											</Button>
										)
								)}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
