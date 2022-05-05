import { useState, useEffect } from 'react';
import Sparticles from 'sparticles';

import { particleConfig } from './particleConfig';
import { useMediaQuery } from '@hooks';
import {
	Head,
	AnimateWrap,
	BackgroundTransition,
	ProjectsFilter,
	ProjectsList,
} from '@components';

export const Portfolio = ({
	pageData,
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
		<>
			<Head data={pageData.meta} />
			<main>
				<BackgroundTransition>
					<AnimateWrap>
						<ProjectsFilter
							pageData={pageData}
							setFilter={setFilter}
							projectCategoriesData={projectCategoriesData}
						/>
						<ProjectsList
							projectsData={projectsData}
							projectCategoriesData={projectCategoriesData}
							filter={filter}
							setFilter={setFilter}
						/>
					</AnimateWrap>
				</BackgroundTransition>
			</main>
		</>
	);
};
