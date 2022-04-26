import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';

import styles from './InquiryForm.module.scss';
import mascotHelmet from './assets/mascot-helmet.png';
import mascotBody from './assets/mascot-body.png';
import mascotBg from './assets/mascot-bg.png';
import { Button, Anchor, Form, Overline } from '@components';
import { useTouchDetect } from '@hooks';

export const InquiryForm = ({ pageData, themeData }) => {
	const containerRef = useRef(null);
	const mascotHelmetRef = useRef(null);

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
			mascotHelmetRef.current.style.transform = `rotate(${angle + 4.5}rad)`;
		};

		if (mascotHelmetRef.current && !isTouchDevice) {
			localContainerRef.addEventListener('mousemove', mousePosHandler);
		}

		return () =>
			localContainerRef.removeEventListener('mousemove', mousePosHandler);
	}, [isTouchDevice, containerRef]);

	return (
		<section ref={containerRef} className={styles.main}>
			<Container>
				<Row>
					<Col sm={12} md={12} lg={5}>
						<address>
							{pageData.contact_form_headlinetype ? (
								<div className={styles.animWrap}>
									<div className={styles.mascot}>
										<img
											className={styles.helmet}
											ref={mascotHelmetRef}
											src={mascotHelmet}
											alt={'img'}
										/>
										<img className={styles.body} src={mascotBody} alt={'img'} />
									</div>
									<img className={styles.bg} src={mascotBg} alt={'img'} />
									<Overline>{pageData.contact_form_infooverline}</Overline>
									<div className={styles.headline}>
										{'Say '}
										<strong>{'hello'}</strong>
									</div>
								</div>
							) : (
								<>
									<Overline styles={styles.overline}>
										{pageData.contact_form_infooverline}
									</Overline>
									<div
										dangerouslySetInnerHTML={{
											__html: pageData.contact_form_customheadline,
										}}
									/>
								</>
							)}
							<h3
								className={styles.cta}
								dangerouslySetInnerHTML={{
									__html: pageData.contact_form_cta,
								}}
							/>
							<div className={styles.address}>
								<h3>{pageData.contact_form_infoaddress}</h3>
								<Anchor
									href={`https://www.google.com/maps/search/${themeData.theme_general_address.replace(
										/<[^>]*>?/gm,
										''
									)}`}
									target={'_blank'}>
									<p
										dangerouslySetInnerHTML={{
											__html: themeData.theme_general_address,
										}}
									/>
								</Anchor>
							</div>
							<div className={styles.telephone}>
								<h3>{pageData.contact_form_infotelephone}</h3>
								<ul>
									{themeData.theme_general_telephone.map(
										({ name, number }, index) => (
											<li key={index}>
												<Anchor href={`tel:${number}`}>
													{[number, name && <span key={index}> [{name}]</span>]}
												</Anchor>
											</li>
										)
									)}
								</ul>
							</div>
							<div className={styles.email}>
								<h3>{pageData.contact_form_infoemail}</h3>
								<ul>
									{themeData.theme_general_email.map(({ email }, index) => (
										<li key={index}>
											<Anchor href={`mailto:${email}`}>{email}</Anchor>
										</li>
									))}
								</ul>
							</div>
							<ul className={styles.socials}>
								{themeData.theme_general_socials.map(
									({ name, icon, url }, index) => (
										<li key={index}>
											<Button
												href={url}
												title={name}
												round={'true'}
												target={'_blank'}
												styles={styles.button}>
												<span
													dangerouslySetInnerHTML={{
														__html: icon,
													}}
												/>
											</Button>
										</li>
									)
								)}
							</ul>
						</address>
					</Col>
					<Col sm={12} md={12} lg={7}>
						<div className={styles.form} id={'inquiry-form'}>
							<Overline>{pageData.contact_form_overline}</Overline>
							<div
								className={styles.headline}
								dangerouslySetInnerHTML={{
									__html: pageData.contact_form_headline,
								}}
							/>
							<Form
								themeData={themeData}
								submitValue={pageData.contact_form_submit}
								toggleCompatiblities
								labelCompatibilities={
									pageData.contact_form_labelcompatibilities
								}
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
