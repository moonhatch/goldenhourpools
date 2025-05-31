import {defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export default defineType({
  name: 'blockZohoBooking',
  type: 'object',
  title: 'Zoho Booking Block',
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
      name: 'iframeSrc',
      title: 'iFrame Src',
      type: 'url',
      group: 'component',
      validation: (Rule) => Rule.required(),
      description: 'The "src" value from the "Embed as Widget" snippet',
    }),
  ],
  preview: {
    select: {
      iframeSrc: 'iframeSrc',
    },
    prepare(selection) {
      const {iframeSrc} = selection
      return {
        title: iframeSrc ?? 'Block Zoho Booking',
        subtitle: 'Block Zoho Booking',
        media: CalendarIcon,
      }
    },
  },
})
