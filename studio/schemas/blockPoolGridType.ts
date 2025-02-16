import {defineField, defineType} from 'sanity'
import {ThLargeIcon} from '@sanity/icons'

export default defineType({
  name: 'blockPoolGrid',
  type: 'object',
  title: 'Pool Grid Block',
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
      name: 'pools',
      title: 'Pools',
      type: 'array',
      group: 'component',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'pool',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      pools: 'pools',
    },
    prepare(selection) {
      const {pools} = selection
      return {
        title: `${pools.length} Pools`,
        subtitle: 'Block Pool Grid',
        media: ThLargeIcon,
      }
    },
  },
})
