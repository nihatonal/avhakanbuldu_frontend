import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "blogcategories",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: { type: "blogcategory" } }),
      ],
    }),
    defineField({ name: "publishedAt", type: "datetime" }),
    defineField({
      name: "isLatest",
      title: "Latest Blog",
      type: "boolean",
      description: "Toggle to Latest on or off",
      initialValue: true,
    }),
    defineField({ name: "body", type: "blockContent" }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      isLatest: "isLatest",
      category0: "blogcategories.0.title",
      category1: "blogcategories.1.title",
      body: "body",
    },
    prepare({ title, media, isLatest, category0, category1 }) {
      const categoryNames =
        [category0, category1].filter(Boolean).join(", ") || "No category";


      return {
        title,
        media,
        subtitle: `${isLatest ? "Latest | " : ""}${categoryNames}`,
      };
    },
  },
});
