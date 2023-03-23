import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { gsap, Power4 } from 'gsap/all';

import styles from './ProjectsSlider.module.scss';
import { useHover } from '@hooks';
import {
	Overline,
	Subtitle,
	Button,
	Carousel,
	TextSpinner,
	FeaturedProjectItem,
} from '@components';

export const ProjectsSlider = ({ pageData, projectsData }) => {
	const [containerRef, isGrabbing] = useHover();

	const [sliderOptions] = useState({
		infinite: false,
		slidesToShow: 1.2,
		swipeToSide: true,
		rows: 1,
		className: 'projectsSlider',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1.2,
				},
			},
		],
	});

	useEffect(() => {
		let cursorElem = document.querySelector('.cursorInner');
		let tl = gsap.timeline({ repeat: -1 });

		if (!cursorElem) return;

		if (isGrabbing) {
			cursorElem.classList.add('playerHovered');
			cursorElem.innerHTML = '<i class="arrowAnim fas fa-arrow-left"/>';

			tl.fromTo(
				'.arrowAnim',
				{
					right: '0px',
				},
				{
					right: '30px',
					duration: 0.5,
					ease: Power4.easeIn,
				}
			).fromTo(
				'.arrowAnim',
				{
					right: '-30px',
				},
				{
					right: '0px',
					duration: 0.8,
					ease: Power4.easeOut,
				}
			);
		} else {
			cursorElem.classList.remove('playerHovered');
			cursorElem.innerHTML = null;
		}
	}, [isGrabbing]);

	return (
		<section className={styles.main}>
			<Container>
				<Row>
					<Col lg={9}>
						<Overline styles={styles.overline}>
							{pageData.home_portfolio_overline}
						</Overline>
						<Subtitle styles={styles.subtitle}>
							{pageData.home_portfolio_subtitle}
						</Subtitle>
						<Button to={pageData.home_portfolio_cta.url} styles={styles.button}>
							{pageData.home_portfolio_cta.title}
						</Button>
					</Col>
				</Row>
				<div ref={containerRef}>
					<Carousel styles={styles.carousel} {...sliderOptions}>
						{projectsData.data &&
							projectsData.data.map(
								(
									{ ID, categories_name, slug, thumbnail, poster, title },
									index
								) =>
									pageData.home_portfolio_project.includes(ID) && (
										<FeaturedProjectItem
											key={ID}
											slug={slug}
											index={index}
											title={title}
											pageData={pageData}
											thumbnail={thumbnail}
											poster={poster || undefined}
											categories_name={categories_name || 'uncategorized'}
										/>
									)
							)}
					</Carousel>
				</div>
				<div className={styles.textSpinner}>
					<TextSpinner to={pageData.home_portfolio_link.url} secondary={'true'}>
						{pageData.home_portfolio_link.title}
					</TextSpinner>
				</div>
			</Container>
		</section>
	);
};
