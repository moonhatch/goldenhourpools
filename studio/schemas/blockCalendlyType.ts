import {defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export default defineType({
  name: 'blockCalendly',
  type: 'object',
  title: 'Calendly Block',
  icon: CalendarIcon,
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
      name: 'embedId',
      title: 'Embed Id',
      type: 'string',
      group: 'component',
    }),
  ],
  preview: {
    select: {
      embedId: 'embedId',
    },
    prepare(selection) {
      const {embedId} = selection
      return {
        title: embedId ?? 'Block Calendly',
        subtitle: 'Block Calendly',
        media: CalendarIcon,
      }
    },
  },
})
