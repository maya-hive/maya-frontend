import {
	Head,
	BackgroundTransition,
	CurrentVacancies,
	AnimateWrap,
} from '@components';

export const Careers = ({ pageData, themeData }) => (
	<>
		<Head data={pageData.meta} />
		<main>
			<BackgroundTransition>
				<AnimateWrap>
					<CurrentVacancies pageData={pageData} themeData={themeData} />
				</AnimateWrap>
			</BackgroundTransition>
		</main>
	</>
);
