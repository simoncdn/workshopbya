import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    ({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    ({
      name: 'slug',
      title: 'URL',
      description: "Entrez le titre de l'article sans accent, en remplaçant les espaces par des tirets (-) :",
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Entrez une courte description de votre article..',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publié le :',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Contenu',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
