import { gsap, Expo, Power2 } from 'gsap/all';

export const animations = (inView, titleRef, mediaRef) => {
	const titleELem = titleRef.current;
	const mediaElem = mediaRef.current;

	if (!inView) {
		gsap.to(titleELem, {
			left: '50px',
			duration: 1.2,
			ease: Expo.easeInOut,
		});
		gsap.to(mediaElem, {
			left: '20px',
			delay: 1,
			duration: 2,
			ease: Expo.easeInOut,
		});
	} else {
		gsap.fromTo(
			titleELem,
			{
				left: '0px',
			},
			{
				left: '-60px',
				duration: 1.2,
				ease: Power2.easeInOut,
			}
		);
		gsap.to(mediaElem, {
			left: '0',
			duration: 1.8,
			delay: 0.5,
			ease: Expo.easeOut,
		});
	}
};
