import S from "@sanity/desk-tool/structure-builder";
import Iframe from "sanity-plugin-iframe-pane";

export const getDefaultDocumentNode = (props) => {
  if (props.schemaType === "blog") {
    return S.document().views([
      S.view.form(), // standart edit form
      S.view
        .component(Iframe)
        .options({
          // Frontend URL’iniz burada olmalı
          url: (doc) =>
            `https://localhost:3000/blog/${doc.slug.current}?preview=true`,
          reload: { button: true }, // Yenile butonu
        })
        .title("Live Preview"), // Studio’daki sekme başlığı
    ]);
  }
  return S.document();
};
