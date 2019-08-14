const faker = require('faker');
const pool = require('../database.js');


const addPeopleTemplate = () => {
  pool.connect((err, client, done) => {
    if (err) throw err;
    // Add People
    for (let i = 0; i < 1000; i += 1) {
      client.query(`
      INSERT INTO person
      (firstname,
      lastname)
      VALUES
      ($1, $2)
      `,
      [faker.name.firstName(), faker.name.lastName()],
      (err, res) => {
        done();
        if (err) {
          console.log(err.stack);
        } else {
          console.log(res.rows[0]);
        }
      });
    }
  });
};

const addBooks = () => {
  pool.connect((err, client, done) => {
    if (err) throw err;
    // Add People
    for (let i = 0; i < 1000; i += 1) {
      client.query(`
      INSERT INTO book
      (title,
      author_id)
      VALUES
      ($1, $2)
      `,
      [faker.commerce.productName(), (Math.floor(Math.random() * 999) + 1)],
      (err, res) => {
        done();
        if (err) {
          console.log(err.stack);
        } else {
          console.log(res.rows[0]);
        }
      });
    }
  });
};


const addReviews = () => {
  pool.connect((err, client, done) => {
    if (err) throw err;
    // Add People
    for (let i = 0; i < 600; i += 1) {
      client.query(`
      INSERT INTO review
      (book_id,
      person_id,
      review_body)
      VALUES
      ($1, $2, $3)
      `,
      [(Math.floor(Math.random() * 999) + 1), (Math.floor(Math.random() * 999) + 1), faker.lorem.paragraph()],
      (err, res) => {
        done();
        if (err) {
          console.log(err.stack);
        } else {
          console.log(res.rows[0]);
        }
      });
    }
  });
};

const addUserReads = () => {
  pool.connect((err, client, done) => {
    if (err) throw err;
    // Add People
    for (let i = 0; i < 600; i += 1) {
      client.query(`
      INSERT INTO userRead
      (book_id,
      person_id)
      VALUES
      ($1, $2)
      `,
      [(Math.floor(Math.random() * 999) + 1), (Math.floor(Math.random() * 999) + 1)],
      (err, res) => {
        done();
        if (err) {
          console.log(err.stack);
        } else {
          console.log(res.rows[0]);
        }
      });
    }
  });
};

// addPeople();
// addBooks();
// addReviews();
// addUserReads();
