import { forwardRef } from 'react';
import Slider from 'react-slick';

export const Carousel = forwardRef((props, ref) => (
	<div className={props.styles || ''} ref={ref}>
		<Slider arrows={false} {...props}>
			{props.children}
		</Slider>
	</div>
));
