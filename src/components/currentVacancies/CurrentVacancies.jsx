import { Container, Accordion } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';

import styles from './CurrentVacancies.module.scss';
import { animationsCurrentVacancies, SubmitBtn } from './index';
import { FlexibleMedia, Form, Headline, Overline, Subtitle } from '@components';
import { useCursorHandlers, useMediaQuery } from '@hooks';
import { careersApplication } from '@services';

export const CurrentVacancies = ({ pageData, themeData }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isPoppedData, setIsPoppedData] = useState(false);

	const itemImageRef = useRef([]);
	const itemHeadlineRef = useRef([]);
	const itemDescriptionRef = useRef([]);
	const itemSkillsRef = useRef([]);

	const mobileScreen = useMediaQuery('(max-width: 992px)');

	const cursorHandlers = useCursorHandlers();

	useEffect(() => {
		animationsCurrentVacancies(
			isOpen,
			itemHeadlineRef,
			itemDescriptionRef,
			itemSkillsRef,
			itemImageRef
		);
	}, [
		isOpen,
		mobileScreen,
		itemHeadlineRef,
		itemDescriptionRef,
		itemSkillsRef,
		itemImageRef,
	]);

	const handleButton = e => {
		e.preventDefault();
		setIsPoppedData({
			[e.target.name]: true,
		});
	};

	return (
		<section className={styles.main}>
			<Container>
				<Overline>{pageData.careers_vacancies_overline}</Overline>
				<Headline styles={styles.headline} div={true}>
					{pageData.careers_vacancies_headline}
				</Headline>
				<Accordion className={styles.accordion}>
					{pageData.careers_vacancies_available ? (
						pageData.careers_vacancies_available.map(
							({ position, media, headline, description, skills }, index) => (
								<div className={styles.itemWrap} key={index}>
									{!mobileScreen && (
										<SubmitBtn
											position={position}
											onClick={e => handleButton(e)}
										/>
									)}
									<Form
										popup
										isPoppedData={isPoppedData}
										setIsPoppedData={setIsPoppedData}
										endpoint={careersApplication}
										headline={position}
										pageData={pageData}
										themeData={themeData}
										fileInput={true}
									/>
									<Accordion.Item eventKey={index} className={styles.item}>
										<Accordion.Header
											className={styles.header}
											onClick={event =>
												event.target.classList.contains('collapsed')
													? setIsOpen(true)
													: setIsOpen(false)
											}
											{...cursorHandlers}>
											<div className={styles.position}>{position}</div>
										</Accordion.Header>
										<Accordion.Body className={styles.body}>
											<div
												className={styles.imgWrap}
												ref={elem => itemImageRef.current.push(elem)}>
												<FlexibleMedia
													url={media}
													alt={position}
													styles={styles.media}
												/>
											</div>
											<div className={styles.contentWrap}>
												<div
													ref={elem => itemHeadlineRef.current.push(elem)}
													className={styles.headline}
													dangerouslySetInnerHTML={{ __html: headline }}
												/>
												<div
													className={styles.description}
													ref={elem => itemDescriptionRef.current.push(elem)}>
													{description}
												</div>
												<ul
													className={styles.skills}
													ref={elem => itemSkillsRef.current.push(elem)}>
													{skills &&
														skills.map(({ ability }, index) => (
															<li key={index} className={styles.ability}>
																{ability}
																<span />
															</li>
														))}
												</ul>
												{mobileScreen && (
													<SubmitBtn
														position={position}
														onClick={e => handleButton(e)}
													/>
												)}
											</div>
										</Accordion.Body>
									</Accordion.Item>
								</div>
							)
						)
					) : (
						<Subtitle styles={styles.error}>
							{pageData.careers_vacancies_unavailable}
						</Subtitle>
					)}
				</Accordion>
			</Container>
		</section>
	);
};
