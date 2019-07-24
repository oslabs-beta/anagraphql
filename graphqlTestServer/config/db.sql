CREATE TABLE person (
  person_id SERIAL PRIMARY KEY,
  firstname VARCHAR,
  lastname VARCHAR
);

CREATE TABLE book (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(256),
  author_id INTEGER REFERENCES person(person_id)
);

CREATE TABLE review (
  review_id SERIAL PRIMARY KEY,
  book_id INTEGER REFERENCES book(book_id),
  person_id INTEGER REFERENCES person(person_id),
  review_body TEXT
);

CREATE TABLE userRead(
  person_id  INTEGER REFERENCES book(book_id),
  book_id INTEGER REFERENCES book(book_id),
  CONSTRAINT userread_personid_bookid_key UNIQUE (person_id, book_id)
)