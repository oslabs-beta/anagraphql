const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const parser = require('../Parser/queryParser');

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.use('/graphql', (req, res, next) => {
  // if (req.body.query !== undefined) {
  //   console.log(JSON.stringify(parser(req.body.query)));
  // }

  next();
},
graphqlHTTP({
  schema,
  graphiql: true,
}));


app.listen(port, () => (console.log(`something on port ${port}`)));
