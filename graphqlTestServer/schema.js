const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLSchema,
} = require('graphql');
const pgp = require('pg-promise')();
const connectionString = require('./async_db');

const db = {};
db.conn = pgp(connectionString);

const BookType = new GraphQLObjectType({
  name: 'book',
  fields: () => ({
    book_id: { type: GraphQLID },
    title: { type: GraphQLString },
    author_id: { type: GraphQLID },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parentValue, args) {
        const query = `SELECT * FROM "person" WHERE person_id=${parentValue.author_id}`;
        return db.conn.many(query)
          .then(data => data);
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'author',
  fields: () => ({
    person_id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    books: {
      type: new GraphQLList(BookType),
      resolve(parentValue, args) {
        const query = `SELECT * FROM "book" WHERE author_id=${parentValue.person_id}`;
        return db.conn.many(query)
          .then(data => data);
      },
    },
  }),
});

const PersonType = new GraphQLObjectType({
  name: 'person',
  fields: () => ({
    person_id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
  }),
});

const ReviewType = new GraphQLObjectType({
  name: 'review',
  fields: () => ({
    review_id: { type: GraphQLID },
    book_id: { type: GraphQLID },
    person_id: { type: GraphQLID },
    review_body: { type: GraphQLString },
    book: {
      type: BookType,
      resolve(parentValue, args) {
        const query = `SELECT * FROM "book" WHERE book_id=${parentValue.book_id}`;
        return db.conn.one(query)
          .then(data => data);
      },
    },
    reviewAuthor: {
      type: PersonType,
      resolve(parentValue, args) {
        const query = `SELECT * FROM "person" WHERE person_id=${parentValue.person_id}`;
        return db.conn.one(query)
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
    authors: {
      type: new GraphQLList(AuthorType),
      args: { limit: { type: GraphQLInt } },
      resolve(parentValue, args) {
        const query = `SELECT DISTINCT person.person_id, person.firstname, person.lastname
        FROM book join person
        ON book.author_id = person.person_id LIMIT ${args.limit};`;
        return db.conn.many(query)
          .then(data => data);
      },
    },
    reviews: {
      type: new GraphQLList(ReviewType),
      args: { limit: { type: new GraphQLNonNull(GraphQLInt) } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM review LIMIT ${args.limit};`;
        return db.conn.many(query)
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
