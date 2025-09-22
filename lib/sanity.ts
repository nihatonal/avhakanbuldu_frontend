import { createClient, SanityClient } from "next-sanity";
import imageUrlBuilder, { ImageUrlBuilder } from "@sanity/image-url";
import { apiVersion, dataset, projectId, useCdn } from "../sanity/env";
import type { Blog } from "@/sanity/sanity.types"; // <-- sanity.types.ts'de Blog tipi tanımlı olmalı

export const sanityClient: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

const builder: ImageUrlBuilder = imageUrlBuilder(sanityClient);

/**
 * Creates a URL for a given Sanity image source
 */
export function urlFor(source: Parameters<ImageUrlBuilder["image"]>[0]) {
  return builder.image(source);
}

/**
 * Fetch a single blog by slug
 */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  return await sanityClient.fetch<Blog | null>(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      slug,
      mainImage,
      body,
      publishedAt,
      blogcategories[]->{
        title
      }
    }`,
    { slug }
  );
}

/**
 * Fetch a single blog by slug (preview mode)
 */
export async function getBlogBySlugForPreview(slug: string): Promise<Blog | null> {
  return await getBlogBySlug(slug); // preview ile aynı sorguyu kullanabiliriz
}
