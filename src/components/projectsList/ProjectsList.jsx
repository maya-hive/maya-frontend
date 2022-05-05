import { Container } from 'react-bootstrap';
import { lazy, useMemo } from 'react';

import styles from './ProjectsList.module.scss';

const ProjectItem = lazy(() =>
	import('@components').then(module => ({ default: module.ProjectItem }))
);

export const ProjectsList = ({ projectsData: { data }, filter }) => {
	const filteredPortfolio = useMemo(() => {
		if (filter === 'all') return data;

		return data.filter(({ categories_slug }) =>
			categories_slug.includes(filter)
		);
	}, [filter, data]);

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
