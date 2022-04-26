import styles from './TextSlider.module.scss';
import { useEffect, useRef } from 'react';
import { useMediaQuery } from '@hooks';

export const TextSlider = props => {
	const textLeftRef = useRef(null);
	const textRightRef = useRef(null);

	const isMobile = useMediaQuery('(max-width: 700px)');

	const onScrollSlider = () => {
		let textLeft = textLeftRef.current;
		let textRight = textRightRef.current;

		window.addEventListener('scroll', () => {
			let scrollPos = window.scrollY || window.pageYOffset;

			if (textLeft && textRight) {
				if (!isMobile) {
					textLeft.style.left = `${-scrollPos / 5}px`;
					textRight.style.left = `${scrollPos / 5}px`;
				} else {
					textLeft.style.left = `${-scrollPos / 15}px`;
					textRight.style.left = `${scrollPos / 15}px`;
				}
			}
		});
	};

	useEffect(() => {
		onScrollSlider();
	});

	return (
		<div className={props.sliderTrackStyle}>
			<span
				ref={textLeftRef}
				className={`${styles.main} ${props.leftSlideStyle}`}>
				{props.leftSlideText}
			</span>
			<span
				ref={textRightRef}
				className={`${styles.main} ${props.rightSlideStyle}`}>
				{props.rightSlideText}
			</span>
		</div>
	);
};
