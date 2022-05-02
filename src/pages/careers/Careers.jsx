import {
	BackgroundTransition,
	CurrentVacancies,
	AnimateWrap,
} from '@components';

export const Careers = ({ pageData, themeData }) => (
	<>
		<main>
			<BackgroundTransition>
				<AnimateWrap>
					<CurrentVacancies pageData={pageData} themeData={themeData} />
				</AnimateWrap>
			</BackgroundTransition>
		</main>
	</>
);
