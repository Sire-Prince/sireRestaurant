import { type SchemaTypeDefinition } from 'sanity'
import { dishType } from './dish'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [dishType],
}
