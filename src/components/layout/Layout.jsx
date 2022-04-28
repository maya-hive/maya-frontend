import { Header, Footer } from '@components';

export const Layout = ({ children }) => (
	<>
		<Header />
		<main>{children}</main>
		<Footer />
	</>
);
