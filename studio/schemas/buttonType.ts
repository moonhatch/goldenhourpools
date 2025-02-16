import {defineField, defineType} from 'sanity'
import {SquareIcon} from '@sanity/icons'

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  icon: SquareIcon,
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'to',
      title: 'To',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['http', 'https', 'mailto', 'tel'],
        }).custom((url) => {
          if (!url) return 'URL is required'
          const isRelative = url.startsWith('/')
          const hasValidProtocol = ['https', 'mailto', 'tel'].some((protocol) =>
            url.startsWith(`${protocol}:`),
          )
          const isValid = isRelative || hasValidProtocol
          const msg = 'Must either start with "/", or with one of: "https://", "mailto:", or "tel:"'
          return isValid || msg
        }),
    }),
  ],
})
