import { Header, Footer } from '@components';
import { Favicon } from 'components/favicon';
import { useEffect } from 'react';

export const Layout = ({ children, themeData }) => {
	useEffect(() => {
		document.body.style.setProperty(
			'--primary-color',
			themeData?.theme_appearance_primary
		);
		document.body.style.setProperty(
			'--on-primary-color',
			themeData?.theme_appearance_on_primary
		);
		document.body.style.setProperty(
			'--secondary-color',
			themeData?.theme_appearance_secondary
		);
		document.body.style.setProperty(
			'--on-secondary-color',
			themeData?.theme_appearance_on_secondary
		);
		document.body.style.setProperty(
			'--body-color',
			themeData?.theme_appearance_body
		);
	}, [themeData]);

	if (!themeData) return null;

	return (
		<>
			<Header themeData={themeData} />
			<Favicon themeData={themeData} />
			{children}
			<Footer themeData={themeData} />
		</>
	);
};
