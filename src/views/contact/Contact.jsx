import {
	BackgroundTransition,
	InquiryForm,
	AnimateWrap,
	Layout,
} from '@components';

export const Contact = ({ pageData, themeData }) => (
	<Layout themeData={themeData} meta={pageData.meta}>
		<BackgroundTransition>
			<AnimateWrap>
				<InquiryForm pageData={pageData} themeData={themeData} />
			</AnimateWrap>
		</BackgroundTransition>
	</Layout>
);
