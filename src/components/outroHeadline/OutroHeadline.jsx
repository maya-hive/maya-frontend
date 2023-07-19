import { Container } from 'react-bootstrap';

import styles from './OutroHeadline.module.scss';

export const OutroHeadline = ({ content }) => (
	<section className={styles.main}>
		<Container>
			<span dangerouslySetInnerHTML={{ __html: content }} />
		</Container>
	</section>
);
