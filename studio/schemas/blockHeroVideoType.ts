import {defineField, defineType} from 'sanity'
import {PlayIcon} from '@sanity/icons'

export default defineType({
  name: 'blockHeroVideo',
  type: 'object',
  title: 'Hero With Video Block',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
    defineField({
      name: 'url',
      title: 'Embed URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'urlTitle',
      title: 'Embed Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'urlThumbnail',
      title: 'Embed Thumbnail',
      type: 'image',
      options: {hotspot: false},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      thumbnail: 'urlThumbnail',
    },
    prepare(selection) {
      const {heading, thumbnail} = selection
      return {
        title: heading ?? 'Block Hero With Video',
        subtitle: 'Block Hero With Video',
        media: thumbnail ?? PlayIcon,
      }
    },
  },
})
