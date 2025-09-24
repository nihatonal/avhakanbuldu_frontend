import { PortableTextBlock } from "@portabletext/types";

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
  body: PortableTextBlock[]; // ✔️ doğru tür bu!
  category: { title: string }[]; // Not: blogcategories yerine category diyorsan diğer dosyaları da buna göre güncelle
};

export type SINGLE_BLOG_QUERYResult = Blog;
