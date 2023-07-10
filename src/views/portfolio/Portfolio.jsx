import { useState, useEffect } from 'react';
import Sparticles from 'sparticles';

import { particleConfig } from './particleConfig';
import { useMediaQuery } from '@hooks';
import {
	AnimateWrap,
	BackgroundTransition,
	ProjectsFilter,
	ProjectsList,
	Layout,
} from '@components';

export const Portfolio = ({
	pageData,
	themeData,
	projectsData,
	projectCategoriesData,
}) => {
	const [filter, setFilter] = useState('all');

	const mdDevice = useMediaQuery('(max-width: 768px)');

	useEffect(() => {
		particleConfig.imageUrl = pageData.portfolio_bg_img;
		particleConfig.color = pageData.portfolio_bg_color;

		if (!mdDevice) {
			new Sparticles(particleConfig, 1920, 1080);
		}

		return () => {
			const elem = document.querySelector('.sparticles');
			elem && elem.remove();
		};
	}, [mdDevice, pageData]);

	return (
		<Layout themeData={themeData} meta={pageData.meta}>
			<main>
				<BackgroundTransition>
					<AnimateWrap>
						<ProjectsFilter
							pageData={pageData}
							setFilter={setFilter}
							projectCategoriesData={projectCategoriesData}
						/>
						<ProjectsList
							allProjectsData={projectsData}
							projectsLeft={pageData.portfolio_projects_left}
							projectsCenter={pageData.portfolio_projects_center}
							projectsRight={pageData.portfolio_projects_right}
							projectCategoriesData={projectCategoriesData}
							filter={filter}
							setFilter={setFilter}
						/>
					</AnimateWrap>
				</BackgroundTransition>
			</main>
		</Layout>
	);
};
