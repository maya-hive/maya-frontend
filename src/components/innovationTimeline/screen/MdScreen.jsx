import { gsap, ScrollTrigger, Power3 } from 'gsap/all';
import { useEffect } from 'react';

import styles from './MdScreen.module.scss';

export const MdScreen = ({
	index,
	imagePosition,
	timestampLogoArr,
	timestampLogoStripeArr,
	containerRef,
	year,
	items,
	logo,
}) => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline({ paused: true });

		const containerElem = containerRef.current;
		const timestampLogoElems = timestampLogoArr.current;
		const timestampLogoStripeElems = timestampLogoStripeArr.current;

		tl.fromTo(
			timestampLogoStripeElems,
			{
				width: 0,
				opacity: 0,
			},
			{
				width: '75px',
				opacity: 1,
				stagger: 0.2,
				duration: 0.25,
				ease: Power3.easeInOut,
			}
		);

		tl.fromTo(
			timestampLogoElems,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				stagger: 0.2,
				duration: 0.25,
				ease: Power3.easeInOut,
			}
		);

		ScrollTrigger.create({
			trigger: containerElem,
			animation: tl,
			start: '+=300px center',
			end: 'bottom bottom',
		});

		return () => tl.kill();
	}, [containerRef, timestampLogoArr, timestampLogoStripeArr]);

	return (
		<div
			key={index}
			className={styles.circleWrap}
			style={{
				marginLeft: imagePosition ? '68%' : '0%',
				marginTop: '50px',
			}}>
			<span
				className={`${styles.stripe} ${
					imagePosition ? styles.logoStripeUp : styles.logoStripeDown
				}`}
				ref={element => timestampLogoStripeArr.current.push(element)}>
				<i
					className={`${styles.arrow} ${
						imagePosition ? styles.up : styles.down
					}`}
				/>
			</span>
			<img
				src={logo}
				alt={year}
				className={styles.logo}
				style={{
					marginLeft: imagePosition ? '-350px' : '350px',
					marginTop: imagePosition && '30px',
				}}
				ref={element => timestampLogoArr.current.push(element)}
			/>
			<span className={styles.inner}>{year}</span>
			<span
				className={`${index + 1 < items.length && styles.stripe} ${
					imagePosition ? styles.circleStripeDown : styles.circleStripeUp
				}`}
			/>
		</div>
	);
};
