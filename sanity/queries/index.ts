import { sanityFetch } from "../lib/live";
import {
  BLOG_CATEGORIES,
  GET_ALL_BLOG,
  GET_ALL_BLOGS,
  LATEST_BLOG_QUERY,
  OTHERS_BLOG_QUERY,
  SINGLE_BLOG_QUERY,
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



const getLatestBlogs = async () => {
  try {
    const { data } = await sanityFetch({ query: LATEST_BLOG_QUERY });
    return data ?? [];
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
    return data ?? [];
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
export {
  getCategories,
  getLatestBlogs,
  getAllBlogsByQuantity,
  getAllBlogs,
  getSingleBlog,
  getBlogCategories,
  getOthersBlog,
};
