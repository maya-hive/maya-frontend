import { useEffect, useRef } from 'react';
import { gsap, Expo } from 'gsap';

import styles from './Nav.module.scss';
import { Anchor, Button, NavLink, ImgFrame } from '@components';
import { useCursorHandlers, useMediaQuery } from '@hooks';
import { Burger, Menu } from './index';

export const Nav = ({ themeData, isOpen, setOpen }) => {
	const buttonRef = useRef(null);
	const backdropRef = useRef(null);

	const mdDevice = useMediaQuery('(max-width: 1200px)');
	const smDevice = useMediaQuery('(max-width: 576px)');

	const cursorHandlers = useCursorHandlers();

	useEffect(() => {
		const currentBackdrop = backdropRef.current;

		if (isOpen) {
			gsap.to(currentBackdrop, {
				top: '0vh',
				height: '100%',
				duration: 1.2,
				ease: Expo.easeInOut,
			});
		} else {
			gsap.to(currentBackdrop, {
				top: '-100vh',
				height: '0%',
				delay: 0.4,
				duration: 1.2,
				ease: Expo.easeOut,
			});
		}
	}, [isOpen, backdropRef]);

	return (
		<nav className={styles.main}>
			<div className={styles.navBarInnerWrapper}>
				<Anchor to={'/'}>
					<ImgFrame
						url={themeData.theme_header_logo}
						alt={themeData.theme_metadata_sitename}
						styles={styles.logoWrapper}
						loading={'eager'}
					/>
				</Anchor>
				{!mdDevice && (
					<ul className={styles.navItems}>
						{themeData.theme_navigation_pages &&
							themeData.theme_navigation_pages.map(
								({ page: { url, title } }, index) => (
									<NavLink
										href={url}
										key={index}
										activeStyle={themeData?.theme_appearance_primary}
										{...cursorHandlers}>
										{title}
									</NavLink>
								)
							)}
					</ul>
				)}
				<div className={styles.buttonWrap}>
					{!smDevice && (
						<div className={styles.cta}>
							<Button
								styles={styles.button}
								to={themeData.theme_navigation_cta?.url}>
								{themeData.theme_navigation_cta?.name}
							</Button>
						</div>
					)}
					{mdDevice && (
						<>
							<Burger
								ref={buttonRef}
								isOpen={isOpen}
								setOpen={setOpen}
								styles={styles.hamburger}
							/>
							<Menu ref={backdropRef} themeData={themeData} isOpen={isOpen} />
						</>
					)}
				</div>
			</div>
		</nav>
	);
};
