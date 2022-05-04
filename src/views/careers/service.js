import { fetchData } from '@helpers';
import { careers } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(careers);

	return { props: { pageData } };
};
