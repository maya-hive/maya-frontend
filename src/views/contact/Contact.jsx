import {
	Head,
	BackgroundTransition,
	InquiryForm,
	AnimateWrap,
} from '@components';

export const Contact = ({ pageData, themeData }) => (
	<>
		<Head data={pageData.meta} />
		<BackgroundTransition>
			<AnimateWrap>
				<InquiryForm pageData={pageData} themeData={themeData} />
			</AnimateWrap>
		</BackgroundTransition>
	</>
);
