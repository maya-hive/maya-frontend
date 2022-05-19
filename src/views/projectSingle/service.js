import { fetchData, postData } from '@helpers';
import { ogImage, projects, projectSingle, theme } from '@services';

export const getStaticProps = async ({ params: { slug } }) => {
	const { response: projectData } = await fetchData(projectSingle + slug);
	const { response: themeData } = await fetchData(theme);

	const {
		response: {
			data: { path: ogImagePath },
		},
	} = await postData(ogImage, projectData.title);

	return { props: { projectData, themeData, ogImagePath } };
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
