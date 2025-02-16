import {defineField, defineType} from 'sanity'
import {BookIcon} from '@sanity/icons'

export default defineType({
  name: 'blockFAQ',
  type: 'object',
  title: 'FAQ Block',
  icon: BookIcon,
  groups: [
    {
      name: 'component',
      title: 'Component',
      default: true,
    },
    {
      name: 'container',
      title: 'Container',
    },
  ],
  fields: [
    defineField({
      name: 'container',
      title: 'Container',
      type: 'container',
      group: 'container',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      group: 'component',
      of: [{type: 'faq'}],
    }),
  ],
  preview: {
    select: {
      faqs: 'faqs',
    },
    prepare(selection) {
      const {faqs} = selection
      return {
        title: faqs[0]?.question ?? 'Block FAQ',
        subtitle: 'Block FAQ',
        media: BookIcon,
      }
    },
  },
})
