import {defineField, defineType} from 'sanity'
import {SunIcon} from '@sanity/icons'

export default defineType({
  name: 'poolVariant',
  type: 'object',
  title: 'Pool Variant',
  icon: SunIcon,
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
      name: 'depth',
      title: 'Depth',
      type: 'string',
      options: {
        list: [
          {title: 'Deep', value: 'deep'},
          {title: 'Shallow', value: 'shallow'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'hasLedge',
      title: 'Has Ledge',
      type: 'boolean',
    }),
    defineField({
      name: 'hasSpa',
      title: 'Has Spa',
      type: 'boolean',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'poolDescription'}],
    }),
    defineField({
      name: 'addons',
      title: 'Add-ons',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'addon',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      subtitle: 'slug.current',
      media: 'image',
    },
    prepare(selection) {
      const {title, price, subtitle, media} = selection
      return {
        title: `${title}, ${price}`,
        subtitle,
        media,
      }
    },
  },
})
