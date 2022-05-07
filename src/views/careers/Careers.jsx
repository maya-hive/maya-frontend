import {
	Head,
	BackgroundTransition,
	CurrentVacancies,
	AnimateWrap,
	Layout,
} from '@components';

export const Careers = ({ pageData, themeData }) => (
	<Layout themeData={themeData}>
		<Head data={pageData.meta} />
		<main>
			<BackgroundTransition>
				<AnimateWrap>
					<CurrentVacancies pageData={pageData} themeData={themeData} />
				</AnimateWrap>
			</BackgroundTransition>
		</main>
	</Layout>
);
