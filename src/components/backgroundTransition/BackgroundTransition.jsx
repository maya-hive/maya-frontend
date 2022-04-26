import { useEffect, useRef, useState } from 'react';
import styles from './BackgroundTransition.module.scss';
import { gsap, ScrollTrigger } from 'gsap/all';

export const BackgroundTransition = props => {
	const triggerRef = useRef(null);
	const backgroundRef = useRef(null);

	const backgroundColor = '#0d0d0d';

	const [isActive, setActive] = useState(false);
	const [isMounted, setIsMounted] = useState(true);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const triggerElem = triggerRef.current;
		const backgroundElem = backgroundRef.current;

		ScrollTrigger.create({
			trigger: triggerElem,
			start: props.trigger ? props.trigger : 'top center',
			endTrigger: triggerElem,
			end: '+=99999px',
			onToggle: self => isMounted && setActive(self.isActive),
		});

		isActive
			? (backgroundElem.style.backgroundColor = backgroundColor)
			: (backgroundElem.style.backgroundColor = null);

		return () => setIsMounted(false);
	}, [isActive, backgroundRef, props.trigger, isMounted]);

	useEffect(() => {
		const cursor = document.querySelector('.cursorInner');

		if (!cursor) return;

		if (isActive) {
			cursor.style.border = '1px solid white';
			cursor.style.backgroundColor = 'white';
		} else {
			cursor.style.border = '1px solid black';
			cursor.style.backgroundColor = 'black';
		}
	}, [isActive]);

	return (
		<div ref={triggerRef} className={styles.main}>
			<div className={isActive ? styles.isActive : styles.notActive}>
				{props.children}
			</div>
			<div ref={backgroundRef} className={styles.background}></div>
		</div>
	);
};
