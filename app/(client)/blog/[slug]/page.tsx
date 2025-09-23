import Container from "@/components/Container";
import Title from "@/components/Title";
import { SINGLE_BLOG_QUERYResult } from "@/sanity/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import {
    getBlogCategories,
    getOthersBlog,
    getSingleBlog,
} from "@/sanity/queries";
import dayjs from "dayjs";
import { Calendar, ChevronLeftIcon } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import NotReadyBlog from '../../../../assets/images/not-ready-blog-main-image.webp'
const SingleBlogPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const blog: SINGLE_BLOG_QUERYResult = await getSingleBlog(slug);
    if (!blog) return notFound();
    
    return (
        <div className="py-10 bg-gray-100">
            <Container className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="md:col-span-3">
                    {blog?.mainImage && (
                        <Image
                            src={urlFor(blog?.mainImage).url()}
                            alt={blog.title || "Blog Image"}
                            width={600}
                            height={600}
                            className="w-full max-h-[350px] object-cover rounded-lg"
                        />
                    )}
                    {!blog?.mainImage && (
                        <Image
                            src={NotReadyBlog}
                            alt={blog.title || "Blog Image"}
                            width={600}
                            height={600}
                            className="w-full max-h-[350px] object-cover rounded-lg"
                        />
                    )}
                    <div>
                        <div className="text-xs flex items-center gap-5 my-7">
                            <div className="flex items-center gap-2 group cursor-pointer">
                                {blog?.blogcategories?.map(
                                    (item: { title: string }, index: number) => (
                                        <p
                                            key={index}
                                            className="relative font-semibold text-muted-foreground tracking-wider"
                                        >
                                            {item?.title}
                                            <span className="absolute left-0 -bottom-1.5 bg-muted-foreground/30 inline-block w-full h-[2px] hover:bg-shop_dark_green hover:cursor-pointer hoverEffect" />
                                        </p>
                                    )
                                )}

                            </div>
                            <p className="flex items-center gap-1 text-muted-foreground relative group hover:cursor-pointer hover:text-shop_dark_green hoverEffect">
                                <Calendar size={15} />{" "}
                                {dayjs(blog.publishedAt).format("MMMM D, YYYY")}
                                <span className="absolute left-0 -bottom-1.5 bg-muted-foreground/30 inline-block w-full h-[2px] group-hover:bg-shop_dark_green hoverEffect" />
                            </p>
                        </div>
                        <h2 className="text-2xl font-bold my-5 text-primary">{blog?.title}</h2>
                        <div className="flex flex-col">
                            <div className="text-primary">
                                <div>
                                    {blog.body && (
                                        <PortableText
                                            value={blog.body}
                                            components={{
                                                block: {
                                                    normal: ({ children }) => (
                                                        <p className="my-6 text-base leading-relaxed text-[hsl(var(--foreground))]">
                                                            {children}
                                                        </p>
                                                    ),
                                                    h2: ({ children }) => (
                                                        <h2 className="my-8 text-3xl font-bold text-[hsl(var(--primary))] tracking-tight">
                                                            {children}
                                                        </h2>
                                                    ),
                                                    h3: ({ children }) => (
                                                        <h3 className="my-6 text-2xl font-semibold text-[hsl(var(--primary-light))] tracking-tight">
                                                            {children}
                                                        </h3>
                                                    ),
                                                    blockquote: ({ children }) => (
                                                        <blockquote className="my-6 pl-6 border-l-4 border-[hsl(var(--accent))] italic text-[hsl(var(--foreground))] bg-[hsl(var(--secondary))] rounded-md py-2">
                                                            {children}
                                                        </blockquote>
                                                    ),
                                                },
                                                types: {
                                                    image: ({ value }) => (
                                                        <Image
                                                            alt={value.alt || ""}
                                                            src={urlFor(value).width(1600).quality(80).url()}
                                                            width={1600}
                                                            height={900}
                                                            className="rounded-xl shadow-card my-8"
                                                        />
                                                    ),
                                                    separator: ({ value }) => {
                                                        if (value.style === "line") {
                                                            return <hr className="my-10 border-t border-[hsl(var(--border))]" />
                                                        }
                                                        if (value.style === "space") {
                                                            return <div className="my-10" />
                                                        }
                                                        return null
                                                    },
                                                },
                                                list: {
                                                    bullet: ({ children }) => (
                                                        <ul className="list-disc pl-6 space-y-2 text-base text-[hsl(var(--foreground))]">
                                                            {children}
                                                        </ul>
                                                    ),
                                                    number: ({ children }) => (
                                                        <ol className="list-decimal pl-6 space-y-2 text-base text-[hsl(var(--foreground))]">
                                                            {children}
                                                        </ol>
                                                    ),
                                                },
                                                listItem: {
                                                    bullet: ({ children }) => <li className="pl-1">{children}</li>,
                                                    number: ({ children }) => <li className="pl-1">{children}</li>,
                                                },
                                                marks: {
                                                    strong: ({ children }) => (
                                                        <strong className="font-semibold text-[hsl(var(--foreground))]">
                                                            {children}
                                                        </strong>
                                                    ),
                                                    code: ({ children }) => (
                                                        <code className="bg-[hsl(var(--secondary))] px-2 py-1 text-sm rounded-md font-mono text-[hsl(var(--foreground))]">
                                                            {children}
                                                        </code>
                                                    ),
                                                    link: ({ value, children }) => (
                                                        <Link
                                                            href={value.href}
                                                            target={value.href.startsWith("http") ? "_blank" : undefined}
                                                            rel={value.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                            className="underline underline-offset-4 text-[hsl(var(--accent))] hover:text-[hsl(var(--accent-dark))]"
                                                        >
                                                            {children}
                                                        </Link>
                                                    ),
                                                },
                                            }}
                                        />

                                    )}
                                    {!blog.body && (
                                        <div className="mt-8 rounded-lg bg-yellow-50 border border-yellow-300 text-yellow-800 px-6 py-4 text-center shadow-sm">
                                            <h3 className="text-lg font-semibold mb-1">Makale Hazırlanıyor</h3>
                                            <p className="text-sm">
                                                Bu içerik henüz yayına hazır değil. Kısa süre içinde güncellenecektir.
                                            </p>
                                        </div>
                                    )}

                                    <div className="mt-10">
                                        <Link href="/blog" className="flex items-center gap-1">
                                            <ChevronLeftIcon className="size-5" />
                                            <span className="text-sm font-semibold">
                                                Blog
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BlogLeft slug={slug} />
            </Container>
        </div>
    );
};

