import {
	Head,
	AboutDescription,
	BackgroundTransition,
	InnovationTimeline,
	TeamMembers,
	AboutGallery,
	AnimateWrap,
} from '@components';

export const About = ({ pageData }) => (
	<>
		<Head data={pageData.meta} />
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
	</>
);
