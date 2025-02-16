import {defineField, defineType} from 'sanity'
import {CheckmarkIcon} from '@sanity/icons'

export default defineType({
  name: 'blockThankYou',
  type: 'object',
  title: 'Thank You Block',
  icon: CheckmarkIcon,
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
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'component',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare(selection) {
      const {heading} = selection
      return {
        title: heading ?? 'Block Thank You',
        subtitle: 'Block Thank You',
        media: CheckmarkIcon,
      }
    },
  },
})
