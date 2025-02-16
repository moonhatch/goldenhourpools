import {defineField, defineType, defineArrayMember} from 'sanity'
import {BookIcon} from '@sanity/icons'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
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
                        const msg =
                          'Must either start with "/", or with one of: "https://", "mailto:", or "tel:"'
                        return isValid || msg
                      }),
                  },
                ],
              },
            ],
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      answer: 'answer',
      question: 'question',
    },
    prepare(selection) {
      const {answer, question} = selection
      return {
        title: question ?? 'Question',
        subtitle: answer[0]?.children[0]?.text ?? 'Answer',
        media: BookIcon,
      }
    },
  },
})
