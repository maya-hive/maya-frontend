import {
	CompatibilitiesHeader,
	CompatibilitiesList,
	BackgroundTransition,
	Layout,
} from '@components';
import { headerTheme } from './Compatibilities.styles';

export const Compatibilities = ({ pageData, themeData }) => (
	<Layout themeData={themeData} meta={pageData.meta} headerTheme={headerTheme}>
		<main>
			<BackgroundTransition>
				<CompatibilitiesHeader pageData={pageData} />
				<CompatibilitiesList pageData={pageData} />
			</BackgroundTransition>
		</main>
	</Layout>
);
