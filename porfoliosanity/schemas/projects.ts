import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'long_description',
      title: 'Long Description',
      type: 'string',
    }),
    defineField({
      name: 'bg_color',
      title: 'Background Color',
      type: 'string',
    }),
    defineField({
      title: 'Techstack',
      name: 'stack',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skills'}]}],
    }),
    defineField({
      title: 'Start Date',
      name: 'start_date',
      type: 'string',
    }),
    defineField({
      title: 'End Date',
      name: 'end_date',
      type: 'string',
    }),
    defineField({
      title: 'Role',
      name: 'role',
      type: 'string',
    }),
    defineField({
      title: 'Github',
      name: 'github',
      type: 'string',
    }),
    defineField({
      title: 'Live Demo Link',
      name: 'demo',
      type: 'string',
    }),
    defineField({
      name: 'preview_image',
      title: 'Preview Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'statement_image',
      title: 'Statement Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'figma_image',
      title: 'Figma Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'laptop_image',
      title: 'Laptop Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Overview',
      name: 'overview',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      title: 'Show Case Stack',
      name: 'showcase_stack',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      title: 'Problem Statement',
      name: 'statement',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      title: 'Learnings',
      name: 'learnings',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      title: 'Challenges',
      name: 'challenges',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
