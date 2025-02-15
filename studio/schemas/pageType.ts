import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'page',
      title: 'Page',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'page',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'page',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      group: 'page',
      of: [
        defineArrayMember({
          name: 'blockContent',
          type: 'blockContent',
        }),
        defineArrayMember({
          name: 'blockHeroImage',
          type: 'blockHeroImage',
        }),
        defineArrayMember({
          name: 'blockHeroVideo',
          type: 'blockHeroVideo',
        }),
        // defineArrayMember({
        //   name: 'textWithIllustration',
        //   type: 'textWithIllustration',
        // }),
        // defineArrayMember({
        //   name: 'gallery',
        //   type: 'gallery',
        // }),
        // defineArrayMember({
        //   name: 'form',
        //   type: 'form',
        // }),
        // defineArrayMember({
        //   name: 'video',
        //   type: 'video',
        // }),
        // defineArrayMember({
        //   name: 'callToAction',
        //   type: 'reference',
        //   to: [{type: 'promotion'}],
        // }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
})
