import {
	CompatibilitiesHeader,
	CompatibilitiesList,
	BackgroundTransition,
	Layout,
} from '@components';
import { headerTheme } from './Compatibilities.styles';

export const Compatibilities = ({ pageData, themeData, ogImagePath }) => (
	<Layout
		ogImagePath={ogImagePath}
		headerTheme={headerTheme}
		themeData={themeData}
		meta={pageData.meta}>
		<main>
			<BackgroundTransition>
				<CompatibilitiesHeader pageData={pageData} />
				<CompatibilitiesList pageData={pageData} />
			</BackgroundTransition>
		</main>
	</Layout>
);
