import {defineField, defineType} from 'sanity'

export const videoType = defineType({
  name: 'video',
  type: 'object',
  fields: [
    defineField({
      name: 'videoLabel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
