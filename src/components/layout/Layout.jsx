import { useEffect, useState } from 'react';

import { Head, Header, Footer, Favicon, Badge } from '@components';
import { styleToString } from '@helpers';

export const Layout = ({ headerTheme, themeData, children, title, meta }) => {
	const [ogImage, setOgImage] = useState();

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

		setOgImage(themeData?.theme_metadata_ogimg);
	}, [themeData]);

	if (!themeData) return null;

	return (
		<>
			<Head
				data={meta}
				title={title}
				ogImagePath={ogImage}
				style={styleToString(headerTheme)}
			/>
			<Header themeData={themeData} />
			<Favicon themeData={themeData} />
			<Badge />
			{children}
			<Footer themeData={themeData} />
		</>
	);
};
