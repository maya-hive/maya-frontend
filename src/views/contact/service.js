import { fetchData } from '@helpers';
import { contact } from '@services';

export const getStaticProps = async () => {
	const { response: pageData } = await fetchData(contact);

	return { props: { pageData } };
};
