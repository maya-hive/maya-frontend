import { forwardRef, useEffect, useRef, useState } from 'react';
import { bool, func } from 'prop-types';
import { useRouter } from 'next/router';

import styles from './Burger.module.scss';

export const Burger = forwardRef(({ isOpen, setOpen, ...props }, ref) => {
	const [isActive, setIsActive] = useState(false);

	const localRef = useRef(null);

	const { pathname } = useRouter();

	const isExpanded = isOpen ? true : false;

	useEffect(() => setIsActive(false), [pathname]);

	return (
		<button
			ref={ref && localRef}
			aria-label={'Toggle menu'}
			aria-expanded={isExpanded}
			onClick={() => {
				setOpen(!isOpen);
				setIsActive(!isActive);
			}}
			className={`${styles.main} ${props.styles || ''} ${
				isActive ? styles.isOpen : null
			}`}>
			<span className={styles.menuBurger}></span>
			<span className={styles.menuExit}></span>
		</button>
	);
});

Burger.propTypes = {
	isOpen: bool.isRequired,
	setOpen: func.isRequired,
};
