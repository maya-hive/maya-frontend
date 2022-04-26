import { createContext, useEffect } from 'react';
import { Favicon } from '@components';
import { useAxios } from '@hooks';
import { theme } from '@services';

export const ThemeContext = createContext('');

export const ThemeContextProvider = props => {
	const themeData = useAxios(theme);

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
