// app/rss/route.ts
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const siteUrl = "https://www.hakanbuldu.com";

export async function GET() {
  const posts = await client.fetch(`*[_type == "blog" && !(_id in path("drafts.**"))] | order(publishedAt desc){
    title,
    slug,
    description,
    publishedAt,
    mainImage
  }`);

  const rssItems = posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug.current}</link>
      <guid>${siteUrl}/blog/${post.slug.current}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.description || ''}]]></description>
      ${post.mainImage ? `<enclosure url="${urlFor(post.mainImage).url()}" type="image/jpeg" />` : ''}
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Hakan Buldu Blog</title>
      <link>${siteUrl}/blog</link>
      <description>Av. Hakan Buldu'nun blog yazıları</description>
      <language>tr-TR</language>
      ${rssItems}
    </channel>
  </rss>`;

  return new NextResponse(rss, {
    headers: { "Content-Type": "application/xml" },
  });
}
