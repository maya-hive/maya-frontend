import { fetchData } from '@helpers';
import { notfound, theme } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = (await fetchData(notfound)) || {};
	const { response: themeData } = (await fetchData(theme)) || {};

	return {
		props: {
			pageData: pageData || null,
			themeData: themeData || null
		}
	};
};
