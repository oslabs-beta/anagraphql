const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const anagraphql = require('anagraphql');
const schema = require('./schema');
const parser = require('../Parser/queryParser');

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.use('/graphql',
  anagraphql({ schema }),
  (req, res, next) => {
    console.log(res.locals.anagraph);
    return next();
  },
  graphqlHTTP({
    schema,
    graphiql: true,
  }));


app.listen(port, () => (console.log(`something on port ${port}`)));
