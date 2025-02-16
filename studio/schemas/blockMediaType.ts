import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export default defineType({
  name: 'blockMedia',
  type: 'object',
  title: 'Media Block',
  icon: ImageIcon,
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
      name: 'media',
      title: 'Media',
      type: 'media',
      group: 'component',
    }),
  ],
  preview: {
    select: {
      media: 'media',
    },
    prepare(selection) {
      const {media} = selection
      return {
        title: 'Block Media',
        subtitle: 'Block Media',
        media: media?.image ?? ImageIcon,
      }
    },
  },
})
