import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export default defineType({
  name: 'blockGallery',
  type: 'object',
  title: 'Gallery Block',
  icon: ImagesIcon,
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
      name: 'galleryColumns',
      title: 'Gallery Columns',
      type: 'array',
      group: 'component',
      of: [{type: 'galleryColumn'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Block Gallery',
        subtitle: 'Block Gallery',
        media: ImagesIcon,
      }
    },
  },
})
