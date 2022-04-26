import styles from './FeaturedTestimonial.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { ImgFrame, Overline } from '@components';

export const FeaturedTestimonial = ({ pageData, testimonialsData }) => (
	<section className={styles.main}>
		<Container>
			<Row>
				<div className={styles.wrapper}>
					<Col lg={9}>
						<header>
							<ImgFrame
								url={pageData.home_testimonials_bgimg}
								alt={pageData.home_testimonials_overline}
							/>
							<Overline>{pageData.home_testimonials_overline}</Overline>
						</header>
						{testimonialsData.data &&
							testimonialsData.data.map(
								({ ID, name, content, img, occupation }) => {
									if (pageData.home_testimonials_post !== ID) return null;
									return (
										<article key={ID} className={styles.postArticle}>
											<div
												className={styles.content}
												dangerouslySetInnerHTML={{
													__html: content,
												}}></div>
											<div className={styles.userAvatar}>
												<ImgFrame
													url={img}
													alt={name}
													styles={styles.imgWrapper}
												/>
												<cite>
													<p>{name}</p>
													<span>{occupation}</span>
												</cite>
											</div>
										</article>
									);
								}
							)}
					</Col>
					<Col lg={3}>
						<aside>
							<ImgFrame
								url={pageData.home_testimonials_img}
								alt={pageData.home_testimonials_overline}
								styles={styles.imgFrame}
							/>
						</aside>
					</Col>
				</div>
			</Row>
		</Container>
	</section>
);
