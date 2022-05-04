import {
	CompatibilitiesHeader,
	CompatibilitiesList,
	BackgroundTransition,
} from '@components';
import { styleToString } from '@helpers';
import { headerTheme } from './index';

export const Compatibilities = ({ pageData }) => (
	<>
		<main>
			<BackgroundTransition>
				<CompatibilitiesHeader pageData={pageData} />
				<CompatibilitiesList pageData={pageData} />
			</BackgroundTransition>
		</main>
	</>
);
