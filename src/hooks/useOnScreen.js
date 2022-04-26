import { useState, useEffect } from 'react';

export const useOnScreen = trackedNode => {
	/**
	 * And object, because we want to store all the intersection object
	 * properties. We could just store the ratio, or a boolean value of its
	 * visibility.
	 */
	const [intersected, setIntersected] = useState({});

	const observer = new IntersectionObserver(([item]) => {
		/**
		 * item is a IntersectionObserverEntry interface.
		 * https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry
		 */
		if (item.isIntersecting) {
			setIntersected(item);
		}
	});

	useEffect(() => {
		const { current = null } = trackedNode;

		if (!current) return;

		observer.observe(current);

		return () => {
			observer.unobserve(current);
		};
	});

	return intersected;
};
