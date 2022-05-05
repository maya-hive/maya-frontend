import {
	Head,
	CompatibilitiesHeader,
	CompatibilitiesList,
	BackgroundTransition,
} from '@components';
import { styleToString } from '@helpers';
import { headerTheme } from './Compatibilities.styles';

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
