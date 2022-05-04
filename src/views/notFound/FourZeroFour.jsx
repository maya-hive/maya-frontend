import Head from 'next/head';

import { headerTheme } from './FourZeroFour.styles.js';
import { NotFound } from '@components';
import { styleToString } from '@helpers';

export const FourZeroFour = ({ pageData }) => (
	<>
		<Head>
			<style>
				{pageData.notfound_appearance_navbtnsecondary &&
					styleToString(headerTheme)}
			</style>
		</Head>
		<NotFound pageData={pageData} />
	</>
);
