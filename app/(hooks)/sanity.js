import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const client = createClient({
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion,
  useCdn: typeof document !== "undefined",
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export { client, urlFor };
