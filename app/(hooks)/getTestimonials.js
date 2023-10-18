import { client } from "./sanity";

export default async function getTestimonials() {
  const testimonials = await client.fetch(`*[_type == "testimonials"]`, {
    next: { revalidate: 500 },
  });
  return testimonials;
}
