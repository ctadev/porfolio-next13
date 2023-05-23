import { client } from "./sanity";

export default async function getExperince() {
  const experience = await client.fetch(
    `*[_type == "experience"]{
      name,
      description,
      stack[]->,
      time,
      demo,
      img,
    }`
  );
  return experience;
}