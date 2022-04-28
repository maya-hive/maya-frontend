import { useRouter } from 'next/router';

export const NavLink = ({ children, href, activeStyle }) => {
	const router = useRouter();

	const style = {
		color: router.asPath === href ? activeStyle : null,
	};

	const handleClick = e => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<a href={href} onClick={handleClick} style={style}>
			{children}
		</a>
	);
};
