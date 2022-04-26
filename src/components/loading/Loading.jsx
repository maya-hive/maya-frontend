import styles from './Loading.module.scss';
import logo from './assets/logo.png';
import { useScrollBlock } from '@hooks';
import { useEffect } from 'react';

export const Loading = () => {
	const [blockScroll, allowScroll] = useScrollBlock();

	useEffect(() => {
		blockScroll();
		return () => allowScroll();
	}, [allowScroll, blockScroll]);

	return (
		<section className={styles.main}>
			<div className={styles.animWrap}>
				<img className={styles.logoWrap} src={logo} alt={'loading'} />
			</div>
		</section>
	);
};
