import { CustomCursor, Layout } from '@components';
import { CursorContextProvider, ThemeContextProvider } from '@contexts';
import { clients, projects, testimonials, theme } from '@services';
import { fetchData } from '@helpers';
import Head from 'next/head';

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
			<Head>
				{/* eslint-disable-next-line @next/next/no-page-custom-font */}
				<link
					href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
					rel="stylesheet"
				/>
				{/* eslint-disable-next-line @next/next/no-page-custom-font */}
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
			</Head>
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
