import { fetchData } from '@helpers';
import { notfound } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(notfound);

	return { props: { pageData } };
};
