import { createContext, useEffect } from 'react';

import { Favicon } from '@components';
import { theme } from '@services';
import { fetchData } from '@helpers';

export const ThemeContext = createContext('');

export const ThemeContextProvider = props => {
	const themeData = async () => {
		let request = await fetch(theme);
		let response = await request.json();

		return response;
	};

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
		<ThemeContext.Provider value={themeData}>
			<Favicon themeData={themeData} />
			{props.children}
		</ThemeContext.Provider>
	);
};
