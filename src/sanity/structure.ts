import type {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Restaurant Manager')
    .items([
      // This specifically pulls out your "Dish" menu items to the top
      S.documentTypeListItem('dish').title('Menu Items'),
      
      // This automatically lists everything else (if you add more schemas later)
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'dish'
      ),
    ])
