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
		<Link href={href || ''} passHref={true}>
			<div {...cursorHandlers} style={style}>
				{children}
			</div>
		</Link>
	);
};
