import { fetchData } from '@helpers';
import { projects, projectSingle } from '@services';

export const getStaticProps = async ({ params: { slug } }) => {
	const { response: projectData } = await fetchData(projectSingle + slug);

	return { props: { projectData } };
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
