import {defineField, defineType} from 'sanity'

export const heroWithImageType = defineType({
  name: 'heroWithImage',
  type: 'object',
  title: 'Hero',
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
      type: 'string',
      group: 'component',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      group: 'component',
    }),
    defineField({
      name: 'image',
      type: 'image',
      group: 'component',
      options: {hotspot: true},
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
})
