import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    const { slug} = params;
    const id = slug;
	return { id };
};