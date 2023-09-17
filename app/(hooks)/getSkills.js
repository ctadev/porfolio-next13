import { client } from "./sanity";

export default async function getSkills() {
  const skills = await client.fetch(`*[_type == "skills"]`);
  return skills;
}
