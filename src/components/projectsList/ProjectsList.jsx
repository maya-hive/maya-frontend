import { Container } from 'react-bootstrap';
import { lazy, useMemo } from 'react';

import styles from './ProjectsList.module.scss';

const ProjectItem = lazy(() =>
	import('@components').then(module => ({ default: module.ProjectItem }))
);

export const ProjectsList = ({
	allProjectsData: { data: projectsData },
	projectsLeft: projectsLeftIds,
	projectsCenter: projectsCenterIds,
	projectsRight: projectsRightIds,
	filter,
}) => {
	const filteredPortfolio = useMemo(() => {
		if (filter === 'all') {
			return [
				...projectsLeftIds.map(projectId => {
					return projectsData.find(project => project.ID === projectId);
				}),
				...projectsCenterIds.map(projectId => {
					return projectsData.find(project => project.ID === projectId);
				}),
				...projectsRightIds.map(projectId => {
					return projectsData.find(project => project.ID === projectId);
				}),
			];
		}

		return projectsData.filter(({ categories_slug }) =>
			categories_slug.includes(filter)
		);
	}, [
		filter,
		projectsCenterIds,
		projectsData,
		projectsLeftIds,
		projectsRightIds,
	]);

	return (
		<section className={styles.main}>
			<Container>
				<div className={styles.projectsRow}>
					{filteredPortfolio &&
						filteredPortfolio.map(
							({ ID, title, color, thumbnail, slug, categories_name }) => (
								<ProjectItem
									key={ID}
									slug={slug}
									title={title}
									color={color}
									thumbnail={thumbnail}
									categories_name={categories_name || 'uncategorized'}
								/>
							)
						)}
				</div>
			</Container>
		</section>
	);
};
