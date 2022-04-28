import Head from 'next/head';

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
} from '@components';

export const Home = ({
	pageData,
	themeData,
	clientsData,
	projectsData,
	testimonialsData,
}) => (
	<div>
		<Head>
			<title>{pageData.meta.title}</title>
			<meta name="description" content="page Home" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
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
	</div>
);
