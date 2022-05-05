import { NotFound, Head } from '@components';
import { headerTheme } from './FourZeroFour.styles.js';
import { styleToString } from '@helpers';

export const FourZeroFour = ({ pageData }) => (
	<>
		<Head
			data={pageData.meta}
			style={
				pageData.notfound_appearance_navbtnsecondary &&
				styleToString(headerTheme)
			}
		/>
		<NotFound pageData={pageData} />
	</>
);
