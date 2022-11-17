import { fetchData, postData } from '@helpers';
import { contact, ogImage, theme } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(contact);
	const { response: themeData } = await fetchData(theme);

	const ogImagePath = process.env.NEXT_OG_IMAGE;

	return { props: { pageData, themeData, ogImagePath } };
};
