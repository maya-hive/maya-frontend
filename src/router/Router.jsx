import { lazy, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

import { ThemeContext } from '@contexts';
import { Loading } from '@components';
import { useAxios } from '@hooks';
import { About, Home } from '@views';
import {
	about,
	careers,
	clients,
	compatibilities,
	contact,
	home,
	notfound,
	portfolio,
	projectCategories,
	projects,
	projectTechnologies,
	testimonials,
} from '@services';

const FourZeroFour = lazy(() =>
	import('@views').then(module => ({ default: module.FourZeroFour }))
);

const Compatibilities = lazy(() =>
	import('@views').then(module => ({ default: module.Compatibilities }))
);

const Careers = lazy(() =>
	import('@views').then(module => ({ default: module.Careers }))
);

const Contact = lazy(() =>
	import('@views').then(module => ({ default: module.Contact }))
);

const Portfolio = lazy(() =>
	import('@views').then(module => ({ default: module.Portfolio }))
);

const ProjectSingle = lazy(() =>
	import('@views').then(module => ({ default: module.ProjectSingle }))
);

export const Router = () => {
	const themeData = useContext(ThemeContext);
	const homeData = useAxios(home);
	const aboutData = useAxios(about);
	const clientsData = useAxios(clients);
	const projectsData = useAxios(projects);
	const notfoundData = useAxios(notfound);
	const portfolioData = useAxios(portfolio);
	const contactData = useAxios(contact);
	const careersData = useAxios(careers);
	const testimonialsData = useAxios(testimonials);
	const compatibilitiesData = useAxios(compatibilities);
	const projectCategoriesData = useAxios(projectCategories);
	const projectTechnologiesData = useAxios(projectTechnologies);

	const location = useLocation();

	if (
		!(
			themeData &&
			homeData &&
			projectsData &&
			clientsData &&
			testimonialsData &&
			notfoundData &&
			projectCategoriesData &&
			portfolioData &&
			projectTechnologiesData &&
			aboutData &&
			contactData &&
			careersData &&
			compatibilitiesData
		)
	) {
		return <Loading />;
	}

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<Routes location={location} key={location.pathname}>
				<Route
					path={'/'}
					element={
						<Home
							pageData={homeData}
							themeData={themeData}
							clientsData={clientsData}
							projectsData={projectsData}
							testimonialsData={testimonialsData}
						/>
					}
				/>
				<Route
					path={'portfolio'}
					element={
						<Portfolio
							pageData={portfolioData}
							projectsData={projectsData}
							projectCategoriesData={projectCategoriesData}
						/>
					}
				/>
				{projectsData.data &&
					projectsData.data.map(
						({
							ID,
							slug,
							title,
							color,
							icon,
							meta,
							content,
							thumbnail,
							banner,
							poster,
							link,
							video,
							global,
							digital,
							technologies,
							categories_name,
						}) => (
							<Route
								key={ID}
								path={`portfolio/${slug}`}
								element={
									<ProjectSingle
										meta={meta}
										icon={icon}
										link={link}
										title={title}
										color={color}
										video={video}
										banner={banner}
										poster={poster}
										global={global}
										digital={digital}
										content={content}
										thumbnail={thumbnail}
										themeData={themeData}
										categories_name={categories_name}
										postTechnologies={technologies}
										allTechnologies={projectTechnologiesData}
									/>
								}
							/>
						)
					)}
				<Route path={'about'} element={<About pageData={aboutData} />} />
				<Route
					path={'contact'}
					element={<Contact pageData={contactData} themeData={themeData} />}
				/>
				<Route
					path={'careers'}
					element={<Careers pageData={careersData} themeData={themeData} />}
				/>
				<Route
					path={'what-we-do'}
					element={<Compatibilities pageData={compatibilitiesData} />}
				/>
				<Route path="*" element={<FourZeroFour pageData={notfoundData} />} />
			</Routes>
		</AnimatePresence>
	);
};
