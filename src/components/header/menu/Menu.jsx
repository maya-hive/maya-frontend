import { forwardRef, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { gsap, Power2 } from 'gsap';
import { bool } from 'prop-types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './Menu.module.scss';
import { Button } from '@components';

export const Menu = forwardRef(({ themeData, isOpen }, ref) => {
	const listItemsRef = useRef();

	const isHidden = isOpen ? true : false;
	const tabIndex = isHidden ? 0 : -1;

	const pathName = usePathname();

	let activeStyle = {
		color: themeData?.theme_appearance_primary,
	};

	useEffect(() => {
		let listItemElems = listItemsRef.current;

		if (isOpen) {
			gsap.fromTo(
				listItemElems,
				{
					clipPath: 'inset(0px 0px 100%)',
					opacity: 0,
				},
				{
					clipPath: 'inset(0px 0px -100%)',
					opacity: 1,
					duration: 1,
					delay: 0.7,
					ease: Power2.easeInOut,
				}
			);
		} else {
			gsap.to(listItemElems, {
				clipPath: 'inset(0px 0px 0%)',
				opacity: 0,
				delay: 0.5,
				duration: 0.2,
				ease: Power2.easeInOut,
			});
		}
	}, [isOpen, listItemsRef]);

	return (
		<div className={`${styles.main} ${isOpen ? styles.active : ''}`}>
			<Container>
				{isOpen && (
					<ul aria-hidden={!isHidden} ref={listItemsRef}>
						{themeData.theme_navigation_pages.map((value, index) => (
							<li key={index}>
								<Link
									href={value.page.url}
									tabIndex={tabIndex}
									style={pathName === value.page.url ? activeStyle : null}>
									{value.page.title}
								</Link>
							</li>
						))}
						<Button
							to={themeData.theme_navigation_cta.url}
							styles={styles.button}>
							{themeData.theme_navigation_cta.name}
						</Button>
					</ul>
				)}
				<div ref={ref} className={styles.backdrop} />
			</Container>
		</div>
	);
});

Menu.propTypes = {
	isOpen: bool.isRequired,
};
