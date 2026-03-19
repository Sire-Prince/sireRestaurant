// src/sanity/schemaTypes/dish.ts
export const dishType = {
  name: 'dish',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Dish Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Dish Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Appetizers', value: 'Appetizers' }, 
          { title: 'Mains', value: 'Mains' },       
          { title: 'Desserts', value: 'Desserts' },    
          { title: 'Drinks', value: 'Drinks' }, 
        ],
      },
    },
  ],
}
