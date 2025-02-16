import {defineType, defineField, defineArrayMember, Rule} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export default defineType({
  name: 'blockContent',
  type: 'object',
  title: 'Content Block',
  icon: BlockContentIcon,
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
      name: 'content',
      title: 'Content',
      type: 'array',
      group: 'component',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            // {title: 'H3', value: 'h3'},
            // {title: 'H4', value: 'h4'},
            // {title: 'Quote', value: 'blockquote'},
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [],
            // decorators: [
            //   {title: 'Strong', value: 'strong'},
            //   {title: 'Emphasis', value: 'em'},
            // ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ['https', 'mailto', 'tel'],
                      }),
                  },
                ],
              },
            ],
          },
        }),
        defineField({
          name: 'button',
          title: 'Button',
          type: 'button',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare(selection) {
      const {content} = selection
      return {
        title: content[0]?.children[0]?.text ?? 'Block Content',
        subtitle: 'Block Content',
      }
    },
  },
})
