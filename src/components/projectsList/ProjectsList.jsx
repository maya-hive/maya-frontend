import { Col, Container, Row } from 'react-bootstrap';
import { lazy, useMemo } from 'react';

import styles from './ProjectsList.module.scss';

const ProjectItem = lazy(() =>
	import('@components').then(module => ({ default: module.ProjectItem }))
);

export const ProjectsList = ({
	allProjectsData: { data: projectsData },
	projects,
	filter,
}) => {
	const selectedPortfolios = projects && projects.flatMap(obj =>
		Object.values(obj).map(projectID => {
			return projectsData.find(project => {
				return project.ID === projectID;
			});
		})
	);

	const filteredPortfolio = useMemo(
		() =>
			selectedPortfolios && selectedPortfolios.filter(
				project =>
					project?.categories_slug && project.categories_slug.includes(filter)
			),
		[filter, selectedPortfolios]
	);

	const projectsColLeft = useMemo(
		() =>
			projects && projects.map(({ col_left: ID }) => {
				if (filter === 'all') {
					return projectsData.find(project => project.ID === ID);
				}

				return projectsData.find(
					({ categories_slug: category }) =>
						category && category.includes(filter)
				);
			}),
		[filter, projects, projectsData]
	);

	const projectsColCenter = useMemo(
		() =>
			projects && projects.map(({ col_center: ID }) => {
				if (filter === 'all') {
					return projectsData.find(project => project.ID === ID);
				}

				return projectsData.filter(
					({ categories_slug: category }) =>
						category && category.includes(filter)
				);
			}),
		[filter, projects, projectsData]
	);

	const projectsColRight = useMemo(
		() =>
			projects && projects.map(({ col_right: ID }) => {
				if (filter === 'all') {
					return projectsData.find(project => project.ID === ID);
				}

				return projectsData.filter(
					({ categories_slug: category }) =>
						category && category.includes(filter)
				);
			}),
		[filter, projects, projectsData]
	);

	return (
		<section className={styles.main}>
			<Container>
				{filter === 'all' ? (
					<Row className={styles.projectsRow}>
						<Col lg={4}>
							{projectsColLeft &&
								projectsColLeft.map(
									project =>
										project && (
											<ProjectItem
												key={project.ID}
												slug={project.slug}
												title={project.title}
												color={project.color}
												thumbnail={project.thumbnail}
												categories_name={
													project.categories_name || 'uncategorized'
												}
											/>
										)
								)}
						</Col>
						<Col lg={4}>
							{projectsColCenter &&
								projectsColCenter.map(
									project =>
										project && (
											<ProjectItem
												key={project.ID}
												slug={project.slug}
												title={project.title}
												color={project.color}
												thumbnail={project.thumbnail}
												categories_name={
													project.categories_name || 'uncategorized'
												}
											/>
										)
								)}
						</Col>
						<Col lg={4}>
							{projectsColRight &&
								projectsColRight.map(
									project =>
										project && (
											<ProjectItem
												key={project.ID}
												slug={project.slug}
												title={project.title}
												color={project.color}
												thumbnail={project.thumbnail}
												categories_name={
													project.categories_name || 'uncategorized'
												}
											/>
										)
								)}
						</Col>
					</Row>
				) : (
					filteredPortfolio && (
						<div className={styles.filterGrid}>
							{filteredPortfolio.map(
								project =>
									project && (
										<ProjectItem
											key={project.ID}
											slug={project.slug}
											title={project.title}
											color={project.color}
											thumbnail={project.thumbnail}
											filtred={true}
											categories_name={
												project.categories_name || 'uncategorized'
											}
										/>
									)
							)}
						</div>
					)
				)}
			</Container>
		</section>
	);
};
