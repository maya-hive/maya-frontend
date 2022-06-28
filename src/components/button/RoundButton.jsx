import { forwardRef } from 'react';
import Link from 'next/link';

import styles from './RoundButton.module.scss';
import { useCursorHandlers } from '@hooks';

export const RoundButton = forwardRef(
	({ styles: propStyles, children, secondary, to, href, target }, ref) => {
		const cursorHandlers = useCursorHandlers();

		return to ? (
			<Link href={to || ''} passHref={true}>
				<button
					className={`${styles.main} ${propStyles || ''} ${
						secondary ? styles.secondary : styles.primary
					}`}
					ref={ref}
					{...cursorHandlers}>
					<span>{children}</span>
				</button>
			</Link>
		) : (
			<a
				className={`${styles.main} ${propStyles || ''} ${
					secondary ? styles.secondary : styles.primary
				}`}
				ref={ref}
				href={href}
				target={target}
				{...cursorHandlers}>
				<span>{children}</span>
			</a>
		);
	}
);
