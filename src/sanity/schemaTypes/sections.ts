
import { defineField, defineType } from 'sanity'

const seoFields = [
  defineField({
    name: 'seoTitle',
    title: 'SEO Title',
    type: 'string',
    validation: (Rule) => Rule.max(60),
  }),
  defineField({
    name: 'seoDescription',
    title: 'SEO Description',
    type: 'text',
    rows: 3,
    validation: (Rule) => Rule.max(160),
  }),
]

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'imageAlt', title: 'Image Alt Text', type: 'string' }),
    defineField({ name: 'primaryButtonText', title: 'Primary Button Text', type: 'string' }),
    defineField({ name: 'primaryButtonUrl', title: 'Primary Button URL', type: 'string' }),
    defineField({ name: 'secondaryButtonText', title: 'Secondary Button Text', type: 'string' }),
    defineField({ name: 'secondaryButtonUrl', title: 'Secondary Button URL', type: 'string' }),
  ],
})

export const richTextSection = defineType({
  name: 'richTextSection',
  title: 'Rich Text Section',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({ name: 'href', title: 'URL', type: 'url' }),
                ],
              },
            ],
          },
        },
      ],
    }),
  ],
})

export const splitContentSection = defineType({
  name: 'splitContentSection',
  title: 'Split Content Section',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'imageAlt', title: 'Image Alt Text', type: 'string' }),
    defineField({
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'right',
    }),
    defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
    defineField({ name: 'buttonUrl', title: 'Button URL', type: 'string' }),
  ],
})

export const cardGridSection = defineType({
  name: 'cardGridSection',
  title: 'Card Grid Section',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Section Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'columns',
      title: 'Number of Columns',
      type: 'number',
      options: { list: [2, 3, 4] },
      initialValue: 3,
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'imageAlt', title: 'Image Alt Text', type: 'string' }),
            defineField({ name: 'linkText', title: 'Link Text', type: 'string' }),
            defineField({ name: 'linkUrl', title: 'Link URL', type: 'string' }),
          ],
          preview: {
            select: { title: 'title', media: 'image' },
          },
        },
      ],
    }),
  ],
})

export const statsSection = defineType({
  name: 'statsSection',
  title: 'Statistics Section',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
      name: 'items',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'string' }),
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    }),
  ],
})

export const quoteSection = defineType({
  name: 'quoteSection',
  title: 'Quote Section',
  type: 'object',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: 'attribution', title: 'Attribution', type: 'string' }),
    defineField({ name: 'role', title: 'Role or Organisation', type: 'string' }),
  ],
})

export const faqSection = defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'answer', title: 'Answer', type: 'text', validation: (Rule) => Rule.required() }),
          ],
          preview: { select: { title: 'question' } },
        },
      ],
    }),
  ],
})

export const ctaSection = defineType({
  name: 'ctaSection',
  title: 'Call to Action Section',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
    defineField({ name: 'buttonUrl', title: 'Button URL', type: 'string' }),
  ],
})

export const pageSections = [
  heroSection,
  richTextSection,
  splitContentSection,
  cardGridSection,
  statsSection,
  quoteSection,
  faqSection,
  ctaSection,
]

export const pageSeoFields = seoFields
