export default {
  title: 'Client',
  name: 'client',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'text',
      description: 'The title is the client name'
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  },
}