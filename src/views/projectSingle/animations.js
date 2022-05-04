import { gsap, Expo, Power2 } from 'gsap/all';

export const animations = (
	active,
	mdDevice,
	videoRef,
	headWrapRef,
	contentRef
) => {
	const videoElem = videoRef.current;
	const contentElem = contentRef.current;
	const headWrapElem = headWrapRef.current;
	const headerElem = document.querySelector('.header');

	if (active) {
		gsap.to(videoElem, {
			opacity: '1',
			height: mdDevice ? '780px' : '750px',
			top: '0',
			delay: 1.0,
			duration: 1.8,
			ease: Expo.easeInOut,
		});
		gsap.to(contentElem, {
			marginTop: mdDevice ? '100px' : '140px',
			delay: 0.8,
			duration: 1.8,
			ease: Power2.easeInOut,
		});
		gsap.to(headWrapElem, {
			opacity: '0',
			delay: '2',
			duration: 1.4,
			ease: Expo.easeInOut,
		});
		gsap.to('.header', {
			color: 'white',
			background:
				'linear-gradient(180deg, rgba(0,0,0,1) 10%, rgba(255,255,255,0) 100%)',
			duration: 1.4,
		});
	} else {
		gsap.to(contentElem, {
			marginTop: '0',
			delay: '0.3',
			duration: 2.4,
			ease: Expo.easeInOut,
		});
		gsap.to(videoElem, {
			top: '100px',
			height: '600px',
			opacity: '0',
			duration: 1.5,
			ease: Expo.easeInOut,
		});
		gsap.to(headWrapElem, {
			opacity: '1',
			delay: 0.5,
			duration: 1.8,
			ease: Expo.easeInOut,
		});

		headerElem.style.removeProperty('background');
		headerElem.style.removeProperty('color');
	}
};
