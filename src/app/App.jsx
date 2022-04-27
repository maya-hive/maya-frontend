import { CustomCursor, Header, Footer, ScrollRestore } from '@components';
import { CursorContextProvider, ThemeContextProvider } from '@contexts';

export const App = ({ Component, pageProps }) => (
	<>
		<ScrollRestore>
			<ThemeContextProvider>
				<CursorContextProvider>
					<CustomCursor />
					<Header />
					<Component {...pageProps} />
				</CursorContextProvider>
			</ThemeContextProvider>
		</ScrollRestore>
	</>
);
