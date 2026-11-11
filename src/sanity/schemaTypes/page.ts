
import { defineField, defineType } from 'sanity'
import { pageSeoFields } from './sections'

export const page = defineType({
  name: 'page',
  title: 'Website Pages',
  type: 'document',
  groups: [
    { name: 'content', title: 'Page Content', default: true },
    { name: 'seo', title: 'SEO & Search' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Page URL',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Internal Description',
      type: 'text',
      rows: 2,
      group: 'content',
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      group: 'content',
      of: [
        { type: 'heroSection' },
        { type: 'richTextSection' },
        { type: 'splitContentSection' },
        { type: 'cardGridSection' },
        { type: 'statsSection' },
        { type: 'quoteSection' },
        { type: 'faqSection' },
        { type: 'ctaSection' },
      ],
    }),
    ...pageSeoFields.map((field) => ({
      ...field,
      group: 'seo',
    })),
    defineField({
      name: 'noIndex',
      title: 'Hide from Search Engines',
      type: 'boolean',
      group: 'seo',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
})
