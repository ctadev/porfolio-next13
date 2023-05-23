import { client } from "./sanity";

export default async function getProject() {
  const projects = await client.fetch(
    `*[_type == "projects"]{
      name,
      "slug": slug.current,
      description,
      stack[]->,
      github,
      demo,
      img,
    }`
  );
  return projects;
}
