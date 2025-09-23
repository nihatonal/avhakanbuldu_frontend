// sanity/sanity.types.ts
export type Blog = {
  _id: string;
  title: string;
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  slug: { current: string };
  body: any[];
  category: { title: string }[];
};

export type SINGLE_BLOG_QUERYResult = {
  blog: Blog;
};
