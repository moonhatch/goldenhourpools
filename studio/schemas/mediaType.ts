import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export default defineType({
  name: 'media',
  title: 'Media',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'showVideo',
      title: 'Show Video',
      type: 'boolean',
      description: 'Toggle on to show a video instead of an image',
    }),
    defineField({
      name: 'isRounded',
      title: 'Is Rounded',
      type: 'boolean',
      description: 'Toggle on to round the media corners',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }),
      ],
      hidden: ({parent, value}) => parent?.showVideo,
    }),
    defineField({
      name: 'url',
      title: 'Embed URL',
      type: 'url',
      hidden: ({parent, value}) => !parent?.showVideo,
    }),
    defineField({
      name: 'urlTitle',
      title: 'Embed Title',
      type: 'string',
      hidden: ({parent, value}) => !parent?.showVideo,
    }),
    defineField({
      name: 'aspect',
      title: 'Aspect Ratio',
      type: 'number',
      options: {
        list: [
          {title: '16 / 9', value: 16 / 9},
          {title: '3 / 2', value: 3 / 2},
          {title: '7 / 5', value: 7 / 5},
          {title: '5 / 4', value: 5 / 4},
          {title: '1 / 1', value: 1 / 1},
          {title: '4 / 5', value: 4 / 5},
          {title: '5 / 7', value: 5 / 7},
          {title: '2 / 3', value: 2 / 3},
          {title: '9 / 16', value: 9 / 16},
        ],
      },
    }),
    defineField({
      name: 'aspectDesktop',
      title: 'Aspect Ratio Desktop',
      type: 'number',
      options: {
        list: [
          {title: '16 / 9', value: 16 / 9},
          {title: '3 / 2', value: 3 / 2},
          {title: '7 / 5', value: 7 / 5},
          {title: '5 / 4', value: 5 / 4},
          {title: '1 / 1', value: 1 / 1},
          {title: '4 / 5', value: 4 / 5},
          {title: '5 / 7', value: 5 / 7},
          {title: '2 / 3', value: 2 / 3},
          {title: '9 / 16', value: 9 / 16},
        ],
      },
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
    }),
  ],
})
