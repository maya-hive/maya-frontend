import { DefaultButton, RoundButton } from './index';

export const Button = props => {
	return props.round === 'true' ? (
		<RoundButton ref={props.elemRef} {...props} />
	) : (
		<DefaultButton ref={props.elemRef} {...props} />
	);
};
