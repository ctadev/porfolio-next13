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
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      title: 'Techstack',
      name: 'stack',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skills'}]}],
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
      name: 'img',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      title: 'Overview',
      name: 'overview',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      title: 'Goal1',
      name: 'goal1',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      title: 'Goal2',
      name: 'goal2',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      title: 'Learnings',
      name: 'learnings',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      title: 'Challenges',
      name: 'challenges',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
