import { fetchData } from '@helpers';
import {
	caseStudyData,
	caseStudySingle,
	theme,
} from '@services';

export const getStaticProps = async ({ params: { slug } }) => {
	const caseStudyResult = await fetchData(caseStudySingle + slug);
	const themeResult = await fetchData(theme);

	// Check for errors
	if (caseStudyResult?.error || !caseStudyResult?.response) {
		return {
			notFound: true,
		};
	}

	const { response: caseStudies } = caseStudyResult;
	const { response: themeData } = themeResult || {};

	return {
		props: { caseStudies, themeData },
	};
};

export const getStaticPaths = async () => {
	const caseStudiesResult = await fetchData(caseStudyData);

	// Check for errors or missing data
	if (caseStudiesResult?.error || !caseStudiesResult?.response?.data) {
		return {
			paths: [],
			fallback: 'blocking',
		};
	}

	const { response: caseStudiesData } = caseStudiesResult;

	return {
		paths: caseStudiesData.data.map(({ slug }) => ({
			params: {
				slug: slug,
			},
		})),
		fallback: 'blocking',
	};
};
