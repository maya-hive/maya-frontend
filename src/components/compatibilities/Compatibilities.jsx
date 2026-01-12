import { Fragment, useEffect, useRef, useState } from 'react';
import reactStringReplace from 'react-string-replace';
import { gsap, ScrollTrigger, Power3 } from 'gsap/all';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './Compatibilities.module.scss';
import mascotHelmet from './assets/mascot-helmet.png';
import mascotBody from './assets/mascot-body.png';

import { compatibilitiesApplication } from '@services';
import { useTouchDetect } from '@hooks';
import {
	Card,
	Form,
	ImgFrame,
	Headline,
	Overline,
	Subtitle,
	IconOrbit,
} from '@components';

export const Compatibilities = ({ pageData, themeData }) => {
	const [isPoppedData, setIsPoppedData] = useState(false);

	const containerRef = useRef(null);
	const mascotHelmetRef = useRef(null);

	const cardElemsRef = useRef([]);

	const isTouchDevice = useTouchDetect();

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const localContainerRef = containerRef.current;

		const getCenter = element => {
			if (!element) return;
			const { left, top, width, height } = element.getBoundingClientRect();
			return { x: left + width / 2, y: top + height / 2 };
		};

		const helmetOrigin = getCenter(mascotHelmetRef.current);

		const mousePosHandler = ({ clientX, clientY }) => {
			const angle = Math.atan2(
				clientY - helmetOrigin.y + 1300,
				clientX - helmetOrigin.x - 800
			);
			mascotHelmetRef.current.style.transform = `rotate(${angle + 2.5}rad)`;
		};

		if (mascotHelmetRef.current && !isTouchDevice) {
			localContainerRef.addEventListener('mousemove', mousePosHandler);
		}

		return () =>
			localContainerRef.removeEventListener('mousemove', mousePosHandler);
	}, [isTouchDevice, containerRef]);

	useEffect(() => {
		const cardElem = cardElemsRef.current;
		const tl = gsap.timeline({ paused: true });

		tl.fromTo(
			cardElem,
			{
				opacity: 0,
				y: '50px',
				stagger: 1.5,
				duration: 2.5,
				ease: Power3.easeIn,
			},
			{
				opacity: 1,
				y: '0',
				stagger: 1.5,
				duration: 2.5,
				ease: Power3.easeOut,
			}
		);
		ScrollTrigger.create({
			trigger: containerRef.current,
			animation: tl,
			start: 'top center',
			end: 'bottom bottom',
			scrub: 2,
		});
		return () => tl.kill();
	}, [cardElemsRef, containerRef]);

	const handleButton = e => {
		e.preventDefault();
		setIsPoppedData({
			[e.target.name]: true,
		});
	};

	return (
		<section ref={containerRef} className={styles.main}>
			<Container>
				<div className={styles.header}>
					<Row>
						<Col xs={12} sm={12} md={8} lg={10}>
							<div className={styles.typesetWrapper}>
								<Overline>{pageData.home_compatibilities_overline}</Overline>
								<Headline>{pageData.home_compatibilities_headline}</Headline>
								<Subtitle>{pageData.home_compatibilities_subheadline}</Subtitle>
							</div>
						</Col>
						<Col xs={12} sm={12} md={4} lg={2}>
							<div className={styles.imageContainer}>
								{pageData.home_compatibilities_type !== 'animation' &&
									pageData.home_compatibilities_img ? (
									<ImgFrame
										url={pageData.home_compatibilities_img}
										alt={pageData.home_banner_media_alt}
									/>
								) : (
									<>
										<img
											src={mascotBody.src}
											alt={pageData.home_banner_media_alt}
										/>
										<img
											src={mascotHelmet.src}
											alt={pageData.home_banner_media_alt}
											className={styles.helmet}
											ref={mascotHelmetRef}
										/>
									</>
								)}
							</div>
						</Col>
					</Row>
				</div>
				<div className={styles.cardsHeader}>
					<h3>
						{reactStringReplace(
							pageData.home_compatibilities_cardshead,
							'[360]',
							index => (
								<em key={index}>
									36
									<span className={styles.iconWrapper}>
										<IconOrbit />
									</span>
								</em>
							)
						)}
					</h3>
				</div>
				<div className={styles.cardsWrapper}>
					<Row>
						{pageData?.home_compatibilities_cards && pageData?.home_compatibilities_cards.map(
							({ img, headline, subheadline, body, call_to_action }, index) => (
								<Fragment key={index}>
									<Card
										img={img}
										bgImg={img}
										headline={headline}
										bgImgStyle={'bg-img'}
										cardStyle={`card-${index}`}
										ref={element => cardElemsRef.current.push(element)}
										subtitle={
											<span
												dangerouslySetInnerHTML={{
													__html: subheadline,
												}}
											/>
										}
										body={
											<span
												dangerouslySetInnerHTML={{
													__html: body,
												}}
											/>
										}
										buttonValue={call_to_action.title}
										onClick={e => handleButton(e)}
									/>
									<Form
										popup
										isPoppedData={isPoppedData}
										endpoint={compatibilitiesApplication}
										setIsPoppedData={setIsPoppedData}
										headline={headline}
										pageData={pageData}
										themeData={themeData}
									/>
								</Fragment>
							)
						)}
					</Row>
				</div>
			</Container>
		</section>
	);
};
