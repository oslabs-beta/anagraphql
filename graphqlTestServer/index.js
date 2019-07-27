const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const anagraph = require('anagraphql');
const schema = require('./schema');

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.use('/graphql', anagraph({ schema, graphiql: true }));


app.listen(port, () => (console.log(`something on port ${port}`)));
