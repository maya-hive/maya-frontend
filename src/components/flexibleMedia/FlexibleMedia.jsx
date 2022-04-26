import { useFileExtensionCheck } from '@hooks';
import { VideoPlayer, ImgFrame } from '@components';
import { forwardRef } from 'react';

export const FlexibleMedia = forwardRef((props, ref) => {
	const { isImg } = useFileExtensionCheck(props.url);

	return isImg ? (
		<ImgFrame {...props} ref={ref} />
	) : (
		<VideoPlayer {...props} ref={ref} />
	);
});
