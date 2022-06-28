import { useEffect } from 'react';

import { Head, Header, Footer, Favicon } from '@components';
import { styleToString } from '@helpers';

export const Layout = ({
	headerTheme,
	ogImagePath,
	themeData,
	children,
	title,
	meta,
}) => {
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
			<Head
				data={meta}
				title={title}
				ogImagePath={ogImagePath}
				style={styleToString(headerTheme)}
			/>
			<Header themeData={themeData} />
			<Favicon themeData={themeData} />
			{children}
			<Footer themeData={themeData} />
		</>
	);
};
