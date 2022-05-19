import {
	BackgroundTransition,
	InquiryForm,
	AnimateWrap,
	Layout,
} from '@components';

export const Contact = ({ pageData, themeData, ogImagePath }) => (
	<Layout themeData={themeData} meta={pageData.meta} ogImagePath={ogImagePath}>
		<BackgroundTransition>
			<AnimateWrap>
				<InquiryForm pageData={pageData} themeData={themeData} />
			</AnimateWrap>
		</BackgroundTransition>
	</Layout>
);
