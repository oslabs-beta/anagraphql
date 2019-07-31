const express = require('express');
const graphqlHTTP = require('express-graphql');
const anagraphql = require('anagraphql');
const schema = require('./schema');

const app = express();
const port = 3000;
app.use(express.json());

app.use('/graphql',
  anagraphql({ schema, graphiql: true }),
  graphqlHTTP({
    schema,
  }));


app.listen(port, () => (console.log(`something on port ${port}`)));
