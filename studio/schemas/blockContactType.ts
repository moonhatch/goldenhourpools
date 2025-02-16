import {defineField, defineType} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export default defineType({
  name: 'blockContact',
  type: 'object',
  title: 'Contact Block',
  icon: EnvelopeIcon,
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
        title: heading ?? 'Block Contact',
        subtitle: 'Block Contact',
        media: EnvelopeIcon,
      }
    },
  },
})
