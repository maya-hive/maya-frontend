import { fetchData, postData } from '@helpers';
import { careers, ogImage, theme } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(careers);
	const { response: themeData } = await fetchData(theme);

	const ogImagePath = 'https://www.maya.lk/backend/wp-content/uploads/2022/11/og-image.jpg';

	return { props: { pageData, themeData, ogImagePath } };
};
