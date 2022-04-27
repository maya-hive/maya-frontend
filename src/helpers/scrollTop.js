export const scrollTop = () => {
	if (typeof window === 'undefined') return;

	const c = document.documentElement.scrollTop || document.body.scrollTop;

	const triggerScroll = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	if (c > 0) {
		window.requestAnimationFrame(triggerScroll);
		window.scrollTo(0, c - c / 8);
	}
};
