import { fetchData, postData } from '@helpers';
import { about, ogImage, theme } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(about);
	const { response: themeData } = await fetchData(theme);

	const {
		response: {
			data: { path: ogImagePath },
		},
	} = await postData(ogImage, pageData.meta.title);

	return { props: { pageData, themeData, ogImagePath } };
};
