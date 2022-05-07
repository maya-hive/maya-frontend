import { Container, Row, Col } from 'react-bootstrap';

import styles from './Footer.module.scss';
import { Address, Nav, Small } from './index';
import { Form } from '@components';

export const Footer = ({ themeData }) => {
	return (
		<footer className={styles.main}>
			<Container>
				<Row>
					<Col sm={12} md={12} lg={5}>
						<Form
							themeData={themeData}
							headline={themeData.theme_footer_form}
							submitValue={themeData.theme_footer_submit}
							className={styles.form}
						/>
					</Col>
					<Col sm={12} md={6} lg={3}>
						<Address themeData={themeData} />
					</Col>
					<Col sm={12} md={6} lg={4}>
						<Nav themeData={themeData} />
					</Col>
				</Row>
				<hr />
				<Row>
					<Col sm={12} md={12} lg={12}>
						<Small themeData={themeData} />
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
