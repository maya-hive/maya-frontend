import { fetchData } from '@helpers';
import { projects } from '@services';

export const getStaticProps = async ({ params: { slug } }) => {
	const { response: projectData } = await fetchData(
		`https://mayadev.xyz/maya-site/backend/wp-json/api/v1/project?slug=${slug}`
	);

	return { props: { projectData } };
};

export const getStaticPaths = async () => {
	const { response: projectsData } = await fetchData(projects);

	return {
		paths: projectsData.data.map(({ slug }) => {
			return {
				params: {
					slug: slug,
				},
			};
		}),
		fallback: true,
	};
};
