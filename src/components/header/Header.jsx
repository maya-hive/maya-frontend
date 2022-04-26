import styles from './Header.module.scss';
import { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { ThemeContext } from '@contexts';
import { useScrollBlock } from '@hooks';
import { Nav } from './index';
import { useLocation } from 'react-router-dom';

export const Header = () => {
	const themeData = useContext(ThemeContext);

	const [isOpen, setOpen] = useState(false);

	const [blockScroll, allowScroll] = useScrollBlock();

	const { pathname } = useLocation();

	useEffect(
		() => (isOpen ? blockScroll() : allowScroll()),
		[allowScroll, blockScroll, isOpen]
	);

	useEffect(() => setOpen(false), [pathname]);

	return (
		<header className={`${styles.main} header`}>
			<Container className={styles.container}>
				<Nav themeData={themeData} isOpen={isOpen} setOpen={setOpen} />
			</Container>
		</header>
	);
};
