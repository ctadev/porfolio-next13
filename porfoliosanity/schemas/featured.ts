import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Projects',
  type: 'document',
  fields: [
    defineField({
      title: 'Top Featured Project',
      name: 'selected',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'projects'}]}],
    }),
  ],
})
