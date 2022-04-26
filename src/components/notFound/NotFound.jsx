import { useState, useRef, useEffect } from 'react';
import {
	Animations,
	particleConfig1,
	particleConfig2,
	starConfig1,
	starConfig2,
} from './index.js';
import { Button, ImgFrame } from '@components';
import ParticlesBg from 'particles-bg';

import styles from './NotFound.module.scss';
import { Col, Container, Row } from 'react-bootstrap';

export const NotFound = ({ pageData }) => {
	const [windowRect, setWindowRect] = useState({
		animWrapWidth: window.innerWidth / 2,
		animWrapHeight: window.innerHeight,
	});

	const wrapperRef = useRef(null);

	useEffect(() => {
		setWindowRect({
			animWrapWidth: wrapperRef.current.clientWidth,
			animWrapHeight: wrapperRef.current.clientHeight,
		});
		document.body.style.setProperty(
			'--on-button-color',
			pageData?.notfound_appearance_btncolor
		);
		document.body.style.setProperty(
			'--button-background',
			pageData?.notfound_appearance_btnbgcolor
		);
		document.body.style.setProperty(
			'--text-color',
			pageData?.notfound_appearance_textcolor
		);
	}, [pageData]);

	return (
		<section className={styles.main}>
			<Container>
				<div className={styles.notFoundWrapper}>
					<Row>
						<Col sm={12} md={12} lg={6}>
							<div className={styles.animationWrap} ref={wrapperRef}>
								<Animations
									animWrapWidth={windowRect.animWrapWidth}
									animWrapHeight={windowRect.animWrapHeight}
								/>
								<div className={styles.particalsWrap}>
									<ParticlesBg type={'custom'} config={starConfig1} bg={true} />
									<ParticlesBg type={'custom'} config={starConfig2} bg={true} />
									<ParticlesBg
										type={'custom'}
										config={particleConfig1}
										bg={true}
									/>
									<ParticlesBg
										type={'custom'}
										config={particleConfig2}
										bg={true}
									/>
								</div>
							</div>
						</Col>
						<Col sm={12} md={12} lg={6}>
							<div className={styles.textWrapper}>
								<ImgFrame
									url={pageData.notfound_main_img}
									alt={pageData.notfound_main_alt}
									styles={styles.imgWrap}
								/>
								<div className={styles.content}>
									<span
										dangerouslySetInnerHTML={{
											__html: pageData.notfound_main_description,
										}}></span>
									<Button styles={styles.button} to={'/'}>
										{pageData.notfound_main_button.title}
									</Button>
								</div>
							</div>
						</Col>
					</Row>
				</div>
				<div
					className={styles.backgroundImg}
					style={{ backgroundImage: `url(${pageData.notfound_main_bgimg})` }}
				/>
			</Container>
		</section>
	);
};
