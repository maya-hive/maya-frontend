import { useMediaQuery } from '@hooks';
import { XsScreen, SmScreen, MdScreen, XlScreen } from './index';

export const Screen = props => {
	const mdScreen = useMediaQuery('(max-width: 992px)');
	const smScreen = useMediaQuery('(max-width: 767px)');
	const xsScreen = useMediaQuery('(max-width: 576px)');

	if (xsScreen) {
		return <XsScreen {...props} />;
	} else if (smScreen) {
		return <SmScreen {...props} />;
	} else if (mdScreen) {
		return <MdScreen {...props} />;
	} else {
		return <XlScreen {...props} />;
	}
};
