import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
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
      title: 'Time',
      name: 'time',
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
  ],
})