import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/router';

import styles from './Header.module.scss';
import { useScrollBlock } from '@hooks';
import { Nav } from './index';

export const Header = ({ themeData }) => {
	const [isOpen, setOpen] = useState(false);

	const [locked, setLocked] = useScrollBlock();

	const { pathname } = useRouter();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => (isOpen ? setLocked(locked) : setLocked(!locked)), [isOpen]);

	useEffect(() => setOpen(false), [pathname]);

	return (
		<header className={`${styles.main} header`}>
			<Container className={styles.container}>
				<Nav themeData={themeData} isOpen={isOpen} setOpen={setOpen} />
			</Container>
		</header>
	);
};
