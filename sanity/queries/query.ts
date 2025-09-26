import { defineQuery } from "next-sanity";

const LATEST_BLOG_QUERY = defineQuery(`
  *[_type == 'blog' && (!defined($slug) || slug.current != $slug)] 
  | order(publishedAt desc)[0...5] {
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
`);
const OTHERS_BLOG_QUERY = defineQuery(`
  *[_type == "blog" && defined(slug.current) && slug.current != $slug]
  | order(publishedAt desc)[0...$quantity]{
    ...,
    readingTime,
    description,
    publishedAt,
    title,
    mainImage,
    slug,
    blogcategories[]->{
      title,
      "slug": slug.current
    }
  }
`);

const GET_ALL_BLOG = defineQuery(`
  *[_type == 'blog'] | order(publishedAt desc)[0...$quantity]{
    ...,
    readingTime,
    blogcategories[]->{
      title
    }
  }
`);

const GET_ALL_BLOGS = defineQuery(`
  *[_type == 'blog'] | order(publishedAt desc){
    ...,
    blogcategories[]->{
      title
    }
  }
`);

const SINGLE_BLOG_QUERY = defineQuery(`
  *[_type == "blog" && slug.current == $slug][0]{
    ...,
    title,
    publishedAt,
    readingTime,
    description,
    body,
    mainImage,
    viewCount, 
    blogcategories[]->{
      title,
      "slug": slug.current,
    },
  }
`);

const BLOG_CATEGORIES = defineQuery(`
  *[_type == "blog"]{
    blogcategories[]->{
      _id,
      title,
    }
  }
`);

const GET_ALL_PUBLISHED_BLOGS = defineQuery(`
*[_type == "blog" && !(_id in path("drafts.**"))]{slug}
`);

const MOST_VIEWED_BLOGS_QUERY = `
  *[_type == "blog" && defined(viewCount)]
  | order(viewCount desc)[0...3] {
    _id,
    title,
    slug,
    viewCount,
    publishedAt,
    mainImage,
    readingTime,
    blogcategories[]->{
      title
    }
  }
`;

export {
  LATEST_BLOG_QUERY,
  GET_ALL_BLOG,
  GET_ALL_BLOGS,
  SINGLE_BLOG_QUERY,
  BLOG_CATEGORIES,
  OTHERS_BLOG_QUERY,
  GET_ALL_PUBLISHED_BLOGS,
  MOST_VIEWED_BLOGS_QUERY
};
