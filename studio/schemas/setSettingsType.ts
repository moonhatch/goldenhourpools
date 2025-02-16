import {defineType, defineField, SanityDocumentLike} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'announcement',
      title: 'Announcement',
      type: 'string',
    }),
    defineField({
      name: 'navLinksPrimary',
      title: 'Primary Nav Links',
      type: 'array',
      of: [
        defineField({
          name: 'link',
          type: 'link',
        }),
      ],
    }),
    defineField({
      name: 'navLinksSecondary',
      title: 'Secondary Nav Links',
      type: 'array',
      of: [
        defineField({
          name: 'link',
          type: 'link',
        }),
      ],
    }),
    defineField({
      name: 'footerLinksPrimary',
      title: 'Primary Footer Links',
      type: 'array',
      of: [
        defineField({
          name: 'link',
          type: 'link',
        }),
      ],
    }),
    defineField({
      name: 'footerLinksSecondary',
      title: 'Secondary Footer Links',
      type: 'array',
      of: [
        defineField({
          name: 'link',
          type: 'link',
        }),
      ],
    }),
    defineField({
      name: 'footerLinksTertiary',
      title: 'Tertiary Footer Links',
      type: 'array',
      of: [
        defineField({
          name: 'link',
          type: 'link',
        }),
      ],
    }),
  ],
})
