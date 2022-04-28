import { useSpring, animated } from 'react-spring';

import clouds from './assets/clouds.png';
import spaceGuy from './assets/space-guy.png';
import speechBubble from './assets/speech-bubble.png';

import styles from './Animations.module.scss';

export const Animations = propties => {
	const [props, set] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 10, tension: 500, friction: 140 },
	}));

	const calc = (x, y) => [
		x - propties.animWrapWidth / 2,
		y - propties.animWrapHeight / 2,
	];

	const trans1 = (x, y) => `translate3d(${x / 8}px,${y / 8 - 50}px, 0)`;
	const trans2 = (x, y) => `translate3d(${x / 8 + 550}px,${y / 8 - 20}px, 0)`;
	const trans3 = (x, y) => `translate3d(${x / 6 - 50}px,${y / 6 + 50}px, 0)`;

	return (
		<div
			className={styles.animationWrapper}
			onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
			<animated.div
				className={styles.card1}
				style={{
					transform: props.xy.to(trans1),
					backgroundImage: `url(${clouds.src})`,
				}}
			/>
			<animated.div
				className={styles.card2}
				style={{
					transform: props.xy.to(trans2),
					backgroundImage: `url(${speechBubble.src})`,
				}}
			/>
			<animated.div
				className={styles.card3}
				style={{
					transform: props.xy.to(trans3),
					backgroundImage: `url(${spaceGuy.src})`,
				}}
			/>
		</div>
	);
};
