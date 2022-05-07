import { fetchData } from '@helpers';
import { clients, home, projects, testimonials, theme } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(home);
	const { response: themeData } = await fetchData(theme);
	const { response: clientsData } = await fetchData(clients);
	const { response: projectsData } = await fetchData(projects);
	const { response: testimonialsData } = await fetchData(testimonials);

	return {
		props: { pageData, themeData, clientsData, projectsData, testimonialsData },
	};
};
