const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const app = express();
const port = 3000;



app.use(bodyParser.json());

app.use('/', (req, res, next) => {
 res.sendFile('/Users/camera/Codesmith/anagraphql/test.html')

  next();
},
graphqlHTTP({
  schema,
  graphiql: true,
}));


app.listen(port, () => (console.log(`something on port ${port}`)));