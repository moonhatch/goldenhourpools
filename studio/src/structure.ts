import {CogIcon} from '@sanity/icons'

export const structure = (S, context) =>
  S.list()
    .title('Site Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.editor().id('siteSettings').schemaType('siteSettings').documentId('siteSettings')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings'].includes(listItem.getId()),
      ),
    ])