const BlogLeft = async ({ slug }: { slug: string }) => {
    const categories = await getBlogCategories();
    const blogs = await getOthersBlog(slug, 5);

    return (
        <div>
            <div className="border border-primary-light p-5 rounded-md">
                <Title className="text-base">Blog Categories</Title>
                <div className="space-y-2 mt-2">
                    {categories?.map((blogcategories, index) => (
                        <div
                            key={index}
                            className="text-primary flex items-center justify-between text-sm font-medium"
                        >
                            <p>{blogcategories?.title}</p>
                            <p className="text-darkColor font-semibold">{blogcategories?.count}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border border-primary-light p-5 rounded-md mt-10">
                <Title className="text-base">Latest Blogs</Title>
                <div className="space-y-4 mt-4">
                    {blogs?.map((blog: Blog, index: number) => (
                        <Link
                            href={`/blog/${blog?.slug?.current}`}
                            key={index}
                            className="flex items-center gap-2 group"
                        >
                            {blog?.mainImage && (
                                <Image
                                    src={urlFor(blog?.mainImage).url()}
                                    alt="blogImage"
                                    width={100}
                                    height={100}
                                    className="w-16 h-16 rounded-full object-cover border-[1px] border-shop_dark_green/10 group-hover:border-shop_dark_green hoverEffect"
                                />
                            )}
                            {!blog?.mainImage && (
                                <Image
                                    src={NotReadyBlog}
                                    alt="blogImage"
                                    width={100}
                                    height={100}
                                    className="w-16 h-16 rounded-full object-cover border-[1px] border-shop_dark_green/10 group-hover:border-shop_dark_green hoverEffect"
                                />
                            )}
                            <p className="line-clamp-2 text-sm text-primary group-hover:text-shop_dark_green hoverEffect">
                                {blog?.title}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleBlogPage;
