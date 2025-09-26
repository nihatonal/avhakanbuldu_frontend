import { sanityFetch } from "../lib/live";

import {
  BLOG_CATEGORIES,
  GET_ALL_BLOG,
  GET_ALL_BLOGS,
  LATEST_BLOG_QUERY,
  OTHERS_BLOG_QUERY,
  SINGLE_BLOG_QUERY,
  GET_ALL_PUBLISHED_BLOGS,
  MOST_VIEWED_BLOGS_QUERY,
} from "./query";

const getCategories = async (quantity?: number) => {
  try {
    const query = quantity
      ? `*[_type == 'category'] | order(name asc) [0...$quantity] {
          ...,
          "productCount": count(*[_type == "product" && references(^._id)])
        }`
      : `*[_type == 'category'] | order(name asc) {
          ...,
          "productCount": count(*[_type == "product" && references(^._id)])
        }`;
    const { data } = await sanityFetch({
      query,
      params: quantity ? { quantity } : {},
    });
    return data;
  } catch (error) {
    console.log("Error fetching categories", error);
    return [];
  }
};

const getLatestBlogs = async (slugToExclude?: string) => {
  try {
    const query = slugToExclude
      ? `
        *[_type == 'blog' && slug.current != $slug]
        | order(publishedAt desc)[0...3] {
          _id,
          title,
          slug,
          publishedAt,
          mainImage,
          readingTime,
          blogcategories[]->{
            title
          }
        }
      `
      : `
        *[_type == 'blog']
        | order(publishedAt desc)[0...3] {
          _id,
          title,
          slug,
          publishedAt,
          mainImage,
          readingTime,
          blogcategories[]->{
            title
          }
        }
      `;

    const { data } = await sanityFetch({
      query,
      params: slugToExclude ? { slug: slugToExclude } : {},
    });

    return data ?? [];
  } catch (error) {
    console.error("Error fetching latest blogs:", error);
    return [];
  }
};

const getPublishedBlogs = async () => {
  try {
    const blogs = await sanityFetch({ GET_ALL_PUBLISHED_BLOGS });
    return blogs ?? [];
  } catch (error) {
    console.log("Error fetching latest Blogs:", error);
    return [];
  }
};
const getAllBlogsByQuantity = async (quantity: number) => {
  try {
    const { data } = await sanityFetch({
      query: GET_ALL_BLOG,
      params: { quantity },
    });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all brands:", error);
    return [];
  }
};
const getAllBlogs = async () => {
  try {
    const { data } = await sanityFetch({
      query: GET_ALL_BLOGS, // ✅ yeni versiyonda $quantity parametresi yok
    });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all blogs:", error);
    return [];
  }
};

const getSingleBlog = async (slug: string) => {
  try {
    const { data } = await sanityFetch({
      query: SINGLE_BLOG_QUERY,
      params: { slug },
    });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all brands:", error);
    return [];
  }
};
const getBlogCategories = async () => {
  try {
    const { data } = await sanityFetch({
      query: BLOG_CATEGORIES,
    });
    const map = new Map<string, { title: string; count: number }>();

    data.forEach((blog) => {
      blog.blogcategories?.forEach((cat) => {
        if (!cat?.title) return;

        const existing = map.get(cat.title);
        if (existing) {
          existing.count += 1;
        } else {
          map.set(cat.title, { title: cat.title, count: 1 });
        }
      });
    });

    return Array.from(map.values());
  } catch (error) {
    console.log("Error fetching all brands:", error);
    return [];
  }
};

const getOthersBlog = async (slug: string, quantity: number) => {
  try {
    const { data } = await sanityFetch({
      query: OTHERS_BLOG_QUERY,
      params: { slug, quantity },
    });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all brands:", error);
    return [];
  }
};

const getMostViewedBlogs = async () => {
  try {
    const { data } = await sanityFetch({
      query: MOST_VIEWED_BLOGS_QUERY,
    });
    return data ?? [];
  } catch (error) {
    console.error("Error fetching most viewed blogs:", error);
    return [];
  }
};
export {
  getCategories,
  getLatestBlogs,
  getAllBlogsByQuantity,
  getAllBlogs,
  getSingleBlog,
  getBlogCategories,
  getOthersBlog,
  getPublishedBlogs,
  getMostViewedBlogs
};
