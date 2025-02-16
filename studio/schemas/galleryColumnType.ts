import {defineField, defineType} from 'sanity'
import {InlineIcon} from '@sanity/icons'

export default defineType({
  name: 'galleryColumn',
  title: 'Gallery Column',
  type: 'object',
  icon: InlineIcon,
  initialValue: {
    span: 1,
  },
  fields: [
    defineField({
      name: 'span',
      title: 'Span Columns',
      type: 'number',
      options: {
        list: [
          {title: '1', value: 1},
          {title: '2', value: 2},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [{type: 'media'}],
    }),
  ],
  preview: {
    select: {
      image: 'media[0].image',
      media: 'media',
      span: 'span',
    },
    prepare(selection) {
      const {image, media, span} = selection
      return {
        title: `Spans ${span} Column${span > 1 ? 's' : ''} With ${media.length} Media`,
        subtitle: 'Gallery Column',
        media: image ?? InlineIcon,
      }
    },
  },
})
