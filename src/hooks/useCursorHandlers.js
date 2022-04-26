import { useContext, useCallback } from 'react';

import { CursorContext } from '@contexts';

export const useCursorHandlers = (options = {}) => {
	const [, setCursor] = useContext(CursorContext);

	const onMouseEnter = useCallback(
		event => {
			if (options.onMouseEnter) {
				options.onMouseEnter(event);
			}

			setCursor({ active: true });
		},
		[options, setCursor]
	);

	const onMouseLeave = useCallback(
		event => {
			if (options.onMouseLeave) {
				options.onMouseLeave(event);
			}

			setCursor({ active: false });
		},
		[options, setCursor]
	);

	return { onMouseEnter, onMouseLeave };
};
