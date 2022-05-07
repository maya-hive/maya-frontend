import {
	Head,
	BackgroundTransition,
	InquiryForm,
	AnimateWrap,
	Layout,
} from '@components';

export const Contact = ({ pageData, themeData }) => (
	<Layout themeData={themeData}>
		<Head data={pageData.meta} />
		<BackgroundTransition>
			<AnimateWrap>
				<InquiryForm pageData={pageData} themeData={themeData} />
			</AnimateWrap>
		</BackgroundTransition>
	</Layout>
);
