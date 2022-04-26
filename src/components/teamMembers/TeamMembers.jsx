import styles from './TeamMembers.module.scss';
import { Container, Row } from 'react-bootstrap';
import { Headline, MemberItem, Overline, Subtitle } from '@components';

export const TeamMembers = ({ pageData }) => (
	<div className={styles.main}>
		<Container>
			<div className={styles.titleWrap}>
				<Overline>{pageData.about_team_overline}</Overline>
				<Headline>{pageData.about_team_headline}</Headline>
				<Subtitle>{pageData.about_team_subtitle}</Subtitle>
			</div>
			<Row className={styles.teamWrap}>
				{pageData.about_team_members.map(({ name, position, image }, index) => (
					<MemberItem
						key={index}
						name={name}
						position={position}
						thumbnail={image}
					/>
				))}
			</Row>
		</Container>
	</div>
);
