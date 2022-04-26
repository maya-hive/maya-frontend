import { Marquee } from '@components';
import styles from './HomeMarquee.module.scss';

export const HomeMarquee = ({ pageData }) => (
	<section className={styles.main}>
		<Marquee>{pageData.home_marquee_content}</Marquee>
	</section>
);
