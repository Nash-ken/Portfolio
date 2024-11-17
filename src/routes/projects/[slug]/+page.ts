import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent, params }) => {
  const { projects } = await parent();
  const slug = params.slug;
  return { projects, slug };
};
