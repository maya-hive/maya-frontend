import { CustomCursor } from '@components';
import { CursorContextProvider } from '@contexts';

export const App = ({ Component, pageProps }) => (
	<CursorContextProvider>
		<CustomCursor />
		<Component {...pageProps} />
	</CursorContextProvider>
);
