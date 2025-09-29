import { practicesData } from "@/constants/practiceAreas";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

type SitemapEntry = {
  loc: string;
  lastmod: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
};

type BlogResult = {
  slug: {
    current: string;
  };
  publishedAt?: string;
};

export async function GET() {
  // Dinamik içerikler
  const blogs: BlogResult[] = await client.fetch(
    `*[_type=="blog"]{slug, publishedAt}`
  );

  const services: string[] = practicesData.map((item) => item.slug);

  // Statik sayfalar
  const staticPages: SitemapEntry[] = [
    {
      loc: "/",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 1.0,
    },
    {
      loc: "/hakkinda",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/iletisim",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/faaliyet-alanlari",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/blog",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/gizlilik-politikasi",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/kullanim-sartlari",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/cerez-politikasi",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/telif-ve-marka-haklari",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
  ];

  // Blog URL'leri
  const blogUrls: SitemapEntry[] = blogs.map((blog) => ({
    loc: `/blog/${blog.slug.current}`,
    lastmod: blog.publishedAt
      ? new Date(blog.publishedAt).toISOString()
      : new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7,
  }));

  // Service URL'leri
  const serviceUrls: SitemapEntry[] = services.map((slug) => ({
    loc: `/faaliyet-alanlari/${slug}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7,
  }));

  // Tüm URL'leri birleştir
  const allUrls: SitemapEntry[] = [...staticPages, ...blogUrls, ...serviceUrls];

  const urlset = allUrls
    .map(
      (url) => `
    <url>
      <loc>https://www.hakanbuldu.com${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
