import { Expo } from 'gsap/all';

export const animation = (smDevice, tl, animTitlesRef) => {
	const animTitlesElems = animTitlesRef.current;
	if (smDevice) {
		tl.fromTo(
			animTitlesElems,
			{
				bottom: 100,
			},
			{
				bottom: -5,
				duration: 0.15,
				ease: Expo.easeInOut,
			}
		)
			.to(animTitlesElems, {
				bottom: -60,
				duration: 1,
				delay: 1,
				ease: Expo.easeInOut,
			})
			.to(animTitlesElems, {
				bottom: -120,
				duration: 1,
				delay: 1,
				ease: Expo.easeInOut,
			})
			.to(animTitlesElems, {
				bottom: -170,
				duration: 0.5,
				delay: 1,
				ease: Expo.easeInOut,
			});
	} else {
		tl.fromTo(
			animTitlesElems,
			{
				bottom: 100,
			},
			{
				bottom: -15,
				duration: 0.15,
				ease: Expo.easeInOut,
			}
		)
			.to(animTitlesElems, {
				bottom: -110,
				duration: 1,
				delay: 1,
				ease: Expo.easeInOut,
			})
			.to(animTitlesElems, {
				bottom: -195,
				duration: 1,
				delay: 1,
				ease: Expo.easeInOut,
			})
			.to(animTitlesElems, {
				bottom: -280,
				duration: 0.5,
				delay: 1,
				ease: Expo.easeInOut,
			});
	}
};
