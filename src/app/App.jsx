import { CustomCursor, Layout } from '@components';
import { CursorContextProvider, ThemeContextProvider } from '@contexts';
import { clients, projects, testimonials, theme } from '@services';
import { fetchData } from '@helpers';

export const App = ({
	Component,
	pageProps,
	themeData,
	clientsData,
	projectsData,
	testimonialsData,
}) => (
	<ThemeContextProvider themeData={themeData}>
		<CursorContextProvider>
			<CustomCursor />
			<Layout>
				<Component
					{...pageProps}
					themeData={themeData}
					clientsData={clientsData}
					projectsData={projectsData}
					testimonialsData={testimonialsData}
				/>
			</Layout>
		</CursorContextProvider>
	</ThemeContextProvider>
);

App.getInitialProps = async () => {
	const { response: themeData } = await fetchData(theme);
	const { response: clientsData } = await fetchData(clients);
	const { response: projectsData } = await fetchData(projects);
	const { response: testimonialsData } = await fetchData(testimonials);

	return { themeData, clientsData, projectsData, testimonialsData };
};
