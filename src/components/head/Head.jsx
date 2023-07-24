import Meta from 'next/head';
import Script from 'next/script';

export const Head = props => {
	const { data: propData } = props;

	const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID;

	const title = () => {
		if (propData.title) {
			return propData.title;
		}

		return `${props.title} ${props.categories.join(', ') ?? false} ${
			'by ' + props.sitename ?? false
		}`;
	};

	const description = () => propData.description;

	const image = () => props.ogImagePath;

	const type = () => propData.type || 'website';

	const card = () => propData.card;

	if (!propData) return null;

	return (
		<>
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

			<Script
				src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
				strategy="afterInteractive"
			/>

			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
				strategy="afterInteractive"
			/>

			<Script id="google-analytics" strategy="afterInteractive">
				{`window.dataLayer = window.dataLayer || [];
					function gtag(){window.dataLayer.push(arguments);} 
					gtag('js', new Date()); 
					gtag('config', '${GTAG_ID}');`}
			</Script>
		</>
	);
};
