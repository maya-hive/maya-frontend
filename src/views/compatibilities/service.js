import { fetchData, postData } from '@helpers';
import { compatibilities, ogImage, theme } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(compatibilities);
	const { response: themeData } = await fetchData(theme);

	const {
		response: {
			data: { path: ogImagePath },
		},
	} = await postData(ogImage, pageData.meta.title);

	return { props: { pageData, themeData, ogImagePath } };
};
