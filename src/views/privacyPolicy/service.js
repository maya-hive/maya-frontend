import { fetchData } from '@helpers';
import { privacyPolicy, theme } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(privacyPolicy);
	const { response: themeData } = await fetchData(theme);

	return { props: { pageData, themeData } };
};
