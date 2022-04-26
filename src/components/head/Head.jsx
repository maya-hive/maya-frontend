import { Helmet } from 'react-helmet';

export const Head = props => {
	const { data: propData } = props;

	if (!propData) return null;

	const title = () => (props.title ? props.title : propData.title);

	const description = () => propData.description;

	const image = () => propData.image;

	const type = () => propData.type || 'website';

	const url = () =>
		`${process.env.REACT_APP_HOSTNAME || ''}${window.location.pathname}${
			window.location.search
		}`;

	const card = () => propData.card;

	return (
		<Helmet htmlAttributes={{ lang: 'en' }}>
			<title>{title()}</title>
			<meta name="title" content={title()} />
			<meta name="description" content={description()} />

			<meta property="og:type" content={type()} />
			<meta property="og:url" content={url()} />
			<meta property="og:title" content={title()} />
			<meta property="og:description" content={description()} />
			<meta property="og:image" content={image()} />

			<meta property="twitter:card" content={card()} />
			<meta property="twitter:url" content={url()} />
			<meta property="twitter:title" content={title()} />
			<meta property="twitter:description" content={description()} />
			<meta property="twitter:image" content={image()} />

			<style>{props.style && `header { ${props.style} }`}</style>
		</Helmet>
	);
};
