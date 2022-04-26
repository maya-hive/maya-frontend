import { useCursorHandlers } from '@hooks';
import styles from './Submit.module.scss';

export const Submit = ({ children, className, isLoading, onClick, name }) => {
	const cursorHandlers = useCursorHandlers();

	return (
		<button
			name={name}
			onClick={onClick}
			submit={'true'}
			className={`${styles.main} ${className || ''}`}
			disabled={isLoading ? true : false}
			{...cursorHandlers}>
			{isLoading ? 'starting ignition ' : children}
		</button>
	);
};
