import { ImgFrame } from '@components';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './CompatibilitiesList.module.scss';

export const CompatibilitiesList = ({ pageData }) => (
	<section className={styles.main}>
		<Container>
			<hr className={styles.separator} />
			{pageData.compatibilities_categories_list.map(
				({ name, icon, tagline, services }, index) => (
					<div
						className={styles.category}
						id={name.replace(/\s/g, '')}
						key={index}>
						<Row>
							<Col sm={12} md={6} lg={6}>
								<div className={styles.logoWrap}>
									<ImgFrame styles={styles.logo} url={icon} alt={name} />
									<div className={styles.content}>
										<h3>{name}</h3>
										<h5>{tagline}</h5>
									</div>
								</div>
							</Col>
							<Col sm={12} md={6} lg={6}>
								<div className={styles.serviceWrap}>
									{services &&
										services.map(({ name, icon, description }, index) => (
											<div className={styles.service} key={index}>
												<ImgFrame styles={styles.icon} url={icon} alt={name} />
												<h4>{name}</h4>
												<p>{description}</p>
											</div>
										))}
								</div>
							</Col>
							<ImgFrame styles={styles.bg} url={icon} alt={name} />
						</Row>
					</div>
				)
			)}
		</Container>
	</section>
);
