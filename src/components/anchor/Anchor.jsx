import { forwardRef } from 'react';
import Link from 'next/link';

import styles from './Anchor.module.scss';
import { useCursorHandlers } from '@hooks';

export const Anchor = forwardRef(
	(
		{
			to,
			href,
			target,
			children,
			className,
			style: customStyles,
			onClick: event,
		},
		ref
	) => {
		const cursorHandlers = useCursorHandlers();

		return to ? (
			<Link href={to} passHref={true} onClick={event}>
				<div
					ref={ref}
					style={customStyles}
					{...cursorHandlers}
					className={`${styles.main} ${className || ''}`}>
					{children}
				</div>
			</Link>
		) : (
			<a
				href={href}
				target={target}
				className={`${styles.main} ${className || ''}`}
				onClick={event}
				style={customStyles}
				{...cursorHandlers}
				ref={ref}>
				{children}
			</a>
		);
	}
);
