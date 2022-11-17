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

	const ogImagePath = process.env.NEXT_OG_IMAGE;

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
