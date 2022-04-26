import { Submit } from '@components';

import styles from './SubmitBtn.module.scss';

export const SubmitBtn = ({ position, onClick }) => (
	<Submit
		name={position.replace(/\s/g, '')}
		className={styles.button}
		onClick={onClick}>
		{'Apply Now'}
	</Submit>
);
