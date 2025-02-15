import {defineField, defineType} from 'sanity'

export const containerType = defineType({
  name: 'container',
  title: 'Container',
  type: 'object',
  initialValue: {
    width: 'lg',
  },
  fields: [
    defineField({
      name: 'width',
      title: 'Width',
      type: 'string',
      options: {
        list: [
          {title: 'Small', value: 'sm'},
          {title: 'Medium', value: 'md'},
          {title: 'Large', value: 'lg'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'topSpacing',
      title: 'Top Spacing',
      type: 'string',
      options: {
        list: [
          {title: 'Small (6)', value: 'sm'},
          {title: 'Medium (12)', value: 'md'},
          {title: 'Large (24)', value: 'lg'},
          {title: 'Extra Large (48)', value: 'xl'},
        ],
      },
    }),
    defineField({
      name: 'topSpacingDesktop',
      title: 'Top Spacing (Desktop)',
      description: 'Overrides top spacing at desktop viewports',
      type: 'string',
      options: {
        list: [
          {title: 'Small (6)', value: 'sm'},
          {title: 'Medium (12)', value: 'md'},
          {title: 'Large (24)', value: 'lg'},
          {title: 'Extra Large (48)', value: 'xl'},
        ],
      },
    }),
    defineField({
      name: 'bottomSpacing',
      title: 'Bottom Spacing',
      type: 'string',
      options: {
        list: [
          {title: 'Small (6)', value: 'sm'},
          {title: 'Medium (12)', value: 'md'},
          {title: 'Large (24)', value: 'lg'},
          {title: 'Extra Large (48)', value: 'xl'},
        ],
      },
    }),
    defineField({
      name: 'bottomSpacingDesktop',
      title: 'Bottom Spacing (Desktop)',
      description: 'Overrides bottom spacing at desktop viewports',
      type: 'string',
      options: {
        list: [
          {title: 'Small (6)', value: 'sm'},
          {title: 'Medium (12)', value: 'md'},
          {title: 'Large (24)', value: 'lg'},
          {title: 'Extra Large (48)', value: 'xl'},
        ],
      },
    }),
    defineField({
      name: 'isCentered',
      description: 'Toggle on for centered text',
      type: 'boolean',
    }),
    defineField({
      name: 'isMobileFullWidth',
      description: 'Toggle on for no left or right padding on mobile viewports',
      type: 'boolean',
    }),
  ],
})
