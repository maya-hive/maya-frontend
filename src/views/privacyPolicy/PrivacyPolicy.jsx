import { Container } from 'react-bootstrap';

import styles from './PrivacyPolicy.module.scss';
import { ImgFrame, BackgroundTransition, Layout } from '@components';

export const PrivacyPolicy = ({ themeData, pageData }) => {
	return (
		<Layout themeData={themeData} meta={pageData.meta}>
			<main className={styles.main}>
				<BackgroundTransition>
					<div className={styles.bannerWrap}>
						<h1>{pageData.meta.title}</h1>
						<ImgFrame
							url={pageData.privacy_banner_image.url}
							alt={pageData.privacy_banner_image.alt}
							styles={styles.media}
						/>
					</div>
					<article className={styles.containerWrap}>
						<Container>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: pageData.privacy_main_content,
								}}
							/>
						</Container>
					</article>
				</BackgroundTransition>
			</main>
		</Layout>
	);
};
