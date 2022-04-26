import styles from './Anchor.module.scss';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
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
			<Link
				to={to}
				className={`${styles.main} ${className || ''}`}
				onClick={event}
				style={customStyles}
				{...cursorHandlers}
				ref={ref}>
				{children}
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
