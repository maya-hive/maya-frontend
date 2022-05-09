import { NotFound, Layout } from '@components';
import { headerTheme } from './FourZeroFour.styles.js';

export const FourZeroFour = ({ pageData, themeData }) => (
	<Layout
		themeData={themeData}
		meta={pageData.meta}
		headerTheme={
			pageData.notfound_appearance_navbtnsecondary ? headerTheme : undefined
		}>
		<NotFound pageData={pageData} />
	</Layout>
);
