import { fetchData, postData } from '@helpers';
import { compatibilities, ogImage, theme } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(compatibilities);
	const { response: themeData } = await fetchData(theme);

	const ogImagePath = process.env.NEXT_OG_IMAGE;

	return { props: { pageData, themeData, ogImagePath } };
};
