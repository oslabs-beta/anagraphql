const faker = require('faker');
const pool = require('../database.js');

const genFakeData = async () => {
  const addPeople = async () => {
    const client = await pool.connect();
    // Add People
    const promises = [];
    for (let i = 0; i < 1000; i += 1) {
      promises.push(
        client.query(
          `
      INSERT INTO person
      (firstname,
      lastname)
      VALUES
      ($1, $2)
      `,
          [faker.name.firstName(), faker.name.lastName()],
        ),
      );
    }
    return Promise.all(promises);
  };
  const addBooks = async () => {
    const client = await pool.connect();
    const promises = [];
    // Add People
    for (let i = 0; i < 1000; i += 1) {
      promises.push(
        client.query(
          `
      INSERT INTO book
      (title,
      author_id)
      VALUES
      ($1, $2)
      `,
          [faker.commerce.productName(), Math.floor(Math.random() * 999) + 1],
        ),
      );
    }
    return Promise.all(promises);
  };
  const addReviews = async () => {
    const client = await pool.connect();
    const promises = [];
    // Add People
    for (let i = 0; i < 600; i += 1) {
      promises.push(
        client.query(
          `
      INSERT INTO review
      (book_id,
      person_id,
      review_body)
      VALUES
      ($1, $2, $3)
      `,
          [
            Math.floor(Math.random() * 999) + 1,
            Math.floor(Math.random() * 999) + 1,
            faker.lorem.paragraph(),
          ],
        ),
      );
    }
    return Promise.all(promises);
  };
  const addUserReads = async () => {
    const client = await pool.connect();
    // Add People
    const promises = [];
    for (let i = 0; i < 600; i += 1) {
      promises.push(
        client.query(
          `
      INSERT INTO userRead
      (book_id,
      person_id)
      VALUES
      ($1, $2)
      `,
          [
            Math.floor(Math.random() * 999) + 1,
            Math.floor(Math.random() * 999) + 1,
          ],
        ),
      );
    }
    return Promise.all(promises);
  };
  await addPeople();
  await addBooks();
  await addReviews();
  await addUserReads();
  console.log('worked!');
};
genFakeData();
