import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Slug gerekli" }, { status: 400 });
  }

  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]`,
    { slug }
  );

  if (!blog) {
    return NextResponse.json({ error: "Blog bulunamadı" }, { status: 404 });
  }

  if (typeof blog.viewCount !== "number") {
    await client.patch(blog._id).set({ viewCount: 1 }).commit();
  } else {
    await client.patch(blog._id).inc({ viewCount: 1 }).commit();
  }

  return NextResponse.json({ message: "Görüntülenme sayısı artırıldı" });
}
