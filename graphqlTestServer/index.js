const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const anagraphql = require('../');
const schema = require('./schema');

const app = express();
const port = 3000;
app.use(bodyParser.json());

const rules = {
  specificResolvers: {
    RootQueryType_authors: 3,
  },
  shallowResolvers: {
    authors: 2,
  },
  maxNested: 4,
  totalResolvers: 25,
  totalFields: 60,
};


app.use('/graphql',
  (req, res, next) => next(),
  anagraphql({ schema, rules, playground: true }),
  graphqlHTTP({
    schema,
    // graphiql: true,
  }));


app.listen(port, () => (console.log(`something on port ${port}`)));
