import { Rule } from 'sanity';

// schemaTypes/report.ts
export default {
  name: 'report',
  title: 'Report',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(1900).max(new Date().getFullYear()),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Programmatic Report', value: 'quarterly' },
          { title: 'Annual Report', value: 'annual' },
        ],
      },
    },
    {
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};