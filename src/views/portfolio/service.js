import { fetchData } from '@helpers';
import {
	portfolio,
	projectCategories,
	projects,
	theme,
} from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(portfolio) || {};
	const { response: themeData } = await fetchData(theme) || {};
	const { response: projectsData } = await fetchData(projects) || {};
	const { response: projectCategoriesData } = await fetchData(projectCategories) || {};

	return {
		props: {
			pageData: pageData ?? null,
			themeData: themeData ?? null,
			projectsData: projectsData ?? null,
			projectCategoriesData: projectCategoriesData ?? null,
		},
	};
};
