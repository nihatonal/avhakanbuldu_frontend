import S from '@sanity/desk-tool/structure-builder'
import { CustomPreview } from './CustomPreview'

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Blog')
        .schemaType('blog')
        .child(
          // 🔥 Burada artık tekil doküman açılınca views kullanılabilir
          S.documentTypeList('blog').child((docId) =>
            S.document()
              .documentId(docId)
              .schemaType('blog')
              .views([
                S.view.form(),
                S.view.component(CustomPreview).title('Live Preview'),
              ])
          )
        ),
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'blog'),
    ])
