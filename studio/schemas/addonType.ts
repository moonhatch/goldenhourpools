import {defineArrayMember, defineField, defineType} from 'sanity'
import {AddIcon} from '@sanity/icons'

export default defineType({
  name: 'addon',
  title: 'Add-on',
  type: 'document',
  icon: AddIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      subtitle: 'slug.current',
    },
    prepare(selection) {
      const {title, subtitle, price} = selection
      return {
        title: `${title}, ${price}`,
        subtitle,
        media: AddIcon,
      }
    },
  },
})
