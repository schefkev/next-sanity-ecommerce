const knives = {
  name: 'knive',
  title: 'Knives',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'article',
      title: 'Article',
      type: 'string',
    },
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'sub',
      title: 'Sub',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'availability',
      title: 'Is the item available?',
      type: 'boolean',
    },
  ],
};

export default knives;
