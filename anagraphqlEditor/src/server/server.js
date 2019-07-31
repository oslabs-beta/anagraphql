const express = require('express');
const path = require('path');
const graphqlHTTP = require('express-graphql');

const anagraphql = require(path.join(__dirname, '..', '..', '..'));
const schema = require('./schema');

const app = express();
const port = 3000;
app.use(express.json());

app.use('/graphql',
  anagraphql({ schema, graphiql: true }),
  (req, res, next) => {
    next();
  },
  graphqlHTTP({
    schema,
  }));


app.listen(port, () => (console.log(`something on port ${port}`)));
