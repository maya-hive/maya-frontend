import { gsap, Power2, Power3, Power4 } from 'gsap/all';

export const animations = (
	isOpen,
	itemHeadlineRef,
	itemDescriptionRef,
	itemSkillsRef,
	itemImageRef
) => {
	const headlineElem = itemHeadlineRef.current;
	const descriptionElem = itemDescriptionRef.current;
	const skillsElem = itemSkillsRef.current;
	const imageElem = itemImageRef.current;

	if (isOpen) {
		gsap.to(imageElem, {
			clipPath: 'inset(0px 0px 0%)',
			top: '0px',
			opacity: 1,
			duration: 1,
			ease: Power2.easeInOut,
		});
		gsap.to(headlineElem, {
			clipPath: 'inset(0px 0px 0%)',
			top: '0px',
			opacity: 1,
			duration: 1,
			ease: Power2.easeInOut,
		});
		gsap.to(descriptionElem, {
			clipPath: 'inset(0px 0px 0%)',
			top: '0px',
			opacity: 1,
			duration: 1,
			delay: 0.5,
			ease: Power3.easeInOut,
		});
		gsap.to(skillsElem, {
			top: '0px',
			opacity: 1,
			duration: 0.8,
			delay: 1.2,
			ease: Power4.easeInOut,
		});
	} else {
		gsap.to(imageElem, {
			position: 'relative',
			clipPath: 'inset(0px 0px 100%)',
			opacity: 0,
			top: '50px',
		});
		gsap.to(headlineElem, {
			position: 'relative',
			clipPath: 'inset(0px 0px 100%)',
			opacity: 0,
			top: '50px',
		});
		gsap.to(descriptionElem, {
			position: 'relative',
			clipPath: 'inset(0px 0px 100%)',
			opacity: 0,
			top: '50px',
		});
		gsap.to(skillsElem, {
			position: 'relative',
			opacity: 0,
			top: '30px',
		});
	}
};
