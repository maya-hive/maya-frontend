import styles from './CompatibilitiesHeader.module.scss';
import { AnimateWrap, FlexibleMedia, ImgFrame } from '@components';
import { useCursorHandlers } from '@hooks';
import { Anchor } from 'react-bootstrap';

export const CompatibilitiesHeader = ({ pageData }) => {
	const cursorHandlers = useCursorHandlers();

	return (
		<section className={styles.main}>
			<div className={styles.contentWrap}>
				<AnimateWrap>
					<div
						className={styles.headline}
						dangerouslySetInnerHTML={{
							__html: pageData.compatibilities_header_headline,
						}}
					/>
					<div className={styles.categories}>
						{pageData.compatibilities_categories_list.map(
							({ name, icon }, index) => (
								<Anchor
									key={index}
									className={styles.item}
									href={`#${name.replace(/\s/g, '')}`}
									{...cursorHandlers}>
									<ImgFrame styles={styles.icon} url={icon} alt={name} />
									<h3>{name}</h3>
								</Anchor>
							)
						)}
					</div>
				</AnimateWrap>
			</div>
			<FlexibleMedia
				loop
				styles={styles.media}
				poster={pageData.compatibilities_header_poster}
				url={pageData.compatibilities_header_bg}
			/>
		</section>
	);
};
