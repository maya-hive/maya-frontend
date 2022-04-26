import styles from './HeroVideo.module.scss';

export const HeroVideo = ({ pageData }) => (
	<section className={styles.main}>
		<div
			dangerouslySetInnerHTML={{
				__html: `<video 
							loop 
							muted 
							autoplay 
							playsinline 
							preload="auto"
          					src="${pageData.home_hero_video}" />`,
			}}
		/>
		<h1
			className={styles.primaryHeadline}
			dangerouslySetInnerHTML={{
				__html: pageData.home_hero_headline,
			}}></h1>
	</section>
);
