import styles from './TextSpinner.module.scss';
import { Anchor } from '@components';

export const TextSpinner = ({
	to,
	href,
	onClick,
	secondary,
	children,
	styles: propStyles,
}) => (
	<Anchor
		className={`${styles.main} ${propStyles}`}
		href={href || undefined}
		to={to || undefined}
		onClick={onClick}>
		<svg viewBox="0 0 500 500">
			<defs>
				<path
					id={'textcircle'}
					d={'M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z'}
				/>
			</defs>
			<text className={secondary ? styles.secondary : styles.primary}>
				<textPath href={'#textcircle'} aria-label={children} textLength={'900'}>
					{children}
				</textPath>
			</text>
		</svg>
	</Anchor>
);
