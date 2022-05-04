import { BackgroundTransition, InquiryForm, AnimateWrap } from '@components';

export const Contact = ({ pageData, themeData }) => (
	<>
		<BackgroundTransition>
			<AnimateWrap>
				<InquiryForm pageData={pageData} themeData={themeData} />
			</AnimateWrap>
		</BackgroundTransition>
	</>
);
