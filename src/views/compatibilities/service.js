import { fetchData } from '@helpers';
import { compatibilities, theme } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(compatibilities) || {};
	const { response: themeData } = await fetchData(theme) || {};

	return { props: { pageData: pageData ?? null, themeData: themeData ?? null } };
};
