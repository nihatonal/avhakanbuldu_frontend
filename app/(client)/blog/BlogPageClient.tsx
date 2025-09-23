"use client";

import React, { useState, useMemo } from "react";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { urlFor } from "@/sanity/lib/image";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import NotReadyBlog from '../../../assets/images/not-ready-blog-main-image.webp';
import CategorySelect from "@/components/CategorySelect ";
import { blockContentToText } from "@/lib/blockContentToText";
interface Blog {
    _id: string;
    title: string;
    body: Array<{
        _key: string;
        _type: string;
        children: Array<{ _key: string; text: string; marks: string[] }>;
    }>;
    mainImage?: {
        asset: {
            url: string;
        };
        alt?: string;
    };
    slug: { current: string };
    publishedAt: string;
    blogcategories?: { title: string }[];
}

interface BlogPageProps {
    blogs: Blog[];
    popularBlogs?: Blog[];
}

const BlogPageClient: React.FC<BlogPageProps> = ({ blogs, popularBlogs = [] }) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = useMemo(() => {
        return Array.from(
            new Set(
                blogs.flatMap(blog => blog.blogcategories?.map(cat => cat.title) || [])
            )
        );
    }, [blogs]);

    const filteredBlogs = useMemo(() => {
        return blogs.filter((blog) => {
            const matchesCategory =
                !selectedCategory || blog.blogcategories?.some((cat) => cat.title === selectedCategory);

            const contentText = blockContentToText(blog.body || "");
            const matchesSearch =
                !searchQuery ||
                blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                contentText.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [blogs, selectedCategory, searchQuery]);

    return (
        <div className="bg-[#FCF9F3] py-10">
            <Container>
                <Title>Blog</Title>
                <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-0 md:gap-8 mt-8 text-primary">
                    {/* Sidebar */}
                    <aside className="bg-[#fefdfb] md:bg-transparent p-4 md:p-0 sticky top-16 md:top-24 md:space-y-6 z-10">
                        {/* Search */}
                        <div>
                            <input
                                type="text"
                                placeholder="Ara..."
                                className="w-full px-4 py-2 mb-4 md:mb-0 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Categories */}
                        <div>
                            <h4 className="font-semibold text-lg md:mb-2">Kategoriler</h4>
                            <CategorySelect
                                categories={categories}
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                            />
                        </div>

                        {/* Popular blogs */}
                        {popularBlogs.length > 0 && (
                            <div className="hidden md:block">
                                <h4 className="font-semibold text-lg mb-2">Popüler Yazılar</h4>
                                <ul className="space-y-3">
                                    {popularBlogs.map((blog) => (
                                        <li key={blog._id}>
                                            <Link href={`/blog/${blog.slug.current}`} className="text-primary hover:text-accent hover:underline line-clamp-2">
                                                {blog.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </aside>

                    {/* Main content */}

                    <div className="space-y-4 mt-5 md:mt-0">
                        {filteredBlogs.map((blog) => (
                            <Link
                                key={blog._id}
                                href={`/blog/${blog.slug.current}`}
                                className="flex items-start gap-4 p-4 md:p-0 md:pr-4 bg-gray-50 group rounded-md shadow-sm hover:shadow-md transition"
                            >
                                {/* Thumbnail - gizli mobilde */}
                                <div className="hidden sm:flex flex-shrink-0 w-24 h-20 overflow-hidden rounded-md bg-gray-200">
                                    <Image
                                        src={blog.mainImage ? urlFor(blog.mainImage).url() : NotReadyBlog}
                                        alt={blog.title}
                                        width={96}
                                        height={96}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Blog Bilgileri */}
                                <div className="flex-1 w-full">
                                    <div className="hidden md:flex flex-wrap items-center gap-2 text-xs mb-1">
                                        {blog.blogcategories?.map((cat, index) => (
                                            <span key={index} className="bg-primary/20 text-primary px-2 py-0.5 rounded">
                                                {cat.title}
                                            </span>
                                        ))}
                                        <span className="flex items-center gap-1 text-primary ml-auto">
                                            <Calendar size={14} /> {dayjs(blog.publishedAt).format("MMM D, YYYY")}
                                        </span>
                                    </div>
                                    <h3 className="grid grid-cols-1 font-bold text-base text-primary line-clamp-2 group-hover:text-accent">
                                        {blog.title}
                                        <span className="md:hidden flex items-center gap-1 ml-auto text-xs text-muted-foreground ml-auto">
                                            <Calendar size={14} /> {dayjs(blog.publishedAt).format("MMM D, YYYY")}
                                        </span>
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>


                </div>
            </Container>
        </div>
    );
};

export default BlogPageClient;
