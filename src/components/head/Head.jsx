import Meta from 'next/head';

import { ogImage } from '@services';

export const Head = props => {
	const { data: propData } = props;

	const title = () => (props.title ? props.title : propData.title);

	const description = () => propData.description;

	const image = () => ogImage + encodeURIComponent(title());

	const type = () => propData.type || 'website';

	const card = () => propData.card;

	if (!propData) return null;

	return (
		<Meta htmlAttributes={{ lang: 'en' }}>
			<title>{title()}</title>
			<meta name="title" content={title()} />
			<meta name="description" content={description()} />

			<meta property="og:type" content={type()} />
			<meta property="og:title" content={title()} />
			<meta property="og:description" content={description()} />
			<meta property="og:image" content={image()} />

			<meta property="twitter:card" content={card()} />
			<meta property="twitter:title" content={title()} />
			<meta property="twitter:description" content={description()} />
			<meta property="twitter:image" content={image()} />

			<style>{props.style && `header { ${props.style} }`}</style>
		</Meta>
	);
};
