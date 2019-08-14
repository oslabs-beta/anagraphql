const pool = require('./database');

const resolvers = {

  Query: {
    getAllperson() {
      const sql = 'SELECT * FROM "person";';
      return pool.query(sql)
        .then(res => res.rows)
        .catch(err => console.error('Error is: ', err));
    },
    getperson(parent, args, context, info) {
      let sql = 'SELECT * FROM "person"';
      let whereClause = ' WHERE ';
      Object.keys(args).forEach((fieldName, i, arr) => {
        whereClause += `"${fieldName}" = '${args[fieldName]}'`;
        if (i !== arr.length - 1) whereClause += ' AND ';
        else whereClause += ';';
      });
      sql += whereClause;
      return pool.query(sql)
        .then(res => res.rows)
        .catch(err => console.error('Error is: ', err));
    },
    getAllbook() {
      const sql = 'SELECT * FROM "book";';
      return pool.query(sql)
        .then(res => res.rows)
        .catch(err => console.error('Error is: ', err));
    },
    getbook(parent, args, context, info) {
      let sql = 'SELECT * FROM "book"';
      let whereClause = ' WHERE ';
      Object.keys(args).forEach((fieldName, i, arr) => {
        whereClause += `"${fieldName}" = '${args[fieldName]}'`;
        if (i !== arr.length - 1) whereClause += ' AND ';
        else whereClause += ';';
      });
      sql += whereClause;
      return pool.query(sql)
        .then(res => res.rows)
        .catch(err => console.error('Error is: ', err));
    },
    getAllauthor() {
      const sql = 'SELECT * FROM "author";';
      return pool.query(sql)
        .then(res => res.rows)
        .catch(err => console.error('Error is: ', err));
    },
    getauthor(parent, args, context, info) {
      let sql = 'SELECT * FROM "author"';
      let whereClause = ' WHERE ';
      Object.keys(args).forEach((fieldName, i, arr) => {
        whereClause += `"${fieldName}" = '${args[fieldName]}'`;
        if (i !== arr.length - 1) whereClause += ' AND ';
        else whereClause += ';';
      });
      sql += whereClause;
      return pool.query(sql)
        .then(res => res.rows)
        .catch(err => console.error('Error is: ', err));
    },
    getAllreview() {
      const sql = 'SELECT * FROM "review";';
      return pool.query(sql)
        .then(res => res.rows)
        .catch(err => console.error('Error is: ', err));
    },
    getreview(parent, args, context, info) {
      let sql = 'SELECT * FROM "review"';
      let whereClause = ' WHERE ';
      Object.keys(args).forEach((fieldName, i, arr) => {
        whereClause += `"${fieldName}" = '${args[fieldName]}'`;
        if (i !== arr.length - 1) whereClause += ' AND ';
        else whereClause += ';';
      });
      sql += whereClause;
      return pool.query(sql)
        .then(res => res.rows)
        .catch(err => console.error('Error is: ', err));
    },
  },

  person: {
    person_id: (parent, args, context, info) => parent.person_id,
    firstname: (parent, args, context, info) => parent.firstname,
    lastname: (parent, args, context, info) => parent.lastname,
  },

  book: {
    book_id: (parent, args, context, info) => parent.book_id,
    title: (parent, args, context, info) => parent.title,
    person: (parent, args, context, info) => {
      const sql = `SELECT * FROM "person" WHERE "person_id" = '${parent.author_id}';`;
      return pool.query(sql)
        .then(res => res.rows[0])
        .catch(err => console.error('Error is: ', err));
    },
  },

  author: {
    person: (parent, args, context, info) => {
      const sql = `SELECT * FROM "person" WHERE "person_id" = '${parent.person_id}';`;
      return pool.query(sql)
        .then(res => res.rows[0])
        .catch(err => console.error('Error is: ', err));
    },
    book: (parent, args, context, info) => {
      const sql = `SELECT * FROM "book" WHERE "book_id" = '${parent.book_id}';`;
      return pool.query(sql)
        .then(res => res.rows[0])
        .catch(err => console.error('Error is: ', err));
    },
    title: (parent, args, context, info) => parent.title,
  },

  review: {
    review_id: (parent, args, context, info) => parent.review_id,
    book: (parent, args, context, info) => {
      const sql = `SELECT * FROM "book" WHERE "book_id" = '${parent.book_id}';`;
      return pool.query(sql)
        .then(res => res.rows[0])
        .catch(err => console.error('Error is: ', err));
    },
    person: (parent, args, context, info) => {
      const sql = `SELECT * FROM "person" WHERE "person_id" = '${parent.person_id}';`;
      return pool.query(sql)
        .then(res => res.rows[0])
        .catch(err => console.error('Error is: ', err));
    },
    review_body: (parent, args, context, info) => parent.review_body,
  },

};

module.exports = resolvers;
