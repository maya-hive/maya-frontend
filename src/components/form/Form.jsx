import { DefaultForm, PopupForm } from './index';

export const Form = ({
	popup,
	headline,
	pageData,
	fileInput,
	themeData,
	className,
	submitValue,
	isPoppedData,
	setIsPoppedData,
	toggleCompatiblities,
	labelCompatibilities,
}) => {
	return popup ? (
		<PopupForm
			isPoppedData={isPoppedData}
			setIsPoppedData={setIsPoppedData}
			submitValue={submitValue}
			pageData={pageData}
			themeData={themeData}
			headline={headline}
			fileInput={fileInput}
		/>
	) : (
		<DefaultForm
			headline={headline}
			className={className}
			themeData={themeData}
			submitValue={submitValue}
			toggleCompatiblities={toggleCompatiblities}
			labelCompatibilities={labelCompatibilities}
		/>
	);
};
