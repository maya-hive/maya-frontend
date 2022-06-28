import Link from 'next/link';
import { forwardRef } from 'react';

import styles from './DefaultButton.module.scss';
import { useCursorHandlers } from '@hooks';

export const DefaultButton = forwardRef(
	(
		{
			styles: propStyles,
			children,
			secondary,
			to,
			href,
			target,
			onClick,
			name,
			style,
		},
		ref
	) => {
		const cursorHandlers = useCursorHandlers();

		return to ? (
			<Link href={to || '#'} passHref={true}>
				<button
					className={`${styles.main} ${propStyles || ''} ${
						secondary ? styles.secondary : styles.primary
					}`}
					ref={ref}
					name={name}
					style={style}
					onClick={onClick}
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
				name={name}
				style={style}
				target={target}
				onClick={onClick}
				{...cursorHandlers}>
				<span>{children}</span>
			</a>
		);
	}
);
