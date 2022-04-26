import { CustomCursor, Header, Footer, ScrollRestore } from '@components';
import { CursorContextProvider, ThemeContextProvider } from '@contexts';
//import '@styles/vendors/index.css';
import './App.module.scss';

export const App = ({ Component, pageProps }) => (
	<ScrollRestore>
		<ThemeContextProvider>
			<CursorContextProvider>
				<CustomCursor />
				<Header />
				<Component {...pageProps} />
				<Footer />
			</CursorContextProvider>
		</ThemeContextProvider>
	</ScrollRestore>
);
