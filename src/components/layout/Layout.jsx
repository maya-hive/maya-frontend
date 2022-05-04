import { Header, Footer } from '@components';

export const Layout = ({ children }) => (
	<>
		<Header />
		{children}
		<Footer />
	</>
);
