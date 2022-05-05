import { fetchData } from '@helpers';
import { portfolio, projectCategories } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(portfolio);
	const { response: projectCategoriesData } = await fetchData(
		projectCategories
	);

	return { props: { pageData, projectCategoriesData } };
};
