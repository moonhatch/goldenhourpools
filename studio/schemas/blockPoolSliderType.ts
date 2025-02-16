import {defineField, defineType} from 'sanity'
import {TransferIcon} from '@sanity/icons'

export default defineType({
  name: 'blockPoolSlider',
  type: 'object',
  title: 'Pool Slider Block',
  icon: TransferIcon,
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
        subtitle: 'Block Pool Slider',
        media: TransferIcon,
      }
    },
  },
})
