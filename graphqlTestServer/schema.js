const graphql = require('graphql');
const pgp = require('pg-promise')();
const connectionString = require('./async_db');

const db = {};
db.conn = pgp(connectionString);

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = graphql;


const PersonType = new GraphQLObjectType({
  name: 'person',
  fields: () => ({
    person_id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    book: {
      type: new GraphQLList(BookType),
      resolve(parentValue, args) {
        const query = `SELECT * FROM "book" WHERE author_id=${parentValue.person_id}`;
        return db.conn.many(query)
          .then(data => data);
      },
    },
  }),
});

const BookType = new GraphQLObjectType({
  name: 'book',
  fields: () => ({
    book_id: { type: GraphQLID },
    title: { type: GraphQLString },
    author_id: { type: GraphQLID },
    author: {
      type: new GraphQLList(PersonType),
      resolve(parentValue, args) {
        const query = `SELECT * FROM "person" WHERE person_id=${parentValue.author_id}`;
        return db.conn.many(query)
          .then(data => data);
      },
    },
  }),
});


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    person: {
      type: PersonType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM "person" WHERE person_id=${args.id}`;
        return db.conn.one(query)
          .then(data => data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});


// Queries to be performed:

// Select all Authors of books:
const selectAuthors = `
SELECT DISTINCT book.author_id, person.firstname
FROM book join person
ON book.author_id = person.person_id;
`;

const selectReviewers = `
`;
const selectReaders = `
`;
