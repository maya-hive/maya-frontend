import { gsap, Power2, Power4 } from 'gsap/all';

export const animationStudyItem = (itemRef, itemContentRef) => {
	const itemElem = itemRef.current;
	const itemContentElem = itemContentRef.current;

	gsap.fromTo(
		itemElem,
		{
			opacity: 0,
		},
		{
			opacity: 1,
			duration: 0.2,
			ease: Power4.easeInOut,
		}
	);

	gsap.fromTo(
		itemContentElem,
		{
			bottom: '50px',
			opacity: 0,
		},
		{
			bottom: '30px',
			opacity: 1,
			duration: 0.6,
			delay: 0.2,
			ease: Power2.easeInOut,
		}
	);
};
