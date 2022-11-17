import { fetchData, postData } from '@helpers';
import {
	clients,
	home,
	ogImage,
	projects,
	testimonials,
	theme,
} from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(home);
	const { response: themeData } = await fetchData(theme);
	const { response: clientsData } = await fetchData(clients);
	const { response: projectsData } = await fetchData(projects);
	const { response: testimonialsData } = await fetchData(testimonials);

	const ogImagePath = process.env.NEXT_OG_IMAGE;

		return {
		props: {
			pageData,
			themeData,
			clientsData,
			projectsData,
			testimonialsData,
			ogImagePath,
		},
	};
};
