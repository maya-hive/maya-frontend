import Ticker from 'react-ticker';

import styles from './Marquee.module.scss';
import { Headline } from '@components';

export const Marquee = ({ children }) => (
	<Ticker>
		{() => (
			<span className={styles.main}>
				<Headline>{children}</Headline>
			</span>
		)}
	</Ticker>
);
