import {defineField, defineType} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export default defineType({
  name: 'blockZohoForm',
  type: 'object',
  title: 'Zoho Form Block',
  icon: EnvelopeIcon,
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
      name: 'formId',
      title: 'Form Id',
      type: 'string',
      group: 'component',
      validation: (Rule) => Rule.required(),
      description:
        'E.g. "TestCRMForm" if the embed "src" is "https://forms.zohopublic.com/goldenhourpools1/form/TestCRMForm/formperma/aFlLQKuRL8SnBkTxrBMEcz28WjXfywTt9IZfp2gxpro?zf_rszfm=1"',
    }),
    defineField({
      name: 'formPermaId',
      title: 'Form Permanent Id',
      type: 'string',
      group: 'component',
      validation: (Rule) => Rule.required(),
      description:
        'E.g. "aFlLQKuRL8SnBkTxrBMEcz28WjXfywTt9IZfp2gxpro" if the embed "src" is "https://forms.zohopublic.com/goldenhourpools1/form/TestCRMForm/formperma/aFlLQKuRL8SnBkTxrBMEcz28WjXfywTt9IZfp2gxpro?zf_rszfm=1"',
    }),
  ],
  preview: {
    select: {
      formId: 'formId',
    },
    prepare(selection) {
      const {formId} = selection
      return {
        title: formId ?? 'Block Zoho Form',
        subtitle: 'Block Zoho Form',
        media: EnvelopeIcon,
      }
    },
  },
})
