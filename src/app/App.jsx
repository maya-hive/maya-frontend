import { CustomCursor, Header, Footer, ScrollRestore } from '@components';
import { CursorContextProvider, ThemeContextProvider } from '@contexts';

export const App = ({ Component, pageProps }) => {
	const { themeData } = pageProps;

	return (
		<>
			<ScrollRestore>
				<ThemeContextProvider themeData={themeData}>
					<CursorContextProvider>
						<CustomCursor />
						<Header />
						<Component {...pageProps} />
						<Footer />
					</CursorContextProvider>
				</ThemeContextProvider>
			</ScrollRestore>
		</>
	);
};
