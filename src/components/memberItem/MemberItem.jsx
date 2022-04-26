import { ImgFrame } from '@components';
import { Col } from 'react-bootstrap';
import styles from './MemberItem.module.scss';

export const MemberItem = ({ name, position, thumbnail }) => (
	<Col sm={12} md={6} lg={4}>
		<div className={styles.main}>
			<div className={styles.contentWrap}>
				<h3 className={styles.name}>{name}</h3>
				<h5 className={styles.position}>{position}</h5>
			</div>
			<ImgFrame styles={styles.thumbnail} url={thumbnail} alt={name} />
		</div>
	</Col>
);
