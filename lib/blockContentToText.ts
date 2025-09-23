// lib/blockContentToText.ts
import { PortableTextBlock } from "@sanity/types";

export const blockContentToText = (
  blocks: PortableTextBlock[] | string
): string => {
  if (!blocks) return "";

  // Eğer içerik string ise direkt döndür
  if (typeof blocks === "string") return blocks;

  // PortableText bloklarını düz metin haline çevir
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) return "";
      return block.children.map((child) => child.text).join("");
    })
    .join("\n");
};
