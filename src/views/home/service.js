import { fetchData } from '@helpers';
import { home } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(home);

	return { props: { pageData } };
};
