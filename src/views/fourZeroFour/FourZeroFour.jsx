import { NotFound, Layout } from '@components';
import { headerTheme } from './FourZeroFour.styles.js';

export const FourZeroFour = ({ pageData, themeData, ogImagePath }) => (
	<Layout
		ogImagePath={ogImagePath}
		themeData={themeData}
		meta={pageData.meta}
		headerTheme={
			pageData.notfound_appearance_navbtnsecondary ? headerTheme : undefined
		}>
		<NotFound pageData={pageData} />
	</Layout>
);
