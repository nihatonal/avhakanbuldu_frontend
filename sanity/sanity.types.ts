// sanity/sanity.types.ts
export type Blog = {
    _id: string;
    title: string;
    slug: { current: string };
    content: any[];
    category: string;
  };
  
  export type SINGLE_BLOG_QUERYResult = {
    blog: Blog;
  };
  