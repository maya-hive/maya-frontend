import { useRouter } from 'next/router';
import Link from 'next/link';

import { useCursorHandlers } from '@hooks';

export const NavLink = ({ children, href, activeStyle }) => {
	const { asPath } = useRouter();
	const cursorHandlers = useCursorHandlers();

	const style = {
		color: asPath === href + '/' || asPath === href ? activeStyle : null,
	};

	return (
		<Link href={href || ''} passHref={true} legacyBehavior={true}>
			<a {...cursorHandlers} style={style}>
				{children}
			</a>
		</Link>
	);
};
