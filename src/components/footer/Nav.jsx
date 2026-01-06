import styles from './Nav.module.scss';
import { useEffect, useRef, useState } from 'react';
import { Anchor, Button, ImgFrame } from '@components';
import { scrollTop } from '@helpers';
import { useCursorHandlers } from '@hooks';

export const NavFooter = ({ themeData }) => {
	const imgRef = useRef(null);
	const [isActive, setActive] = useState(false);
	const cursorHandlers = useCursorHandlers();

	useEffect(() => {
		if (isActive) {
			setTimeout(() => {
				setActive(prevState => !prevState);
			}, 1000);
		}
	}, [isActive]);

	return (
		<nav className={styles.main}>
			<div className={styles.topWrapper}>
				<div className={styles.wrapperInner}>
					<ul className={styles.links}>
						<h3>{themeData.theme_footer_sitemap}</h3>
						{themeData?.theme_navigation_pages && themeData?.theme_navigation_pages.map(
							({ page: { url, title } }, index) => (
								<li key={index}>
									<Anchor to={url}>{title}</Anchor>
								</li>
							)
						)}
						{themeData?.theme_footer_pages && themeData?.theme_footer_pages.map(
							({ page: { url, title, target } }, index) => (
								<li key={index}>
									<Anchor href={url} target={target}>
										{title}
									</Anchor>
								</li>
							)
						)}
					</ul>
					<div className={styles.animationController}>
						<div
							className={styles.imgWrapper}
							{...cursorHandlers}
							style={isActive ? { position: 'fixed', top: '-100%' } : null}>
							<div ref={imgRef} className={styles.imgWrapperInner}>
								<ImgFrame
									url={themeData?.theme_footer_img}
									alt={themeData?.theme_footer_sitemap}
									onClick={() => {
										scrollTop();
										setActive(currentState => !currentState);
									}}
								/>
								<ImgFrame
									url={themeData?.theme_footer_hover}
									alt={themeData?.theme_footer_sitemap}
									styles={styles.speechBubble}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{themeData?.theme_general_socials && (
				<ul className={styles.socials}>
					{themeData?.theme_general_socials.map(({ name, icon, url }, index) => (
						<li key={index}>
							<Button
								href={url}
								title={name}
								round={'true'}
								target={'_blank'}
								styles={styles.button}>
								<span
									dangerouslySetInnerHTML={{
										__html: icon,
									}}
								/>
							</Button>
						</li>
					))}
				</ul>
			)}
		</nav>
	);
};
