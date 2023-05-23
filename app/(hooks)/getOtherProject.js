import { client } from "./sanity";

export default async function getOtherProject(slug) {
  const projects = await client.fetch(
    `*[_type == "projects" && slug.current !== $slug][0]{
      name,
      "slug": slug.current,
      img,
      description,
    }`,
    { slug }
  );
  return projects;
}
