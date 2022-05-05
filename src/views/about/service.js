import { fetchData } from '@helpers';
import { about } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(about);

	return { props: { pageData } };
};
