import { fetchData } from '@helpers';
import { careers, theme } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(careers);
	const { response: themeData } = await fetchData(theme);

	return { props: { pageData, themeData } };
};
