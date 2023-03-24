import { fetchData, postData } from '@helpers';
import { about, theme } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(about);
	const { response: themeData } = await fetchData(theme);

	return { props: { pageData, themeData } };
};
