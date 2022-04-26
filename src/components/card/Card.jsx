import { Col } from 'react-bootstrap';
import { forwardRef } from 'react';

import styles from './Card.module.scss';
import { Button, ImgFrame } from '@components';

export const Card = forwardRef(
	(
		{
			img,
			body,
			bgImg,
			onClick,
			headline,
			subtitle,
			cardStyle,
			bgImgStyle,
			buttonValue,
		},
		ref
	) => (
		<Col md={6} lg={6} xl={3} className={'my-1 p-1'}>
			<main ref={ref} className={`${styles.main} ${cardStyle}`}>
				<div className={styles.contentWrapper}>
					<div className={styles.iconImgContainer}>
						<ImgFrame url={img} alt={headline} styles={styles.icon} />
					</div>
					<h3 className={styles.headline}>{headline}</h3>
					<h4 className={styles.subtitle}>{subtitle}</h4>
					<p className={styles.body}>{body}</p>
					<Button
						name={headline.replace(/\s/g, '')}
						className={styles.button}
						onClick={onClick}>
						{buttonValue}
					</Button>
				</div>
				<ImgFrame
					url={bgImg}
					alt={headline}
					styles={`${styles.bgImg} ${bgImgStyle}`}
				/>
			</main>
		</Col>
	)
);
