import { fetchData, postData } from '@helpers';
import {
	ogImage,
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

	const ogImagePath = 'https://www.maya.lk/backend/wp-content/uploads/2022/11/og-image.jpg';

	return {
		props: { projectData, projectsTechnologiesData, themeData, ogImagePath },
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
