import { fetchData } from '@helpers';
import {
	projects,
	projectSingle,
	projectTechnologies,
	theme,
} from '@services';

export const getStaticProps = async ({ params: { slug } }) => {
	const { response: projectData } = await fetchData(projectSingle + slug);
	const { response: projectsTechnologiesData } = await fetchData(
		projectTechnologies
	);
	const { response: themeData } = await fetchData(theme);

	return {
		props: { projectData, projectsTechnologiesData, themeData },
	};
};

export const getStaticPaths = async () => {
	const { response: projectsData } = await fetchData(projects);

	return {
		paths: projectsData.data.map(({ slug }) => ({
			params: {
				slug: slug,
			},
		})),
		fallback: false,
	};
};
