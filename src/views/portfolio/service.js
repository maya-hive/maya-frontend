import { fetchData, postData } from '@helpers';
import {
	ogImage,
	portfolio,
	projectCategories,
	projects,
	theme,
} from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(portfolio);
	const { response: themeData } = await fetchData(theme);
	const { response: projectsData } = await fetchData(projects);
	const { response: projectCategoriesData } = await fetchData(
		projectCategories
	);

	const ogImagePath = 'https://www.maya.lk/backend/wp-content/uploads/2022/11/og-image.jpg';

	return {
		props: {
			pageData,
			themeData,
			projectsData,
			projectCategoriesData,
			ogImagePath,
		},
	};
};
