import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'advices',
    title: 'Avis',
    type: 'document',
    fields: [
      defineField({
        name: 'mainImage',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      ({
        name: 'alt',
        title: 'Alt',
        type: 'string',
        description: "donnez en quelques mots une description de l'image"
      }),
    ]
})