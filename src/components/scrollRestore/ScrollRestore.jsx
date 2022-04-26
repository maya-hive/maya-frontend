import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { scrollTop } from '@helpers';

export const ScrollRestore = ({ children }) => {
	const { pathname } = useLocation();

	useLayoutEffect(() => scrollTop(), [pathname]);

	return children;
};
