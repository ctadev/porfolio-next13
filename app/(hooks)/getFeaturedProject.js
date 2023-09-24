import { client } from "./sanity";

export default async function getFeaturedProjects() {
  const featured = await client.fetch(
    `*[_type == "featured"]{
      selected[]->,
    }`,
    { next: { revalidate: 60 } }
  );
  return featured;
}