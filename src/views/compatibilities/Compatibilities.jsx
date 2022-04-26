import {
	Head,
	CompatibilitiesHeader,
	CompatibilitiesList,
	BackgroundTransition,
} from '@components';
import { styleToString } from '@helpers';
import { headerTheme } from './index';

export const Compatibilities = ({ pageData }) => (
	<>
		<Head data={pageData.meta} style={styleToString(headerTheme)} />
		<main>
			<BackgroundTransition>
				<CompatibilitiesHeader pageData={pageData} />
				<CompatibilitiesList pageData={pageData} />
			</BackgroundTransition>
		</main>
	</>
);
