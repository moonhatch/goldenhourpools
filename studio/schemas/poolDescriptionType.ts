import {defineField, defineType, defineArrayMember} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export default defineType({
  name: 'poolDescription',
  title: 'Pool Description',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [],
            annotations: [],
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      value: 'value',
    },
    prepare(selection) {
      const {name, value} = selection
      return {
        title: name ?? 'Name',
        subtitle: value[0]?.children[0]?.text ?? 'value',
        media: BlockContentIcon,
      }
    },
  },
})
