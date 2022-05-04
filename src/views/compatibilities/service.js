import { fetchData } from '@helpers';
import { compatibilities } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(compatibilities);

	return { props: { pageData } };
};
