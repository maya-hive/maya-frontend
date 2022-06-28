import {
	BannerHome,
	BrandsCarousel,
	Introduction,
	Compatibilities,
	BackgroundTransition,
	ProjectsSlider,
	HomeMarquee,
	FeaturedTestimonial,
	InBritain,
	AnimateWrap,
	Layout,
} from '@components';

export const Home = ({
	pageData,
	themeData,
	clientsData,
	projectsData,
	testimonialsData,
	ogImagePath,
}) => (
	<Layout themeData={themeData} meta={pageData.meta} ogImagePath={ogImagePath}>
		<main>
			<AnimateWrap>
				<BannerHome pageData={pageData} themeData={themeData} />
				<BrandsCarousel pageData={pageData} clientsData={clientsData} />
				<Introduction pageData={pageData} />
			</AnimateWrap>
			<BackgroundTransition>
				<Compatibilities pageData={pageData} themeData={themeData} />
				<ProjectsSlider pageData={pageData} projectsData={projectsData} />
				<InBritain pageData={pageData} />
				<FeaturedTestimonial
					pageData={pageData}
					testimonialsData={testimonialsData}
				/>
				<HomeMarquee pageData={pageData} />
			</BackgroundTransition>
		</main>
	</Layout>
);
