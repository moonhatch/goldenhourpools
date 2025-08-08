import {defineField, defineType} from 'sanity'
import {ThLargeIcon} from '@sanity/icons'

export default defineType({
  name: 'blockLandscapeGrid',
  type: 'object',
  title: 'Landscape Grid Block',
  icon: ThLargeIcon,
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
      name: 'landscapes',
      title: 'Landscapes',
      type: 'array',
      group: 'component',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'landscape',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      landscapes: 'landscapes',
    },
    prepare(selection) {
      const {landscapes} = selection
      return {
        title: `${landscapes.length} Landscapes`,
        subtitle: 'Block Landscape Grid',
        media: ThLargeIcon,
      }
    },
  },
})
