import {
	AboutDescription,
	BackgroundTransition,
	InnovationTimeline,
	TeamMembers,
	AboutGallery,
	AnimateWrap,
	Layout,
} from '@components';

export const About = ({ pageData, themeData, ogImagePath }) => (
	<Layout themeData={themeData} meta={pageData.meta} ogImagePath={ogImagePath}>
		<main>
			<BackgroundTransition trigger={'+=300px top'}>
				<AnimateWrap>
					<AboutGallery pageData={pageData} />
					<InnovationTimeline pageData={pageData} />
					<AboutDescription pageData={pageData} />
					<TeamMembers pageData={pageData} />
				</AnimateWrap>
			</BackgroundTransition>
		</main>
	</Layout>
);
