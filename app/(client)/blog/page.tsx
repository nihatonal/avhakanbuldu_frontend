// app/blog/page.tsx
import { getAllBlogs } from "@/sanity/queries";
import BlogPageClient from "./BlogPageClient";

interface BlogPageProps {
  searchParams?: { category?: string };
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  // searchParams async olarak çözülmeli
  const params = await searchParams;
  const selectedCategory = params?.category || "";

  const blogs = await getAllBlogs();

  return (
    <BlogPageClient
      blogs={blogs}
      popularBlogs={blogs}
      initialCategory={selectedCategory} // client component'e gönder
    />
  );
};

export default BlogPage;
