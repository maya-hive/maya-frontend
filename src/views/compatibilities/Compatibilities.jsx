import {
	CompatibilitiesHeader,
	CompatibilitiesList,
	BackgroundTransition,
} from '@components';
import { styleToString } from '@helpers';
import Head from 'next/head';
import { headerTheme } from './Compatibilities.styles';

export const Compatibilities = ({ pageData }) => (
	<>
		<Head>
			<style>{`header { ${styleToString(headerTheme)} }`}</style>
		</Head>
		<main>
			<BackgroundTransition>
				<CompatibilitiesHeader pageData={pageData} />
				<CompatibilitiesList pageData={pageData} />
			</BackgroundTransition>
		</main>
	</>
);
