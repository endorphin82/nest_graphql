import { objectType, stringArg, intArg, arg } from '@nexus/schema'

export const Query = objectType({
  name: 'Query',
  definition: function(t) {
    t.crud.category()
    t.crud.categories()
    t.crud.product()
    t.crud.products()
  },
})
