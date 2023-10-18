import { client } from "./sanity";

export default async function getProject() {
  const projects = await client.fetch(
    `*[_type == "projects"]{
      name,
      "slug": slug.current,
      short_description,
      long_description,
      bg_color,
      stack[]->,
      start_date,
      end_date,
      role,
      github,
      demo,
      preview_image,
      statement_image,
      figma_image,
      laptop_image,
      overview,
      showcase_stack,
      statement,
      learnings,
      challenges,
    }`,
    { next: { revalidate: 500 } }
  );
  return projects;
}
