import { Query } from './models/Query'
import { Product } from './models/Product'
import { Category } from './models/Category'
import { Mutation } from './models/Mutation'

import { connectionPlugin, makeSchema } from '@nexus/schema'
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'

// import { addCrudResolvers } from '@ra-data-prisma/backend/'

export const schema = makeSchema({
  types: [Query, Mutation, Product, Category],
  plugins: [nexusSchemaPrisma({ experimentalCRUD: true }),
    // connectionPlugin()
  ],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('../../prisma/contex'),
        alias: 'Context',
      },
    ],
  },
})