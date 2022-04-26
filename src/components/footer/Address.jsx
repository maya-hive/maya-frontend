import styles from './Address.module.scss';
import { Anchor } from '@components';

export const Address = ({ themeData }) => {
	let append = ':';
	return (
		<address className={styles.main}>
			<h3>{themeData.theme_footer_contact}</h3>
			<div>
				<h4>{themeData.theme_footer_telephone + append}</h4>
				<ul>
					{themeData.theme_general_telephone.map(({ number }, index) => (
						<li key={index}>
							<Anchor href={`tel:${number}`}>{number}</Anchor>
						</li>
					))}
				</ul>
			</div>
			<div>
				<h4>{themeData.theme_footer_email + append}</h4>
				<ul>
					{themeData.theme_general_email.map(({ email }, index) => (
						<li key={index}>
							<Anchor href={`mailto:${email}`}>{email}</Anchor>
						</li>
					))}
				</ul>
			</div>
			<div>
				<h4>{themeData.theme_footer_address + append}</h4>
				<Anchor
					href={`https://www.google.com/maps/search/${themeData.theme_general_address.replace(
						/<[^>]*>?/gm,
						''
					)}`}
					target={'_blank'}>
					<p
						dangerouslySetInnerHTML={{
							__html: themeData.theme_general_address,
						}}
					/>
				</Anchor>
			</div>
		</address>
	);
};
