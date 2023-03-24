import {
	CompatibilitiesHeader,
	CompatibilitiesList,
	BackgroundTransition,
	Layout,
} from '@components';
import { headerTheme } from './Compatibilities.styles';

export const Compatibilities = ({ pageData, themeData }) => (
	<Layout headerTheme={headerTheme} themeData={themeData} meta={pageData.meta}>
		<main>
			<BackgroundTransition>
				<CompatibilitiesHeader pageData={pageData} />
				<CompatibilitiesList pageData={pageData} />
			</BackgroundTransition>
		</main>
	</Layout>
);
