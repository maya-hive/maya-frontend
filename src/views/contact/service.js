import { fetchData } from '@helpers';
import { contact, theme } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(contact);
	const { response: themeData } = await fetchData(theme);

	return { props: { pageData, themeData } };
};
