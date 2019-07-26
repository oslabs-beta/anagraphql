const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const middlewareTest = require('./middlewareTest')

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.use('/graphql',
graphqlHTTP({
    schema,
    graphiql: true,
  }),
 // middlewareTest.sayHello
);

app.listen(port, () => (console.log(`something on port ${port}`)));
