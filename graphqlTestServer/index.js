const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const anagraphql = require('anagraphql');
const schema = require('./schema');

const app = express();
const port = 3000;
app.use(bodyParser.json());
console.log(schema.getQueryType)
app.use('/graphql', anagraphql({schema, graphiql:true}));


app.listen(port, () => (console.log(`something on port ${port}`)));
