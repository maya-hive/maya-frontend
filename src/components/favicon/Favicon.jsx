import Head from 'next/head';

export const Favicon = ({ themeData }) => (
	<Head>
		<link
			id={'favicon'}
			rel={'shortcut icon'}
			href={themeData.theme_metadata_favicon}
		/>
	</Head>
);
