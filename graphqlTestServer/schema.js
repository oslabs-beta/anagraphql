const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
  name: 'book',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    author_id: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return { totallyAnObject: 'Yes!' };
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
