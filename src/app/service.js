import { fetchData } from '@helpers';
import { clients, projects, testimonials, theme } from '@services';

export const getStaticProps = async () => {
	const { response: themeData } = await fetchData(theme);
	const { response: clientsData } = await fetchData(clients);
	const { response: projectsData } = await fetchData(projects);
	const { response: testimonialsData } = await fetchData(testimonials);

	return {
		props: { themeData, clientsData, projectsData, testimonialsData },
	};
};
