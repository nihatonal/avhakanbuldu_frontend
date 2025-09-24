// app/blog/page.tsx
import { getAllBlogs } from "@/sanity/queries";
import { getLatestBlogs } from "@/sanity/queries/index";
import BlogPageClient from "./BlogPageClient";

interface BlogPageProps {
  searchParams?: { category?: string };
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  // searchParams async olarak çözülmeli
  const params = await searchParams;
  const selectedCategory = params?.category || "";

  const blogs = await getAllBlogs();
  const latestBlogs = await getLatestBlogs();

  return (
    <BlogPageClient
      blogs={blogs}
      popularBlogs={latestBlogs}
      initialCategory={selectedCategory} // client component'e gönder
    />
  );
};

export default BlogPage;
