import Ticker from 'react-fast-marquee';

import styles from './Marquee.module.scss';
import { Headline } from '@components';
import { useCursorHandlers } from '@hooks';

export const Marquee = ({ children }) => (
	<Ticker gradientColor={[13, 13, 13]}>
		<span className={styles.main} {...useCursorHandlers}>
			<Headline>{children}</Headline>
		</span>
	</Ticker>
);
