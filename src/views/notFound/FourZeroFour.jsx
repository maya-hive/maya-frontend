import { NotFound, Head, Layout } from '@components';
import { headerTheme } from './FourZeroFour.styles.js';
import { styleToString } from '@helpers';

export const FourZeroFour = ({ pageData, themeData }) => (
	<Layout themeData={themeData}>
		<Head
			data={pageData.meta}
			style={
				pageData.notfound_appearance_navbtnsecondary &&
				styleToString(headerTheme)
			}
		/>
		<NotFound pageData={pageData} />
	</Layout>
);
