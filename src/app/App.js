import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { CustomCursor, Header, Footer, ScrollRestore } from '@components';
import { CursorContextProvider, ThemeContextProvider } from '@contexts';
import { Router } from '@router';
import '@styles/vendors/index.css';
import './App.module.scss';

export const App = () => (
	<BrowserRouter>
		<ScrollRestore>
			<ThemeContextProvider>
				<Suspense fallback={null}>
					<CursorContextProvider>
						<CustomCursor />
						<Header />
						<Router />
						<Footer />
					</CursorContextProvider>
				</Suspense>
			</ThemeContextProvider>
		</ScrollRestore>
	</BrowserRouter>
);
