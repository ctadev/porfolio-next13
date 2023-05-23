import { client } from "./sanity";

export default async function getCurrentProject(slug) {
  const projects = await client.fetch(
    `*[_type == "projects" && slug.current == $slug][0]{
      name,
      "slug": slug.current,
      stack[]->,
      github,
      demo,
      img,
      gallery,
      overview,
      goal1,
      goal2,
      learnings,
      challenges,
    }`,
    { slug }
  );
  return projects;
}
