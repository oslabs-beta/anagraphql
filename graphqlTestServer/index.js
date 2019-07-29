const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const anagraphql = require('anagraphql');
const schema = require('./schema');

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.use('/graphql',
  (req, res, next) => {
    console.log(req.body);
    // console.log(req.body.query)
    return next();
  },

  anagraphql({ schema }),
  graphqlHTTP({
    schema,
    graphiql: true,
  }));


app.listen(port, () => (console.log(`something on port ${port}`)));
