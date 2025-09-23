// app/blog/page.tsx (Server Component)
import { getAllBlogs } from "@/sanity/queries";
import BlogPageClient from "./BlogPageClient";

const BlogPage = async () => {
  const blogs = await getAllBlogs();

  return <BlogPageClient blogs={blogs} popularBlogs={blogs} />;
};

export default BlogPage;