import { fetchData } from '@helpers';
import {
	caseStudies,
	theme,
	caseStudyData
} from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(caseStudies);
	const { response: themeData } = await fetchData(theme);
	const { response: caseStudiesData } = await fetchData(caseStudyData);

	return {
		props: {
			pageData,
			themeData,
			caseStudiesData,
		},
	};
};
