import {
	BackgroundTransition,
	CurrentVacancies,
	AnimateWrap,
	Layout,
} from '@components';

export const Careers = ({ pageData, themeData, ogImagePath }) => (
	<Layout themeData={themeData} meta={pageData.meta} ogImagePath={ogImagePath}>
		<main>
			<BackgroundTransition>
				<AnimateWrap>
					<CurrentVacancies pageData={pageData} themeData={themeData} />
				</AnimateWrap>
			</BackgroundTransition>
		</main>
	</Layout>
);
