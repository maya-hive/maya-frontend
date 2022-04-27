import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { scrollTop } from '@helpers';

export const ScrollRestore = ({ children }) => {
	const { pathname } = useRouter();

	useEffect(() => scrollTop(), [pathname]);

	return children;
};
